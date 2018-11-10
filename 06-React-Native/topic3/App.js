import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity style={styles.inputType} onPress={this.handleOnPress}>
          <TextInput placeholder="Write over here" onChange={(text)=> this.setState({text})} value={this.state.text}></TextInput>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputType:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
