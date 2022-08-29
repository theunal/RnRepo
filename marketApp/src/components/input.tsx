import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ placeholder, onChangeText, value, icon, isSecure }: any) => {
    return (
        <View style={styles.container}>
            {icon}
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={styles.input}
                secureTextEntry={isSecure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        margin: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        flexDirection: 'row'
    },
    input: { flex: 1 }
})

export default Input