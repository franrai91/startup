import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.newView}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  newView: {
    margin: 60,
    width: 340,
    backgroundColor: '#DC3939',
    fontSize: 15,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
  }
});
