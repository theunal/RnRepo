import { StatusBar } from "expo-status-bar";
import { SafeAreaView, FlatList } from "react-native";
import Loading from "../components/loading";
import ProductCard from "../components/productCard";
import useFetch from "../hooks/useFetch";

const Product = ({ navigation }: any) => {

    const API_URL = 'https://fakestoreapi.com/products'

    let { data, loading } = useFetch(API_URL)

    const productSelect = (id: number) => navigation.navigate('ProductDetail', { id })

    const renderProduct = ({ item }: any) => <ProductCard product={item} onPress={() => productSelect(item.id)} />

    if (loading) return <Loading />

    return (
        <SafeAreaView>
            <StatusBar />
            <FlatList
                data={data}
                renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Product