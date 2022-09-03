import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const PageButtons = ({ page, incrementPage, decrementPage }: any) => {
    return (
        <View style={styles.buttonContainer}>
            {
                page !== 1 ?
                    <TouchableOpacity style={styles.button} onPress={decrementPage}>
                        <AntDesign name="caretleft" size={15} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>
                            Previous
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.disabledButton} disabled onPress={decrementPage}>
                        <AntDesign name="caretleft" size={15} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>
                            Previous
                        </Text>
                    </TouchableOpacity>
            }
            {
                page !== 99 ?
                    <TouchableOpacity style={styles.button} onPress={incrementPage}>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                        <AntDesign name="caretright" size={15} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.disabledButton} disabled onPress={incrementPage}>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                        <AntDesign name="caretright" size={15} color="white" style={styles.icon} />
                    </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    disabledButton: {
        flex: 1,
        backgroundColor: '#2F3337',
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: { alignSelf: 'center', fontSize: 15, color: 'white', marginLeft: 5, marginRight: 5 },
    icon: { alignSelf: 'center' }
})

export default PageButtons