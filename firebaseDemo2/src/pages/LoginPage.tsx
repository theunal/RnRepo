import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import Input from '../components/Input';
import Button from '../components/Button';
import { Formik } from 'formik';
import firebase from '../../firebase';
import { Model } from '../models/signModel';
import MessageTool from '../utilities/messageTool';

const LoginPage = ({ navigation }: any) => {

    const goToRegisterPage = () => navigation.navigate('RegisterPage')

    const initialFormValue: Model = {
        username: '',
        password: ''
    }

    const login = async (values: Model) => {
        await firebase
            .auth()
            .signInWithEmailAndPassword(values.username, values.password)
            .then(x => {
                MessageTool('login')
            })
            .catch(x => {
                MessageTool(x.toString())
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <Formik initialValues={initialFormValue} onSubmit={login}>
                {
                    ({ values, handleChange, handleSubmit }: any) =>
                    (
                        <>
                            <Input
                                value={values.username}
                                onChangeText={handleChange('username')}
                                placeholder='E-Mail adresinizi giriniz' />
                            <Input
                                value={values.password}
                                onChangeText={handleChange('password')}
                                placeholder='Şifrenizi giriniz' />

                            <Button title='Giriş Yap' onPress={handleSubmit} />
                            <Button title='Kayıt Ol' theme='secondary' onPress={goToRegisterPage} />
                        </>
                    )
                }
            </Formik>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default LoginPage