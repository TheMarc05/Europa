import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const AboutRoom = ({ navigation, route }) => {

    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={['#ADD8E6', '#D6F3F2', 'white']}
                style={styles.background}
            />

            <Text style={{ marginTop: 85, marginHorizontal: 50, fontSize: 24, textAlign: 'center', color: 'black', fontWeight: '500' }}>
                {route.params.details}
            </Text>

            <TouchableOpacity
                raised
                onPress={() => { navigation.goBack() }}
                style={{ alignSelf: "flex-start", top: -25 }}
            >
                <Image
                    source={require("../assets/leftarrow.png")}
                    style={{ marginLeft: 10, width: 20, height: 20 }}
                />
            </TouchableOpacity>

            <ScrollView style={{ bottom: 10, height: '75%' }}>
                <Image
                    style={{ alignSelf: "center", width: 330, height: 230, marginTop: 20, marginBottom: 30 }}
                    source={{
                        uri: route.params.nume
                    }}
                />
                <Text style={styles.details}>
                    {route.params.aboutPhoto}
                </Text>
            </ScrollView>

        </View>
    );
}

export default AboutRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // //alignItems: 'center',
        alignContent: 'center',
        // backgroundColor: '#ADD8E6',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    details: {
        color: "black",
        textAlign: "justify",
        marginBottom: 0,
        marginTop: 10,
        fontSize: 18,
        fontWeight: "600",
        marginHorizontal: 10
    }
})
