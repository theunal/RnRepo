import { StyleSheet, TextInput, View } from "react-native"


const SearchBar = (props : any) => {

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Ara ...'
                onChangeText={props.handleSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 5,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12,
        padding: 10,
        backgroundColor: '#ECEFF1',
        borderRadius: 10
    }
})

export default SearchBar