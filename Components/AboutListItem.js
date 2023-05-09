import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'



const AboutListItem = ({ id, aboutName, aboutPhoto, enterAbout, details }) => {

    return (
        <ListItem
            containerStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 20,
            }}
            style={{
                marginBottom: 10,
                marginHorizontal: 28,
                borderRadius: 20,
                borderColor: "#202020",
                shadowColor: "#171717",
                shadowOpacity: 0.7,
                shadowOffset: {
                    width: -2,
                    height: 4,
                },
            }}
            key={id}
            onPress={() => enterAbout(id, aboutPhoto, details, aboutName)}
        >
            <Avatar
                style={{ width: 75, height: 75 }}
                rounded
                source={{
                    uri: aboutPhoto,
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {aboutName}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default AboutListItem

const styles = StyleSheet.create({})
