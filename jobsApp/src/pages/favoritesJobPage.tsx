import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../components/jobCard";
import Toast from "react-native-root-toast";

const FavoritesJobPage = () => {

    const jobs = useSelector((state: any) => state.favoriteJobs)

    const jobCard = ({ item }: any) => <JobCard job={item} favorite={true} setFavorite={setFavorite} />

    const dispatch = useDispatch()

    const toastMessage = () => {
        Toast.show('Favorilerden Silindi', {
            position: Toast.positions.CENTER,
            opacity: 1,
            containerStyle: {
                backgroundColor: 'red'
            }
        })
    }

    const delete_job = (job: any) => dispatch({ type: 'delete_job', payload: { id: job.id } })

    const setFavorite = (job: any) => {
        delete_job(job)
        toastMessage()
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <FlatList data={jobs} renderItem={jobCard} keyExtractor={id => id.id} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F2'
    }
})

export default FavoritesJobPage