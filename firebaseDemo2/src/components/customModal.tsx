import { View, TextInput, StyleSheet, Dimensions } from "react-native"
import Button from "./Button";
import Modal from "react-native-modal";

const CustomModal = ({ setText, onPress, modalPosition, isModalVisible, toggleModal }: any) => {
    return (
        <Modal
            style={{ justifyContent: modalPosition, margin: 0 }}
            isVisible={isModalVisible}
            onSwipeComplete={toggleModal}
            onBackdropPress={toggleModal}
            onBackButtonPress={toggleModal}>

            <View style={styles.modal}>
                <View style={{ flex: 1, paddingTop: 20, paddingBottom: 20 }}>
                    <TextInput multiline
                        onChangeText={setText}
                        style={{
                            backgroundColor: '#e0e0e0',
                            flex: 1, borderRadius: 10, paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 10,
                            fontSize: 20
                        }} />
                </View>
                <Button title='Gönder' onPress={onPress} />
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        height: Dimensions.get('screen').height / 2
    }
})

export default CustomModal