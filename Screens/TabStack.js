import React from "react";
import {
    StyleSheet,
    View,
    Image,
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Institutions from './Institutions';
import About from './About';

const Tab = createBottomTabNavigator();

const TabStack = ({ navigation }) => {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false, tabBarInactiveBackgroundColor: 'white' }}  >

            <Tab.Screen name="Statele UE" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/european-union.png')}
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

            <Tab.Screen name="Institutiile UE" component={Institutions} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/institution.png')}
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

            <Tab.Screen name="Despre" component={About} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/information.png')}
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
    );
}

export default TabStack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});