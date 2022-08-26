import { SafeAreaView, StyleSheet, Text } from "react-native"
import HomeButton from "../components/homeButton"

const HomePage = (props: any) => {

    const goToUserSignPage = () => props.navigation.navigate('UserSign')

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fitness Salonu</Text>
            <HomeButton text={'Üye Kaydı Olustur'} onPress={goToUserSignPage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    header: {
        fontSize: 45,
        fontWeight: 'bold'
    }
})

export default HomePage