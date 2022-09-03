import { StyleSheet, Text, ScrollView, Linking } from "react-native";
import Toast from 'react-native-root-toast';
import Buttons from "../components/buttons";
import Body from "../components/body";
import Head from "../components/head";
import { useDispatch, useSelector } from "react-redux";

const JobDetailPage = ({ route }: any) => {

    const jobDetail = route.params.jobDetail

    const submit = (url: string) => Linking.openURL(url)

    const dispatch = useDispatch()

    const add_job = (job: any) => {

        !isAdded(job.id) ?
            add(job) :
            message('Favorilere Zaten Eklenmiş')
    }

    const message = (message: string) => Toast.show(message, {
        position: Toast.positions.CENTER,
        opacity: 1,
        containerStyle: {
            backgroundColor: 'red'
        }
    })

    const add = (job: any) => {
        dispatch({ type: 'add_job', payload: { favouriteJob: job } })
        message('Favorilere Eklendi')
    }

    const favoriteJobs: any[] = useSelector((state: any) => state.favoriteJobs)
    const isAdded = (id: number) => favoriteJobs.some(x => x.id == id)

    return (
        <ScrollView style={styles.container}>

            {/* head  */}
            <Head jobDetail={jobDetail} />

            <Text style={styles.title}>Job Detail</Text>

            {/* body  */}
            <Body jobDetail={jobDetail} />

            {/* butonlar  */}
            <Buttons submit={submit} jobDetail={jobDetail} setFavorite={add_job} />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F2'
    },
    title: { textAlign: 'center', color: '#36464F', fontSize: 25, fontWeight: 'bold', marginTop: 10 }
})

export default JobDetailPage