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

const Home = ({ navigation }) => {

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

    const enterState = (id, nume, stateFlag, capital, details) => {
        navigation.navigate("State Room", {
            id: id,
            nume: nume,
            stateFlag: stateFlag,
            capital: capital,
            details: details
        });
    };

    function filterZZZ(state) {
        try {
            if (state.data.nume == '') {
                return true;
            }
            try {

                if (state.data.nume.toLowerCase().includes(textSearch.toLowerCase()))
                    return true;

            } catch (err) {

            }
            return false
        } catch (err) {

        }
        return true
    }

    function makeid(length) {
        var result = "";
        var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={['#ADD8E6', '#D6F3F2', 'white']}
                style={styles.background}
            />
            <Text style={{ marginTop: 85, fontSize: 24, textAlign: 'center', color: '#3570EC', fontWeight: '500' }}>
                Statele Uniunii Europene
            </Text>

            <View style={{ marginBottom: 40, marginTop: 30 }}>

                <TextInput

                    onChangeText={(text) => setTextSearch(text)}
                    placeholder='Search' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 19 }}
                >

                </TextInput>

                <TouchableOpacity style={{ position: 'absolute' }} onPress={Keyboard.dismiss}>
                    <Image source={require('../assets/search.png')} style={{ top: 8, left: 49, width: 30, height: 30, }}></Image>
                </TouchableOpacity>

            </View>


            <ScrollView style={{ bottom: 20, height: '70%' }}>
                {
                    state.filter(filterZZZ).map(({ data }) => (
                        <StateListItem key={makeid(6)} enterState={enterState} stateName={data.nume} id={data.id} stateFlag={data.flag} capital={data.capitala} details={data.detalii} />
                    ))
                }
            </ScrollView>

        </View>
    );
}

export default Home

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
    }
})
