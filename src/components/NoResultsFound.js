import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const NoResultsFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>No Results Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    opacity: 0.5,
    padding: 50
  }
});
