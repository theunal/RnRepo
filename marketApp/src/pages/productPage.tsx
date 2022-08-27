import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import Banner from "../components/banner";
import Loading from "../components/loading";
import ProductCard from "../components/productCard";
import useFetch from "../hooks/useFetch";

const Product = ({ navigation }: any) => {

    const CATEGORIES_API_URL = 'https://fakestoreapi.com/products/categories'
    const API_URL = 'https://fakestoreapi.com/products'

    const categories = useFetch(CATEGORIES_API_URL)
    let { data, loading } = useFetch(API_URL)

    const [products, setProducts] = useState([])
    useEffect(() => {
        renderProducts('')
    }, [])

    const productSelect = (id: number) => navigation.navigate('ProductDetail', { id })

    const renderProduct = ({ item }: any) => <ProductCard product={item} onPress={() => productSelect(item.id)} />

    if (loading) return <Loading />

    const renderProducts = async (categoryName: string) => {
        const PRODUCT_URL = `https://fakestoreapi.com/products`
        const URL = `https://fakestoreapi.com/products/category/${categoryName}`
        let c = await axios.get(categoryName == '' ? PRODUCT_URL : URL)
    }

    return (
        <SafeAreaView>
            <StatusBar />
            <FlatList
                ListHeaderComponent={() => (
                    <Banner categories={categories.data} renderProducts={renderProducts} />
                )}
                data={products}
                renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Product