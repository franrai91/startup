import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#1482FE',
        flex: 1,
        justifyContent: 'space-between',
    },
    redBox: {
        backgroundColor: 'red',
        height: height * .5,
        width: 100,
  
        alignSelf: 'flex-start'
    },
    purpleBox: {
        backgroundColor: 'purple',
        height: height * .2,
        width: 100,
        
        alignSelf: 'flex-start',
    },
    whiteBox: {
        backgroundColor: 'white',
        height: height * .3,
        width: 100,
      
        alignSelf: 'flex-start'
    },
    box: {
        margin: 0,
        borderRadius: 10,
    }
})

export default styles