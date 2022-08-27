import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native"

const Banner = ({ categories, renderProducts }: any) => {
    return (
        <ScrollView horizontal={true}>
            {
                categories.map((x: any) => (
                    <TouchableOpacity onPress={() => renderProducts(x)} key={x}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.category}>{x}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginLeft: 5
    },
    category: {
        textTransform: 'capitalize'
    }
})

export default Banner