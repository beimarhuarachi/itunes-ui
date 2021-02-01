import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Card, Portal, Button, Dialog, Paragraph } from 'react-native-paper';
import { Audio } from 'expo-av';
import { NoResultsFound } from './NoResultsFound';
import NativeToastModule, { ToastDuration } from '../nativeModules/toast.module';

function getCardHeaderContent(item) {
  if (!item.trackName) {
    return 'Unknown';
  }
  return `${item.trackName}`;
}

export const ResultsList = ({ itunesItems }) => {
  const [sound, setSound] = useState();
  const [itemSelected, setItemSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const showDialog = (item) => {
    setItemSelected(item);
    setVisible(true);
  };
  const hideDialog = () => {
    if (sound) {
      sound.unloadAsync();
    }
    setItemSelected(null);
    setVisible(false);
  };

  async function playSound(item) {
    if (!item.previewUrl || item.previewUrl.endsWith('.m4v')) {
      hideDialog();
      Alert.alert(
        'Warning',
        'It is not possible to play preview. An error ocurred while playing preview',
        [
          { text: 'OK', onPress: () => {}}
        ],
        { cancelable: false }
      );
      return;
    }

    if (sound) {
      sound.unloadAsync();
    }
    const { sound } = await Audio.Sound.createAsync(
      { uri: item.previewUrl },
      { shouldPlay: true }
    );
    setSound(sound);
    NativeToastModule.showToast(`Playing: ${itemSelected.trackName}`, ToastDuration.LONG);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={{ paddingTop: 20 }}>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{ itemSelected && itemSelected.trackName }</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{ itemSelected && itemSelected.collectionName}</Paragraph>
            {
              itemSelected &&
              <Image source={{ uri: itemSelected.artworkUrl60 }} style={styles.cardImageBig}></Image>
            }
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Close</Button>
            <Button
              disabled={false}
              icon="play"
              mode="contained"
              onPress={() => playSound(itemSelected)}
            >
              Play Preview
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      {
        itunesItems.loading
        &&
        (
          <ActivityIndicator style={{padding: 50}} size="large" color="#00ff00" />
        )
      }
      {
        itunesItems.loaded && !itunesItems.error
        &&
        (
          <FlatList
            keyExtractor={(item, index) => `${item.trackId}${index}`}
            data={itunesItems.items || []}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => showDialog(item)}>
                <Card.Title
                  title={getCardHeaderContent(item)}
                  subtitle={`${item.artistName} / ${item.collectionName}`}
                  left={() => <Image source={{ uri: item.artworkUrl60 }} style={styles.cardImage} ></Image>}
                  right={() => <Text style={styles.cardPrice}>{`${item.trackPrice ? item.trackPrice : ''}$`}</Text>}
                />
              </TouchableOpacity>
            )}
          />
        )
      }
      {
        itunesItems.loaded && !itunesItems.error && itunesItems.items.length === 0
        &&
        (
          <NoResultsFound />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  cardImage: { width: 50, height: 50 },
  cardImageBig: { width: '100%', height: 200 },
  cardPrice: { fontWeight: 'bold', fontSize: 20, paddingRight: 10 }
});

