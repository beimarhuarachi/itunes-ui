import { useFormik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';

export const SearchForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      searchTerm: '',
    },
    onSubmit: (value) => {
      onSubmit({ term: value.searchTerm });
    },
  });

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Searchbar
          placeholder="Search"
          value={formik.values.searchTerm}
          onChangeText={formik.handleChange('searchTerm')}
        />
      </View>
      <View style={styles.action}>
        <Button mode="contained" onPress={formik.handleSubmit}>
          Search
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
  input: {
  },
  action: {
    paddingTop: 15,
    paddingLeft: 15,
    width: 150
  }
});
