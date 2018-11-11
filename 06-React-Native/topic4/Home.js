import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import {createBottomTabNavigator} from 'react-navigation';
import Form1 from './Form1';
import { Ionicons } from '@expo/vector-icons';

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
  Forms: Home,
  Others: Form1,
},{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Forms') {
          iconName = 'ios-list';
        } else if (routeName === 'Others') {
          iconName = 'logo-apple';
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
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