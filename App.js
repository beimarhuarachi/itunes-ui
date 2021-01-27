import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import HeaderContainer from './src/containers/HeaderContainer';
import { configureStore } from './src/state/store';

const initialState = {};

const store = configureStore(initialState);

export default function App() {
  return (
    <Provider store={store}>
      <HeaderContainer/>
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
