import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"


const ProductCard = ({ product, onPress }: any) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.image }} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>
                        {product.title}
                    </Text>
                    <Text style={styles.price}>
                        {product.price}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        borderColor: '#bdbdbd',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    body_container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold'
    },
    price: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 16
    }
})


export default ProductCard