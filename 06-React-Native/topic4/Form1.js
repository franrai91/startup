import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
export default class Form1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the SECOND screen of the Tab</Text>
      </View>
    );
  }
}