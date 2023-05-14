import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Image,
    View,
    TouchableOpacity,
    ScrollView,
    Keyboard,
} from "react-native";
import StateListItem from "../Components/StateListItem";
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../firebase';

const StateRoom = ({ navigation, route }) => {

    const [textSearch, setTextSearch] = useState('');
    const [state, setState] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("state").onSnapshot((snapshot) => {
            setState(
                snapshot.docs.map((doc) => ({
                    data: doc.data(),
                }))
            );
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View>
            <LinearGradient
                Background Linear Gradient
                colors={['#ADD8E6', '#D6F3F2', 'white']}
                style={styles.background}
            />

            <Text style={{ marginTop: 85, fontSize: 24, textAlign: 'center', color: 'black', fontWeight: '500' }}>
                {route.params.nume}
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
            <ScrollView style={{bottom: 10, height: '80%' }}>
            <Image
                style={{ alignSelf: "center", width: 220, height: 150, marginTop: 30, marginBottom: 30 }}
                source={{
                    uri: route.params.stateFlag
                }}
            />
            <Text style={styles.capital}>
                Capitala: {route.params.capital}
            </Text>
            <Text style={styles.details}>
                {route.params.details}
            </Text>
            </ScrollView>

        </View>
    );
}

export default StateRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#ADD8E6',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    capital: {
        color: "black",
        alignSelf: "flex-start",
        marginBottom: 20,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "600",
        alignSelf: "center",
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
