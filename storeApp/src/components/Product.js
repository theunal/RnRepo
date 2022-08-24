import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

const Product = ({ product }) => {
    return (
        <View style={styles.card}>
            <View style={styles.card_inside}>
                <Image style={styles.image}
                    source={{ uri: product.imgURL }} />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {!product.inStock && (
                    <Text style={styles.stock}>STOKTA YOK</Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: { width: '50%', padding: 10 },
    card_inside: { backgroundColor: '#ECEFF1', borderRadius: 10 },
    image: { height: Dimensions.get('window').height / 4, backgroundColor: 'white', margin: 10, borderRadius: 10 },
    title: { fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginRight: 10 },
    price: { marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10, color: '#808080' },
    stock: { color: 'red', fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }
})

export default Product