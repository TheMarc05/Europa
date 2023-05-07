import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import StateRoom from './Screens/StateRoom';
import TabStack from './Screens/TabStack';
import InstitutionRoom from './Screens/InstitutionRoom';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{ headerShown: false }} name="Tab Stack" component={TabStack} />
        <Stack.Screen options={{ headerShown: false }} name="State Room" component={StateRoom} />
        <Stack.Screen options={{ headerShown: false }} name="Institution Room" component={InstitutionRoom} />

      </Stack.Navigator>
    </NavigationContainer>
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
