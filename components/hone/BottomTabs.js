import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <View style={{
            flexDirection: 'row',
            margin: 10,
            marginHorizontal: 30,
            justifyContent: 'space-between'
        }}>
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    )
}

export default BottomTabs

const Icon = (props) => (
    <TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
            <FontAwesome5 name={props.icon} size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: 'center'
                }}
            />
            <Text style={{ top: 30, right: 33 }}>{props.text}</Text>
        </View>
    </TouchableOpacity>
)