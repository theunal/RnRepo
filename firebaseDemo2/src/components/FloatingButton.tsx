import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const FloatingButton = ({ onPress }: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.view}>
                <AntDesign name="pluscircleo" size={24} color="white" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: 60,
        height: 60,
        borderRadius: 50
    }
})

export default FloatingButton