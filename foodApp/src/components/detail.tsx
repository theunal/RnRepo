import { View, Image, Text, Button } from "react-native"
import styles from "./styles/detail.styles"

const Detail = ({ detail, goToYoutube }: any) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: detail.strMealThumb }} />
            <View style={styles.innerContainer}>
                <Text style={styles.mealName}>
                    {detail.strMeal}
                </Text>
                <Text style={styles.area}>
                    {detail.strArea}
                </Text>
                <View style={{ borderWidth: 1, borderColor: 'gray', marginTop: 10, marginBottom: 10 }} />
                <Text style={styles.desc}>
                    {detail.strInstructions}
                </Text>
            </View>
            <View style={styles.button}>
                <Button color={'white'} title='Watch on Youtube' onPress={() => goToYoutube(detail.strYoutube)} />
            </View>
        </View>
    )
}

export default Detail