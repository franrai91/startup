import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#1482FE',
        flex: 1,
    },
    redBox: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
        margin: 15,
        alignSelf: 'flex-start'
    },
    purpleBox: {
        backgroundColor: 'purple',
        height: 150,
        width: 150,
        margin: 15,
    },
    whiteBox: {
        backgroundColor: 'white',
        height: 250,
        width: 250,
        margin: 15,
        
    },
})

export default styles