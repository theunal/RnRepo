import { Button, SafeAreaView, Text, View } from "react-native";
import React from "react";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


const App = () => {

  const register = () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(x => console.log(x))
      .catch(x => console.log(x))
  }

  const login = () => {
    auth()
      .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(x => console.log(x))
      .catch(x => console.log(x))
  }

  const getData = () => {
    database()
      .ref()
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      })
  }


  return (
    <SafeAreaView>
      <Text style={{ fontSize: 70, color: 'black' }}>Hello Firebase</Text>
      <Button title='register' onPress={register} />
      <View style={{ margin: 10 }}></View>
      <Button title='login' onPress={login} />
      <View style={{ margin: 10 }}></View>
      <Button title='get data' onPress={getData} />
    </SafeAreaView>
  )
}

export default App