import { Text, View } from "react-native"

const HeadAndText = ({ headText, text }: any) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{
                color: '#EF5552',
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 'bold'
            }}>
                {headText}:
            </Text>
            <Text style={{
                marginLeft: 5,
                fontSize: 15
            }}>
                {text}
            </Text>
        </View>
    )
}

export default HeadAndText