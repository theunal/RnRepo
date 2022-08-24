import { ScrollView, Image, StyleSheet, Dimensions } from "react-native"
import newsBannerDataJson from '../../news_banner_data.json'

const Banner = () => {

    return (
        <ScrollView horizontal={true}>
            {
                newsBannerDataJson.map(x => (
                    <Image key={x.id} style={styles.image} source={{ uri: x.imageUrl }} />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    image: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10
    }
})

export default Banner