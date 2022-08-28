import { FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSelector } from 'react-redux';


const SecondaryPage = () => {

    const nameList = useSelector((state: any) => state.nameList)

    return (
        <SafeAreaView>
            <FlatList data={nameList} renderItem={({item}) => <Text>{item}</Text>} />
        </SafeAreaView>
    )
}

export default SecondaryPage