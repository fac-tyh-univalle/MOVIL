import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SegScreen from './pages/Seg';
import Categories from './pages/Categories';
import FirstScreen from './pages/FirstScreen';
import MapView from './pages/MapView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyPage />
    </NavigationContainer>
  );
}

function MyPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Seg"
        component={SegScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MapView"
        component={MapView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
