import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles/meal.styles"

const Meal = ({ meal, getMealDetail }: any) => {
    return (
        <TouchableOpacity onPress={() => getMealDetail(meal.idMeal)} key={meal.idMeal}>
            <View style={styles.container}>
                <View style={{ padding: 10 }}>
                    <ImageBackground style={styles.image} source={{ uri: meal.strMealThumb }}>
                        <View style={styles.textContainer}>
                            <View style={styles.textBackground}>
                                <Text style={styles.text}>
                                    {
                                        meal.strMeal.length >= 22 ?
                                            meal.strMeal.substring(0, 22) + '...' :
                                            meal.strMeal
                                    }
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Meal