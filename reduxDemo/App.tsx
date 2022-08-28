import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';

const initialState = { // baslangıc degeri
  counter: 0
}

const counterReducer = (state = initialState, action: any) => { // fonksiyonlar
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }

    default:
      return state
  }
}

const store = configureStore({ reducer: counterReducer }) // store olusturma

const increment = () => store.dispatch({ type: 'increment' }) // dispatch

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  )
}

const First = () => {

  const counter = useSelector((state: any) => state.counter)

  return (
    <View style={{ flex: 1, backgroundColor: '#eceff1' }}>
      <Text style={{ fontSize: 50 }}>
        First: {counter}
      </Text>
      <Button title='Increment' onPress={increment} />
    </View>
  )
}

const Second = () => {

  const counter = useSelector((state: any) => state.counter)

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 50 }}>
        Second : {counter}
      </Text>
    </View>
  )
}