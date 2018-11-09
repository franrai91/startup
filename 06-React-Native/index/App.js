import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true} style={{flexDirection: 'row',height: 100,padding: 20,}}>
        <View style={styles.newView}>
        </View>
        <View style={styles.anotherView}>
        </View>
        <View style={styles.thirdView}>
        </View>
        <View style={styles.anotherView}>
        </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  newView: {
    flex: 0.2,
    height: 140,
    width: 340,
    backgroundColor: '#DC3939',
    fontSize: 15,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
  },
  anotherView: {
    flex: 0.5,
    height: 240,
    width: 240,
    backgroundColor: 'blue',
    fontSize: 15,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
  },
  thirdView:{
    flex: 0.3,
    height: 540,
    width: 20,
    backgroundColor: 'grey',
    fontSize: 15,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
  }
});
