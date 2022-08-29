import { Image, SafeAreaView, StyleSheet, View } from "react-native"
import Button from "../components/button"
import Input from "../components/input";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import usePost from "../hooks/usePost";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = ({ navigation }: any) => {

    const LOGIN_URL = 'https://fakestoreapi.com/auth/login'

    const { data, loading, post }: any = usePost()

    const login = (values: any) => post(LOGIN_URL, values)

    if (data)
        if (data.token) {
            AsyncStorage.setItem('token', data.token)
            navigation.navigate('ProductPage')
        }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require('../assets/login.png')} />
            </View>

            <Formik initialValues={{ username: 'johnd', password: 'm38rmF$' }} onSubmit={login}>
                {
                    ({ handleChange, handleSubmit, values }: any) =>
                    (
                        <View style={styles.body}>
                            <Input
                                placeholder='Kullanıcı adı giriniz'
                                value={values.username}
                                onChangeText={handleChange('username')}
                                icon={<MaterialCommunityIcons name="account" size={24} color="black" style={styles.icon} />}
                            />
                            <Input
                                placeholder='Şifre adı giriniz'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                isSecure
                                icon={<MaterialCommunityIcons name="key" size={24} color="black" style={styles.icon} />}
                            />
                            <Button title='Giriş Yap' onPress={handleSubmit} loading={loading} />
                        </View>
                    )
                }
            </Formik>


        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {

    },
    logoContainer: {

    },
    body: {
        marginTop: 20
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20,
        tintColor: 'blue'
    },
    icon: { marginRight: 5 }
})

export default LoginPage