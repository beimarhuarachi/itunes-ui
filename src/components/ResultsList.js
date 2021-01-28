import React from 'react';
import { View, ActivityIndicator, Text, FlatList, Image, TouchableHighlight } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { NoResultsFound } from './NoResultsFound';

function getCardHeaderContent(item) {
  if (!item.trackName || !item.trackPrice) {
    return 'Unknown';
  }
  return `${item.trackName} - ${item.trackPrice}$`;
}

export const ResultsList = ({ itunesItems }) => {
  return (
    <View style={{ paddingTop: 20 }}>
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
              <TouchableHighlight>
                <Card.Title
                  title={getCardHeaderContent(item)}
                  subtitle={`${item.artistName} / ${item.collectionName}`}
                  left={() => <Image source={{ uri: item.artworkUrl60 }} style={{ width: 50, height: 50 }} ></Image>}
                  right={(props) => <IconButton {...props} icon="play" onPress={() => {}} />}
                />
              </TouchableHighlight>
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

