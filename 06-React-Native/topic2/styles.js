import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        ...Platform.select({
            ios:{
                backgroundColor: 'grey',
            },
            android:{
                backgroundColor: 'green',
            },
        }),
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