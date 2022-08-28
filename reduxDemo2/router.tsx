import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PrimaryPage from "./src/pages/primaryPage";
import SecondaryPage from "./src/pages/secondaryPage";
import UserProvider from "./src/context/provider";

const Tab = createBottomTabNavigator()

const Router = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false
        }}>
          <Tab.Screen name="PrimaryPage" component={PrimaryPage} />
          <Tab.Screen name="SecondaryPage" component={SecondaryPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

export default Router