import { StyleSheet, Text, TouchableOpacity } from "react-native"


const HomeButton = ({ text, onPress }: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1976d2',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default HomeButton