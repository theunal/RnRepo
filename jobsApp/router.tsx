import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobDetailPage from './src/pages/jobDetailPage';
import JobsPage from './src/pages/jobsPage';
import { RootSiblingParent } from 'react-native-root-siblings';
import JobProvider from './src/stateManagement/job.provied';
import FavoritesJobPage from './src/pages/favoritesJobPage';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()


const JobStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='JobsPage' component={JobsPage}
        options={{
          headerTitle: 'Jobs',
          headerTintColor: '#EE5351'
        }} />
      <Stack.Screen name="JobDetailPage" component={JobDetailPage}
        options={{
          headerTitle: 'JobDetailPage',
          headerTintColor: '#EE5351'
        }} />
    </Stack.Navigator>
  )
}


// babel.config dosyasına bir plugin eklemeyince çalsımıyor
const Router = () => {
  return (
    <JobProvider>
      <RootSiblingParent>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name='Jobs' component={JobStack} options={{ headerShown: false }} />
            <Drawer.Screen name='FavoritesJobPage' component={FavoritesJobPage} options={{ headerShown: false }} />
          </Drawer.Navigator>
        </NavigationContainer>
      </RootSiblingParent>
    </JobProvider>
  )
}

export default Router

