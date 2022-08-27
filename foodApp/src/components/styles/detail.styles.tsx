import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    image: {
        height: Dimensions.get('screen').height / 3,
        flex: 1,
        borderRadius: 10
    },
    innerContainer: {
        marginTop: 10
    },
    mealName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgb(165,43,43)'
    },
    area: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(165,43,43)'
    },
    desc: {
        textAlign: 'justify'
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 10,
        padding: 5
    }
})

export default styles