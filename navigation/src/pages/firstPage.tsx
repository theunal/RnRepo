import { Button, SafeAreaView, StyleSheet, Text } from "react-native"

const FirstPage = ({ navigation }: any) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello First Page</Text>
            <Button title={'go second page'} onPress={() => navigation.navigate('SecondPage', { text: 'text 1' })}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default FirstPage