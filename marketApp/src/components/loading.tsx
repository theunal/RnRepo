import LottieView from 'lottie-react-native'
import { Dimensions, View } from "react-native"


const Loading = () => {
    return (
        <View>
            <LottieView style={{
                width: Dimensions.get('screen').width / 1.1,
                marginTop: 50,
                marginLeft:10
            }} source={require('../assets/loading.json')} autoPlay />
        </View>
    )
}

export default Loading