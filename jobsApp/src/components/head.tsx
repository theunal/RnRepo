import { StyleSheet, Text, View } from "react-native"
import HeadAndText from "./headAndText"

const Head = ({ jobDetail }: any) => {
    return (
        <View>
            <Text style={styles.headtext}>
                {jobDetail.name}
            </Text>
            <HeadAndText headText={'Locations'} text={jobDetail.locations[0].name} />
            <HeadAndText headText={'Job Level'} text={jobDetail.levels[0].name} />
        </View>
    )
}

const styles = StyleSheet.create({
    headtext: {
        fontSize: 25,
        color: '#36464F',
        fontWeight: 'bold',
        margin: 10
    }
})

export default Head