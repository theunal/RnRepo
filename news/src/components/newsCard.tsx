import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';


const NewsCard = ({ news }: any) => {



    return (
        <View style={styles.container}>

            <Image
                key={news.u_id}
                style={styles.image}
                source={{ uri: news.imageUrl }}
            />

            <View style={styles.inner_container}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.desc}>{news.description}</Text>
                <Text style={styles.author}>- {news.author}</Text>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    desc: {
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'justify'
    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
        marginRight: 10,
        marginTop: 10
    },
    inner_container: {
        marginTop: 20,
        marginBottom: 20,
    }
})

export default NewsCard