import { Alert, SafeAreaView, StyleSheet, View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import Input from "../components/input"
import HomeButton from "../components/homeButton";
import { useState } from "react";

const UserSign = ({ navigation }: any) => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const submitHandle = () => {
        if (!name || !lastName || !email || !age)
            Alert.alert('Fitness Salonu', 'Gerekli Yerleri Doldurunuz')

        let user = {
            name,
            lastName,
            email,
            age
        }
        navigation.navigate('ResultPage', user)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Input label={'Üye Adı:'} placeholder={'Adınızı giriniz'} onChangeText={setName} />
            <Input label={'Üye Soyadı:'} placeholder={'Soyadınızı giriniz'} onChangeText={setLastName} />
            <Input label={'Üye E-Mail:'} placeholder={'Email adresinizi giriniz'} onChangeText={setEmail} />
            <Input label={'Üye Yaş:'} placeholder={'Yaşınızı giriniz'} onChangeText={setAge} />
            <View style={styles.button} >
                <HomeButton text={'Kaydı Tamamla'} onPress={submitHandle} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    button: {
        alignItems: 'center'
    }
})

export default UserSign