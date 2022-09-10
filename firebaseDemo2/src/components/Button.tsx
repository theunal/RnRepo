import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress, loading, theme = 'primary' }: any) => { // theme string olmayabilir diye kızıyor ama çalışıyor
    return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress} disabled={loading}>
            {
                loading ?
                    <ActivityIndicator color={'white'} /> :
                    <Text style={styles[theme].text}>
                        {title}
                    </Text>
            }
        </TouchableOpacity>
    )
}

const baseStyle = StyleSheet.create({
    container: {
        padding: 15,
        margin: 10,
        borderRadius: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

const styles = {
    primary: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            backgroundColor: 'red'
        },
        text: {
            ...baseStyle.text,
            color: 'white'
        }
    }),
    secondary: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'red'
        },
        text: {
            ...baseStyle.text,
            color: 'red'
        }
    })
}

export default Button