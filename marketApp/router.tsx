import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "./src/pages/productDetailPage";
import Product from "./src/pages/productPage";
import { ToastProvider } from 'react-native-toast-notifications';
import LoginPage from "./src/pages/loginPage";


const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <ToastProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="ProductPage" component={Product} />
          <Stack.Screen name="ProductDetailPage" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider >
  )
}

export default Router