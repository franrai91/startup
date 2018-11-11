import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import AppTouchableOpacity from './AppTouchableOpacity';
export default class Form2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the first screen of the Stack</Text>
        <AppTouchableOpacity style={{margin: 5}} text="Next" type="primary" 
        onPress={
          () => this.props.navigation.navigate('Form3')
        }/>
      </View>
    );
  }
}