import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'



const InstitutionListItem = ({ id, institutionName, institutionPhoto, enterInstitution, details }) => {

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
                borderLeftWidth: 3,
                borderBottomWidth: 3,
                shadowColor: "#171717",
                shadowOpacity: 0.7,
                shadowOffset: {
                    width: -2,
                    height: 4,
                },
            }}
            key={id}
            onPress={() => enterInstitution(id, institutionName, institutionPhoto, details)}
        >
            <Avatar
                style={{ width: 45, height: 45 }}
                rounded
                source={{
                    uri: institutionPhoto,
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {institutionName}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default InstitutionListItem

const styles = StyleSheet.create({})
