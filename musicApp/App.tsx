import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import musicDataJson from './music-data.json';
import SearchBar from './src/components/searchBar';
import SongCard from './src/components/songCard';

export default function App() {

  const [list, setList] = useState(musicDataJson)

  const renderSong = ({ item }: any) => <SongCard songs={item} />
  const songSeperator = () => <View style={styles.seperator} />
  const handleSearch = (search: any) => {
    const filteredList = musicDataJson.filter(x => {
      return x.title.toLocaleLowerCase().indexOf(search.toString().toLocaleLowerCase()) > -1
    })

    setList(filteredList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <SearchBar handleSearch={handleSearch} />

      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={songSeperator} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0'
  }
})
