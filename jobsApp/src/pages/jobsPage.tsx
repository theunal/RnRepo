import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import JobCard from "../components/jobCard";
import useFetch from "../hooks/useFetch";
import PageButtons from "../components/pageButtons";
import Spinner from 'react-native-loading-spinner-overlay';


const JobsPage = ({ navigation }: any) => {

    const [page, setPage] = useState(1)
    const JOBS_URL = 'https://www.themuse.com/api/public/jobs'

    const { data, loading }: any = useFetch(`${JOBS_URL}?page=${page}`, page)

    const getJobDetail = (jobDetail: any) => navigation.navigate('JobDetailPage', { jobDetail })

    const jobCard = ({ item }: any) => <JobCard job={item} onPress={getJobDetail} />

    const incrementPage = () => setPage(page + 1)
    const decrementPage = () => setPage(page - 1)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <Spinner
                visible={loading}
                color='white'
                animation="fade"
            />

            <FlatList data={data.results} renderItem={jobCard} keyExtractor={id => id.id} />

            <PageButtons page={page} incrementPage={incrementPage} decrementPage={decrementPage} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F2'
    }
})

export default JobsPage