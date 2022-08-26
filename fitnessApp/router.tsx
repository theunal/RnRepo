import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/pages/homePage";
import ResultPage from "./src/pages/resultPage";
import UserSign from "./src/pages/userSign";



const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="UserSign" component={UserSign} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router