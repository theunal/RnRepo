import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    categoryContainer: {
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 0.5
    },
    image: {
        width: Dimensions.get('screen').width / 5,
        height: Dimensions.get('screen').height / 8,
        resizeMode: 'contain',
        marginLeft: 20,
        borderRadius: 25,
        backgroundColor: 'white',
        minWidth: 80
    },
    categoryName: {
        fontSize: 20,
        marginLeft: 10
    }
})

export default styles