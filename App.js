import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import HeaderContainer from './src/containers/HeaderContainer';
import ResultListContainer from './src/containers/ResultListContainer';
import SearchFormContainer from './src/containers/SearchFormContainer';
import { configureStore } from './src/state/store';

const initialState = {};

const store = configureStore(initialState);

export default function App() {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <View style={{ height: 70 }}>
        <SearchFormContainer />
      </View>
      <ResultListContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
