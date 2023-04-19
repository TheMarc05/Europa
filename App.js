import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Screens/Home';

const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarInactiveBackgroundColor: 'white' }}  >

        <Tab.Screen name="Home screen" component={Home} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
              <Image
                source={require('./assets/home.png')}
                resizeMode='contain'
                style={{
                  width: 26,
                  height: 26,
                }}
              />
            </View>
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer backgroundColor={'red'}>
    //   <Stack.Navigator>

    //     <Stack.Screen options={{ headerShown: false }} name="Home screen" component={Home} />

    //   </Stack.Navigator>
    // </NavigationContainer>
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

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Keyboard, KeyboardAvoidingViewBase, KeyboardAvoidingViewComponent, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



// import Home from './Screens/Home';
// import Register from './Screens/Register';

// import ChatRoom from './Screens/ChatRoom';
// import TabStack from './Screens/TabStack';
// import AddChat from './Screens/AddChat';
// import CameraRoom from './Screens/CameraRoom';
// import ImagePicker1 from './Screens/ImagePicker1';



// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer backgroundColor={'red'}>
//       <Stack.Navigator>

//         <Stack.Screen options={{ headerShown: false }} name="Login screen" component={Login} />
//         <Stack.Screen options={{ headerShown: false }} name="Register screen" component={Register} />
//         <Stack.Screen options={{ headerShown: false }} name="Chat room" component={ChatRoom} />
//         <Stack.Screen options={{ headerShown: false }} name="Add chat" component={AddChat} />
//         <Stack.Screen options={{ headerShown: false }} name="Camera Room" component={CameraRoom} />
//         <Stack.Screen options={{ headerShown: false }} name="ImagePicker1" component={ImagePicker1} />
//         <Stack.Screen options={{ headerShown: false }} name="Tab Stack" component={TabStack} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });