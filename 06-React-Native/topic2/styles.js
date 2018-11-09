import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        height: 100,
        width: 100,

    },
    whiteBox: {
        backgroundColor: 'white',
        height: 100,
        width: 100,
    },
    box: {
        margin: 15,
        borderRadius: 10,
    }
})

export default styles