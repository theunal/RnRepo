import { StyleSheet, View, Keyboard, FlatList, RefreshControl, ScrollView, SafeAreaView } from "react-native"
import FloatingButton from "../components/FloatingButton";
import React, { useEffect, useState } from "react";
import firebase from '../../firebase'
import { auth } from "firebase";
import DataParser from "../utilities/dataParse";
import MessageCard from "../components/MessageCard";
import { StatusBar } from "expo-status-bar";
import CustomModal from "../components/customModal";

const MessagePage = () => {

    const [isModalVisible, setModalVisible] = useState(false)
    const [text, setText] = useState('')
    const [modalPosition, setModalPosition] = useState('flex-end')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        firebase
            .database()
            .ref('messages/')
            .on('value', (x) => {
                let data: any = DataParser(x.val())
                setMessages(data)
            })
    }, [])

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const keyboardShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            setModalPosition('flex-start')
        }
    )

    const keyboardHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setModalPosition('flex-end')
        }
    )

    const submit = () => {
        let userMail = auth().currentUser?.email

        firebase
            .database()
            .ref('messages/')
            .push({
                message: text,
                userName: userMail?.split('@')[0],
                date: (new Date()).toISOString()
            })
        setModalVisible(!isModalVisible)
    }

    const renderMessageCard = ({ item }: any) => <MessageCard data={item} />

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)
        firebase
            .database()
            .ref('messages/')
            .on('value', (x) => {
                let data: any = DataParser(x.val())
                setMessages(data)
            })
        setRefreshing(false)
    }

    return (
            <ScrollView contentContainerStyle={styles.container} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <StatusBar />

                <CustomModal setText={setText} onPress={submit} modalPosition={modalPosition} isModalVisible={isModalVisible}
                    toggleModal={toggleModal} />

                <FlatList data={messages} renderItem={renderMessageCard} />

                <View style={styles.floatingButton}>
                    <FloatingButton onPress={toggleModal} />
                </View>

            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    floatingButton: {
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 70,
        right: 70
    }
})

export default MessagePage