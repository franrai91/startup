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
        height: 100,
        width: 100,
  
        alignSelf: 'flex-start'
    },
    purpleBox: {
        backgroundColor: 'purple',
        height: 100,
        width: 100,
        
        alignSelf: 'flex-end',
    },
    whiteBox: {
        backgroundColor: 'white',
        height: 100,
        width: 100,
      
        alignSelf: 'center'
    },
    box: {
        margin: 10,
        borderRadius: 10,
    }
})

export default styles