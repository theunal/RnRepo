import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native"


const Button = ({ title, onPress, loading }: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
            {
                loading ?
                    <ActivityIndicator color={'white'} /> :
                    <Text style={styles.text}>
                        {title}
                    </Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        padding: 15,
        margin: 10,
        borderRadius: 10
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})

export default Button