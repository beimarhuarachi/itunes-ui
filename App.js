import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import HeaderContainer from './src/containers/HeaderContainer';
import ResultListContainer from './src/containers/ResultListContainer';
import SearchFormContainer from './src/containers/SearchFormContainer';
import { configureStore } from './src/state/store';

const initialState = {};

const store = configureStore(initialState);

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Provider>
        <HeaderContainer />
        <View style={{ height: 70 }}>
          <SearchFormContainer />
        </View>
        <ResultListContainer />
      </Provider>
    </ReduxProvider>
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
