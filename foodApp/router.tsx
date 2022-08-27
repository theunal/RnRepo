import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesPage from "./src/pages/categoriesPage";
import DetailPage from "./src/pages/detailPage";
import FoodsPage from "./src/pages/foodsPage";


const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={CategoriesPage}
          options={{
            headerTitle: 'Categories',
            headerTitleStyle: {
              color: 'orange'
            },
            headerBackTitleVisible: false
          }} />
        <Stack.Screen
          name="FoodsPage"
          component={FoodsPage}
          options={{
            headerTitle: 'Meals',
            headerTitleStyle: {
              color: 'orange'
            },
            headerTintColor: 'orange'
          }} />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{
            headerTitle: 'Detail',
            headerTitleStyle: {
              color: 'orange'
            },
            headerTintColor: 'orange'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
