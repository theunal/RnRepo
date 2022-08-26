import { SafeAreaView, Text, StyleSheet, Button } from "react-native";
import { format as prettyFormat } from 'pretty-format';


const SecondPage = (props: any) => {
    console.log(prettyFormat(props))
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello Second Page</Text>
            <Button title={'go first page'} onPress={() => props.navigation.navigate('FirstPage')}></Button>
            <Button title={'go back'} onPress={() => props.navigation.goBack()}></Button>
            <Button title={'pop'} onPress={() => props.navigation.pop()}></Button>
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

export default SecondPage