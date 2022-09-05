import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import firebase from './firebase';

export default function App() {

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword('jan2e.doe@example.com', 'SuperSecretPassword!')
      .then(x => console.log(x))
      .catch(x => console.log(x))
  }

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(x => console.log(x))
      .catch(x => console.log(x))
  }

  const getData = () => { // belirtilen referanstaki datayı getirir
    firebase
      .database()
      .ref('books/')
      .once('value')
      .then(x => console.log(x))
      .catch(x => console.log(x))
  }

  const listenDb = () => { // db yi dinliyor herhangi bir işlemde datayı getiriyor
    firebase
      .database()
      .ref()
      .on('value', (x) => {
        console.log(x)
      })
  }

  const setDb = () => { // belirtilen yol varsa komple siler ve verilen datayı girer. yol yok ise sıfırdan olsuturur
    firebase
      .database()
      .ref('car/')
      .set({
        brand: 'toyota',
        model: 'corolla 2022'
      })
  }

  const updateDb = () => { // belirtilen yoldaki datayı değiştirir
    firebase
      .database()
      .ref('car/')
      .update({
        model: 'corolla 2022'
      })
  }

  const pushDb = () => { // belirtilen yolun içine unique key olusturup datayı içine yazar. her çalıştıgında key olusturur
    firebase
      .database()
      .ref('car/')
      .push({
        name: 'yusuf unal'
      })
  }

  const deleteDb = async () => { // yolu ve yol içindeki  tüm datayı siler
    await firebase.database().ref('car/').remove()
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='register' onPress={register} />
      <Button title='login' onPress={login} />
      <Button title='get data' onPress={getData} />
      <Button title='listen data' onPress={listenDb} />
      <Button title='set data' onPress={setDb} />
      <Button title='update data' onPress={updateDb} />
      <Button title='push data' onPress={pushDb} />
      <Button title='delete data' onPress={deleteDb} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
