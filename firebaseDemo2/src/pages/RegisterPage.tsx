import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import Input from '../components/Input';
import Button from '../components/Button';
import { Formik } from 'formik';
import firebase from '../../firebase';
import { Model } from '../models/signModel';
import MessageTool from '../utilities/messageTool';

const RegisterPage = ({ navigation }: any) => {

    const goToFirstPage = () => navigation.navigate('LoginPage')

    const initialFormValue: Model = {
        username: '',
        password: '',
        passwordAgain: ''
    }

    const register = (values: Model) => {
        if (values.password === values.passwordAgain)
            firebase
                .auth()
                .createUserWithEmailAndPassword(values.username, values.password)
                .then(x => {
                    goToFirstPage()
                    MessageTool('register')
                })
                .catch(x => {
                    // if (x.toString().includes('The email address is badly formatted.'))
                    //     console.log('Lütfen doğru bir e-mail adresi giriniz')
                    // if (x.toString().includes('The password must be 6 characters long or more.'))
                    //     console.log('Şifreniz 6 veya daha fazla karakterden oluşmalıdır')
                   console.log(x)
                })
        else
            console.log('Parolalar eşleşmiyor')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <Formik initialValues={initialFormValue} onSubmit={register}>
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
                            <Input
                                value={values.passwordAgain}
                                onChangeText={handleChange('passwordAgain')}
                                placeholder='Şifrenizi tekrarı' />

                            <Button title='Gönder' onPress={handleSubmit} />
                            <Button title='Giriş Yap' theme='secondary' onPress={goToFirstPage} />
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

export default RegisterPage