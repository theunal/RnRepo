import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    image: {
        flex: 1,
        height: Dimensions.get('screen').height / 4
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    textBackground: {
        backgroundColor: '#rgba(0, 0, 0, 0.6)',
        height: 35,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    }
})

export default styles