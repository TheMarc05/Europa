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
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../firebase';

const InstitutionRoom = ({ navigation, route }) => {

    const [textSearch, setTextSearch] = useState('');
    const [institution, setInstitution] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("institutii").onSnapshot((snapshot) => {
            setInstitution(
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
                // Background Linear Gradient
                colors={['#ADD8E6', '#D6F3F2', 'white']}
                style={styles.background}
            />

            <Text style={{ marginTop: 85, fontSize: 24, textAlign: 'center', color: 'black', fontWeight: '500' }}>
                {route.params.institutionName}
            </Text>

            <TouchableOpacity
                raised
                onPress={() => { navigation.goBack() }}
                style={{ alignSelf: "flex-start", top: -85 }}
            >
                <Image
                    source={require("../assets/leftarrow.png")}
                    style={{ marginLeft: 10, width: 20, height: 20 }}
                />
            </TouchableOpacity>

            <Image
                style={{ alignSelf: "center", width: 290, height: 230, marginTop: 20, marginBottom: 30 }}
                source={{
                    uri: route.params.institutionPhoto
                }}
            />
            <Text style={styles.details}>
                {route.params.details}
            </Text>

        </View>
    );
}

export default InstitutionRoom

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
