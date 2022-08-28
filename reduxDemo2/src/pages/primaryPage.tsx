import { useState } from "react"
import { Button, Text, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useDispatch } from "react-redux"

const PrimaryPage = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const add = () => dispatch({ type: 'add_name', payload: { name: text } })

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 30 }}>
                Primary
            </Text>
            <TextInput
                style={{ padding: 10, borderWidth: 1, borderColor: 'gray', margin: 10, borderRadius: 10 }}
                value={text}
                onChangeText={setText}
                placeholder='İsim Giriniz'
            />
            <Button title='Ekle' onPress={add} />
        </SafeAreaView>
    )
}

export default PrimaryPage