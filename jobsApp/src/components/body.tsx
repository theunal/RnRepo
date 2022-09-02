import { Dimensions, StyleSheet, View } from "react-native";
import RenderHtml from 'react-native-render-html';

const Body = ({ jobDetail }: any) => {
    return (
        <View style={styles.body}>
            <RenderHtml
                contentWidth={Dimensions.get('window').width}
                source={{ html: `${jobDetail.contents}` }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 20
    }
})

export default Body