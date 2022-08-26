import { SafeAreaView, Text } from "react-native";
import { format as prettyFormat } from 'pretty-format';


const ResultPage = ({ route }: any) => {
    console.log(prettyFormat(route))
    return (
        <SafeAreaView>
            <Text>Üye Adı: {route.params.name}</Text>
            <Text>Üye Soyadı: {route.params.lastName}</Text>
            <Text>Üye Email: {route.params.email}</Text>
            <Text>Üye Yaş: {route.params.age}</Text>
        </SafeAreaView>
    )
}

export default ResultPage