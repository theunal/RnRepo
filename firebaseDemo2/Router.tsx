import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="RegisterPage" component={RegisterPage} />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}

export default Router