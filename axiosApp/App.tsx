import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { format as prettyFormat } from 'pretty-format';
import { useEffect, useState } from 'react';
import UserCard from './src/components/userCard';

export default function App() {

  const URL = 'https://jsonplaceholder.typicode.com/users'

  const [loading, setLoading] = useState(true)
  const [userList, setUserList] = useState([])

  const renderUser = ({ item }: any) => <UserCard user={item} />

  const getData = async () => {
    let data = await axios.get(URL)
    setLoading(false)
    setUserList(data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {
        loading ? <ActivityIndicator style={{marginTop: 20}} size='large'/> : <FlatList data={userList} renderItem={renderUser} />
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
