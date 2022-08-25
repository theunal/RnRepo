import { Button, StyleSheet, TextInput, View } from "react-native"


const Foot = (props : any) => {
    return (
        <View style={styles.foot_container}>
            <TextInput style={styles.input} placeholder='Yapılacak...' onChangeText={props.search} />
            <View style={styles.button}>
                <Button color={'white'} title={'Kaydet'} onPress={props.addTodo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    foot_container: {
        height: 120,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#37474F'
    },
    input: {
        flex: 2,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10
    },
    button: {
        flex: 2,
        backgroundColor: '#808080',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
})

export default Foot