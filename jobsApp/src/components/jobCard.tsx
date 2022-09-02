import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const JobCard = ({ job, onPress, favorite, setFavorite }: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={favorite ? undefined : () => onPress(job)}>

            <Text style={styles.jobName}>
                {job.name}
            </Text>
            <Text style={styles.companyName}>
                {job.company.name}
            </Text>

            <View style={styles.locationContainer}>
                <Text style={styles.location}>
                    {job.locations[0].name}
                </Text>
            </View>

            <Text style={styles.level}>
                {job.levels[0].name}
            </Text>

            {
                favorite &&
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setFavorite(job)}>
                    <Text style={styles.button}>
                        Remove
                    </Text>
                </TouchableOpacity>
            }

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        borderColor: '#BCBCBD',
        borderWidth: 1
    },
    jobName: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    companyName: {
        marginTop: 10,
        fontSize: 17
    },
    locationContainer: { backgroundColor: '#EF5251', borderRadius: 10, padding: 5, alignSelf: 'baseline', marginTop: 10 },
    location: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    level: {
        fontSize: 17,
        textAlign: 'right',
        color: '#EE5351',
        fontWeight: 'bold'
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#EF5350',
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10
    },
    button: {
        fontSize: 18,
        color: 'white'
    }
})

export default JobCard