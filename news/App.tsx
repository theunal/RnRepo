import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, FlatList, ScrollView, Image, Dimensions } from 'react-native';
import newsDataJson from './news_data.json'
import NewsCard from './src/components/newsCard'
import Banner from './src/components/banner'

export default function App() {

  const renderNews = ({ item }: any) => <NewsCard news={item} />

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>News</Text>


      <FlatList
        ListHeaderComponent={() => (
          <Banner />
        )}
        data={newsDataJson} renderItem={renderNews} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1'
  },
  text: {
    marginLeft: 10,
    fontSize: 45,
    fontWeight: 'bold'
  }
})

