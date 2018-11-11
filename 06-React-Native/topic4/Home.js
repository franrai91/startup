import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { Ionicons } from '@expo/vector-icons';
import AppTouchableOpacity from './AppTouchableOpacity';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>The first text</Text>
        <AppTouchableOpacity style={{margin: 5}} text="Next" type="primary" 
        onPress={
          () => this.props.navigation.navigate('Form2')
        }/>
        </View>
    ); 
  }
}
export default createBottomTabNavigator({
  Forms: createStackNavigator({
    Forms: Home,
    Form2: Form2,
    Form3: Form3
  }),
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