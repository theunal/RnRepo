import { Dimensions, StyleSheet, View, Text } from "react-native"
import { formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

const MessageCard = ({ data }: any) => {

    var date = formatDistance(parseISO(data.date), new Date(), { addSuffix: true, locale: tr, includeSeconds: true })

    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{ color: '#85DFD7' }}>
                    {data.userName}
                </Text>

                <Text style={{ color: '#85DFD7' }}>
                    {date}
                </Text>
            </View>

            <Text style={styles.text}>
                {data.message}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007C73',
        height: Dimensions.get('screen').height / 8,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default MessageCard