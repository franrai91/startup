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
        alignSelf: 'flex-start'
    },
    purpleBox: {
        backgroundColor: 'purple',
        height: 150,
        width: 150,

    },
    whiteBox: {
        backgroundColor: 'white',
        height: 250,
        width: 250,
    },
    box: {
        margin: 15,
        borderRadius: 10,
    }
})

export default styles