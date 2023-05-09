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
import AboutListItem from "../Components/AboutListItem";
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../firebase';

const About = ({ navigation }) => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("despre").onSnapshot((snapshot) => {
            setAbout(
                snapshot.docs.map((doc) => ({
                    data: doc.data(),
                }))
            );
        });
        
        return unsubscribe;
    }, [navigation]);
    
    const enterAbout = (id, nume, aboutPhoto, details) => {
        navigation.navigate("About Room", {
            id: id,
            nume: nume,
            aboutPhoto: aboutPhoto,
            details: details
        });
    };

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
                Despre Uniunea Europeana 
            </Text>

            <ScrollView style={{ marginTop: 30, height: '70%' }}>
                {
                    about.map(({data}) => (
                        <AboutListItem key={makeid(6)} enterAbout={enterAbout} aboutPhoto={data.photo} aboutName={data.nume} id={data.id} details={data.detalii} />
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default About

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
