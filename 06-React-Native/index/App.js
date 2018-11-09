import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true} style={{flexDirection: 'row',height: 100,padding: 20,}}>
        <View style={styles.newView}>
          <Text >This is the first text</Text>
        </View>
        <View style={styles.anotherView}>
        <Text style={{fontSize:40,color:'red',fontWeight:'bold'}}>
          This is the second text, with diferent size
          <Text style={{fontSize:20,color:'white', fontStyle:'italic',fontWeight:'normal'}}>And with nesting</Text>
          </Text>
        </View>
        <View style={styles.thirdView}>
          <Text style={{color:'violet',fontSize:27}}>This is the last text</Text>
        </View>
        <View style={styles.anotherView}>
          <Image style={{width:100, height:100}} source= {require ('./img/image.png')}></Image>
          <Image style={{width:100, height:100}} source= {{uri: 'https://t1.kn3.net/taringa/2/9/4/1/F/8/spideriron/C8E.jpg'}}></Image>
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
