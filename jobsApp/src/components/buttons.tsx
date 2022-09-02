import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Buttons = ({ submit, jobDetail, setFavorite }: any) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => submit(jobDetail.refs.landing_page)}>
                <Entypo name="login" size={15} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setFavorite(jobDetail)}>
                <AntDesign name="heart" size={15} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>
                    Favorite Job
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        flex: 1,
        backgroundColor: '#EF5350',
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: { alignSelf: 'center' },
    buttonText: { alignSelf: 'center', fontSize: 15, color: 'white', marginLeft: 5 }
})

export default Buttons