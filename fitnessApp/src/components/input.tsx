import { Text, StyleSheet, View, TextInput } from "react-native"


const Input = ({ label, placeholder, onChangeText }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <View style={styles.input_container}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    label: {
        fontSize: 15,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    input_container: {
        borderWidth: 1,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: '#bdbdbd'
    }
})

export default Input