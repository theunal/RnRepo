import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import JobCard from "../components/jobCard";
import useFetch from "../hooks/useFetch";


const JobsPage = ({ navigation }: any) => {

    const [page, setPage] = useState(1)
    const JOBS_URL = 'https://www.themuse.com/api/public/jobs'

    const { data, loading }: any = useFetch(`${JOBS_URL}?page=${page}`)

    const getJobDetail = (jobDetail: any) => navigation.navigate('JobDetailPage', { jobDetail })

    const jobCard = ({ item }: any) => <JobCard job={item} onPress={getJobDetail} />

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <FlatList data={data.results} renderItem={jobCard} keyExtractor={id => id.id} />

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