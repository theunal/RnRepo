import { StyleSheet, Text, View } from "react-native"


const UserCard = ({ user }: any) => {

    return (
        <View style={styles.container}>
            <Text style={styles.username}>{user.username}</Text>
            <View style={styles.inner_container}>
                <Text>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        marginVertical: 5,
        padding: 10,
        marginTop:10
    },
    email: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'gray',
        marginLeft: 5,
    marginTop:2
    },
    username: {
        fontWeight: 'bold'
    },
    inner_container:{
        flexDirection: 'row'
    }
})

export default UserCard