import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import Category from "../components/category";
import useFetch from "../hooks/useFetch";
import styles from "./styles/categoriesPage.style";

const CategoriesPage = ({ navigation }: any) => {

    const CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const { data, loading }: any = useFetch(CATEGORIES_URL)

    const getFoodsByCategory = (strCategory: any) => navigation.navigate('FoodsPage', { strCategory })

    const renderCategory = ({ item }: any) => <Category category={item} getFoodsByCategory={getFoodsByCategory} />

    return (
        <View style={styles.container}>
            <StatusBar />
            <FlatList
                style={{ marginBottom: 10 }}
                data={data.categories}
                renderItem={renderCategory}
            />
        </View>
    )
}

export default CategoriesPage