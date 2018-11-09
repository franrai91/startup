import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
        <View style={styles.newView}>
        
        </View>
        <View style={styles.anotherView}>
          
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  newView: {
    flex: 1,
    width: 340,
    backgroundColor: '#DC3939',
    fontSize: 15,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
  },
  anotherView: {
    flex: 0.5,
    width: 240,
    backgroundColor: 'blue',
    fontSize: 15,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
  }
});
