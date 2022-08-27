import { View, FlatList, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";
import Detail from "../components/detail";
import useFetch from "../hooks/useFetch";
import styles from "./styles/detailPage.style";

const DetailPage = ({ route }: any) => {

    const DETAIL_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.idMeal}`
    const { data, loading }: any = useFetch(DETAIL_URL)

    const goToYoutube = (link : any) =>  Linking.openURL(link)

    const renderDetail = ({ item }: any) => <Detail detail={item} goToYoutube={goToYoutube}/>

    return (
        <View style={styles.container}>
            <StatusBar />
            <FlatList data={data.meals} renderItem={renderDetail} />
        </View>
    )
}

export default DetailPage