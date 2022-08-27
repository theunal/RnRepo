import { StatusBar } from "expo-status-bar"
import { Text, SafeAreaView, StyleSheet, Image, View, Dimensions, ScrollView, Button } from "react-native"
import Loading from "../components/loading"
import useFetch from "../hooks/useFetch"


const ProductDetail = ({ route }: any) => {

    const API_URL = `https://fakestoreapi.com/products/${route.params.id}`

    const { data, loading }: any = useFetch(API_URL)

    if (loading) return <Loading />


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: data.image }} />

                </View>

                <View style={styles.body}>
                    <Text style={styles.title}>
                        {data.title}
                    </Text>
                    <Text style={styles.desc}>
                        {data.description}
                    </Text>
                    <Text style={styles.price}>
                        {data.price}
                    </Text>
                </View>

                <View>
                    <Button title='Satın Al' />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get('screen').width / 1.02,
        height: Dimensions.get('screen').height / 3,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 0.2,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    body: {
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    desc: {
        marginTop: 20,
        textAlign: 'justify',
        fontStyle: 'italic'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right',
        marginTop: 10,
        fontStyle: 'italic'
    }
})

export default ProductDetail