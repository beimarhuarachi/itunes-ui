import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export const Header = ({ appName }) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title={appName} style={styles.content}/>
    </Appbar.Header>
  );
}

Header.defaultProps = {
  appName: '',
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  content: {
    textAlign: 'center'
  },
});
