import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import {createBottomTabNavigator} from 'react-navigation';
import Form1 from './Form1';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>The first text</Text>
        </View>
    );
  }
}
export default createBottomTabNavigator({
  Home: Home,
  Form: Form1,
},{
  
  tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      style: {
          backgroundColor: '#fff',
      },
      indicatorStyle: {
          backgroundColor: '#000',
      },
    }
  })