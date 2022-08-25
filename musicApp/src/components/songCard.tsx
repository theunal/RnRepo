import { View, Text, Image, StyleSheet, Dimensions } from "react-native"


const SongCard = ({ songs }: any) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: songs.imageUrl }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{songs.title}</Text>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.artist}>{songs.artist}</Text>
                        <Text style={styles.year}>{songs.year}</Text>
                    </View>
                    {songs.isSoldOut && 
                        <View style={styles.sold_container}>
                            <Text style={styles.sold_title}>TÜKENDİ</Text>
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').height / 9,
        borderRadius: 10
    },
    inner_container: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    artist: {
        marginTop: 10
    },
    year: {
        marginTop: 10,
        marginLeft: 10,
        color: 'gray'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sold_container: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        marginTop: 10
    },
    sold_title: {
        margin: 3,
        color: 'red'
    }
})

export default SongCard