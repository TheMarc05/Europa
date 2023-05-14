import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Pressable,
    Image,
    View,
    TouchableOpacity,
    ScrollView,
    Modal,
} from "react-native";
import AboutListItem from "../Components/AboutListItem";
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../firebase';

const About = ({ navigation }) => {

    const [about, setAbout] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const unsubscribe = db.collection("despre").onSnapshot((snapshot) => {
            setAbout(
                snapshot.docs.map((doc) => ({
                    data: doc.data(),
                }))
            );
        });
        // about.map(({data}) => {console.log("GHERLA" + data.photo)});
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
                    about.map(({ data }) => (
                        <AboutListItem key={makeid(6)} enterAbout={enterAbout} aboutName={data.nume} id={data.id} aboutPhoto={data.photo} details={data.detalii} />
                    ))
                }
            </ScrollView>

            <TouchableOpacity
            style={{ alignSelf: "center" }}
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <Image
                    style={{ alignSelf: "center", width: 50, height: 50, marginTop: 10, marginBottom: 30 }}
                    source={require('../assets/info.png')}

                />
            </TouchableOpacity>


            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Uniunea Europeana</Text>
                        <Text style={styles.modalText}>Cornea Theodor-Marc</Text>
                        <Text style={styles.modalText}>
                            Clasa a XII - a B
                        </Text>
                        <Text style={styles.modalText}>
                            Liceul Teoretic Sebis
                        </Text>
                        <Text style={styles.modalText}>
                            Prof. Coordonator Braitiu Mona
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#ADD8E6',
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 22,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    modalTitle: {
        marginBottom: 40,
        textAlign: "center",
        bottom: 40,
        color: "#3570EC",
        fontWeight: "700",
        fontSize: 22
    },
    modalView: {
        marginTop: 200,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 40,
        paddingVertical: 60,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingBottom: 25,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 40,
        elevation: 2,
        marginVertical: 10,
    },
    buttonClose: {
        backgroundColor: "#E2E2E2E2",
    },
    textStyle: {
        color: "#3570EC",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        textAlign: "center",
        bottom: 40,
        color: "black",
        fontWeight: "700",
        marginBottom: 5
        //fontSize: 16
    }
})
