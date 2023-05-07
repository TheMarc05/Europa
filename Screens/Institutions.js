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

const Institutions = ({ navigation }) => {

    const [textSearch, setTextSearch] = useState('');
    const [state, setState] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("institutii").onSnapshot((snapshot) => {
            setState(
                snapshot.docs.map((doc) => ({
                    data: doc.data(),
                }))
            );
        });

        return unsubscribe;
    }, [navigation]);

    const enterState = (id, stateName, stateFlag) => {
        navigation.navigate("Institution Room", {
            id: id,
            stateName: stateName,
            stateFlag: stateFlag
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

    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={['#ADD8E6', '#D6F3F2', 'white']}
                style={styles.background}
            />
            <Text style={{ marginTop: 85, fontSize: 24, textAlign: 'center', color: '#3570EC', fontWeight: '500' }}>
                Institutiile Uniunii Europene
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



            <ScrollView style={{ height: '100%' }}>
                {
                    state.filter(filterZZZ).map(({ id, data: { nume, flag } }) => (
                        <StateListItem key={id} enterChat={enterState} stateName={nume} id={id} stateFlag={flag} />
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default Institutions

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
