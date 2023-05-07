import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'



const StateListItem = ({ id, stateName, stateFlag, enterState, capital, details }) => {

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
            onPress={() => enterState(id, stateName, stateFlag, capital, details)}
        >
            <Avatar
                style={{ width: 45, height: 45 }}
                rounded
                source={{
                    uri: stateFlag,
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {stateName}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default StateListItem

const styles = StyleSheet.create({})
