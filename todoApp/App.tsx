import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Foot from './src/components/foot';
import Head from './src/components/head';
import Todo from './src/components/todo';
import { TodoModel } from './src/models/todoModel';

export default function App() {

  let todoList: TodoModel[] = []

  const [number, setNumber] = useState(0)

  const [searchV, setSearch] = useState('')

  const searchChange = (value: any) => setSearch(value)

  const [list, setList] = useState(todoList)

  const addTodo = () => {
    let bigId = 0
    list.map(x => {
      bigId = bigId > x.id ? bigId : x.id
    })
    let todo: TodoModel = {
      id: bigId + 1,
      title: searchV ? searchV : `default text deneme. id : ${bigId + 1}`,
      isSelected: false
    }
    setList([...list, todo])
    setNumber(number + 1)
  }

  const deleteTodo = (id: number) => {
    setList([...list.filter(x => x.id !== id)])
    setNumber(number - 1)
  }

  const todoSelect = (id: number) => {
    let todo = list.find(x => x.id == id)
    if (todo != undefined) {
      todo.isSelected = todo.isSelected ? false : true
      setList([...list.filter(x => x.id !== id), todo])
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Head number={number} />

      <ScrollView style={styles.body}>
        {
          list.map(x => (
            <Todo todos={x} key={x.id} deleteTodo={deleteTodo} todoSelect={todoSelect} />
          ))
        }
      </ScrollView>

      <Foot search={searchChange} addTodo={addTodo} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027'
  },
  body: {
    flex: 1,
    margin: 15
  }
})
