import { StyleSheet, Text, ScrollView, Linking } from "react-native";
import Toast from 'react-native-root-toast';
import Buttons from "../components/buttons";
import Body from "../components/body";
import Head from "../components/head";
import { useDispatch } from "react-redux";

const JobDetailPage = ({ route }: any) => {

    const jobDetail = route.params.jobDetail

    const submit = (url: string) => Linking.openURL(url)

    const dispatch = useDispatch()

    const setFavorite = (job: any) => {
        add_job(job)
        toastMessage()
    }

    const add_job = (job: any) => dispatch({ type: 'add_job', payload: { favouriteJob: job } })

    const toastMessage = () => Toast.show('Favorilere Eklendi', {
        position: Toast.positions.CENTER,
        opacity: 1,
        containerStyle: {
            backgroundColor: 'red'
        }
    })

    return (
        <ScrollView style={styles.container}>

            {/* head  */}
            <Head jobDetail={jobDetail} />

            <Text style={styles.title}>Job Detail</Text>

            {/* body  */}
            <Body jobDetail={jobDetail} />

            {/* butonlar  */}
            <Buttons submit={submit} jobDetail={jobDetail} setFavorite={setFavorite} />

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