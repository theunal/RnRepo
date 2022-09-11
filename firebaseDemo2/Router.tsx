import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import FlashMessage from "react-native-flash-message";
import MessagePage from "./src/pages/MessagePage";

const Stack = createNativeStackNavigator()



const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
                <Stack.Screen name="MessagePage" component={MessagePage} options={{ headerShown: false }} />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}

export default Router