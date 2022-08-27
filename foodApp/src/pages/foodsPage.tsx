import { FlatList, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import useFetch from "../hooks/useFetch";
import Meal from "../components/meal";
import styles from "./styles/categoriesPage.style";

const FoodsPage = ({ route, navigation }: any) => {

    const MEAL_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.strCategory}`

    const { data, loading }: any = useFetch(MEAL_URL)

    const getMealDetail = (idMeal: any) => navigation.navigate('DetailPage', { idMeal })

    const renderMeal = ({ item }: any) => <Meal meal={item} getMealDetail={getMealDetail} />

    return (
        <View style={styles.container}>
            <StatusBar />
            <FlatList
                style={{ marginBottom: 10 }}
                data={data.meals}
                renderItem={renderMeal}
            />
        </View>
    )
}

export default FoodsPage