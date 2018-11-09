import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles.js';

export default class App extends React.Component {
  render() {
    return (
    /*  <View style={[styles.container]}>
        <View style={[styles.redBox, styles.box, height='50%']}></View>       
        <View style={[styles.whiteBox, styles.box]}></View>
        <View style={[styles.purpleBox, styles.box]}></View>
      </View>*/

      <View style={styles.container}>
        <View style={styles.article}>
          <View style={styles.content}>
            <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
            <View style={styles.socialContainer}>
              <Image source={{uri: 'https://i1.wp.com/medellinstyle.com/wp-content/uploads/facebook-logo3.jpg?fit=300%2C300&ssl=1'}}
                    style={styles.socialImage} />
              <Image source={{uri: 'http://pngimg.com/uploads/twitter/twitter_PNG32.png'}}
                    style={styles.socialImage} />
              <Image source={{uri: 'http://cofarming.info/wp-content/uploads/2017/01/Linkedin-logo-1-550x550-300x300.png'}}
                    style={styles.socialImage} />
              <Image source={{uri: 'https://images.vexels.com/media/users/3/137399/isolated/preview/47c9900ae893cbed1e1599ab9c8bcb18-pinterest-icon-logo-by-vexels.png'}}
                    style={styles.socialImage} />
            </View>
          </View>
          <Image source={require('./assets/image.png')}
                   style={styles.artileIMG} />
        </View>
      </View>
    );
  }
}
