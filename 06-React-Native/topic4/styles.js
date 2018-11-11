import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    margin: 10
    },
    primaryButton: {
    backgroundColor: 'darkcyan',
    },
    primaryButtonText: {
    color: 'white'
    },
    secundaryButton: {
    borderWidth: 1,
    borderColor: 'grey'
    },
  });
export default styles