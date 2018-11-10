import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AppTextInput from './AppTextInput.js';
import AppTouchableOpacity from './AppTouchableOpacity.js';
import styles from './styles.js'; 

export default class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {text: ''}
    this.handleOnPress = this.handleOnPress.bind(this)
  }
  handleOnPress(){
    this.setState({
      text: ''
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <AppTextInput placeholder="Write over here" type="password" onChangeText={(text) => this.setState({text})} value={this.state.text}> 
          <TouchableOpacity style={styles.inputType} onPress={this.handleOnPress} text="Clear Text">
          </TouchableOpacity>
        </AppTextInput>
        <AppTouchableOpacity text="Primary Button" type="primary" onPress={this.handleOnPress}/>
        <AppTouchableOpacity text="Secundary Button" type="secundary" onPress={this.handleOnPress}/>
        <AppTouchableOpacity text="Disabled Button" type="secundary" disabled/>
    </View>
    );
  }
}
