import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SegScreen from './pages/MainScreen/Seg';
import Categories from './pages/Categories';
import FirstScreen from './pages/FirstScreen';
import MapView from './pages/MapView';
import CardFavorite from './components/CardFavorite';
import CardPlace from './components/CardPlace';
import FavoriteScreen from './pages/FavoriteScreen';
import PlaceCard from './components/PlaceCard';

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
      <Stack.Screen
        name="CardFavorite"
        component={CardFavorite}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardPlace"
        component={CardPlace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaceCard"
        component={PlaceCard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}