import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.redBox, styles.box]}></View>       
        <View style={[styles.whiteBox, styles.box]}></View>
        <View style={[styles.purpleBox, styles.box]}></View>
      </View>
    );
  }
}
