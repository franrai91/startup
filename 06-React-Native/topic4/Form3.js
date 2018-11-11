import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import AppTouchableOpacity from './AppTouchableOpacity';

export default class Form3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the second screen of the Stack</Text>
        <AppTouchableOpacity style={{margin: 5}} text="Finish" type="primary" 
        onPress={
          () => this.props.navigation.popToTop()
        }/>
      </View>
    );
  }
}