import { Text, View, Image, TouchableOpacity } from "react-native"
import styles from "./styles/category.styles"

const Category = ({ category, getFoodsByCategory }: any) => {

    return (
        <TouchableOpacity onPress={() => getFoodsByCategory(category.strCategory)}>
            <View style={styles.container}>
                <View style={styles.categoryContainer}>
                    <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                    <Text style={styles.categoryName}>
                        {category.strCategory}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Category