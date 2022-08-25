import { StyleSheet, Text, View } from "react-native"


const Head = ({ number }: any) => {
    return (
        <View style={styles.head_container}>
            <Text style={styles.header}>Yapılacaklar</Text>
            <Text style={styles.number}>{number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    head_container: {
        flexDirection: 'row',
    },
    header: {
        color: '#FFA500',
        fontSize: 45,
        fontWeight: 'bold',
        margin: 10,
        flex: 1
    },
    number: {
        color: '#FFA500',
        fontSize: 45,
        margin: 10
    }
})

export default Head