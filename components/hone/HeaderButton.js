import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Ionicons, EvilIcons } from '@expo/vector-icons';
import Categories from '../home/Categories';
import FeaturedRow from '../home/Categories'

const HeaderTabs = (props) => {

    //const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton
                btnColor='black'
                textColor='white'
                text="Delivery"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton
                btnColor='white'
                textColor='black'
                text="Pickup"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </SafeAreaView >
    )
}
const HeaderButton = (props) => {

    return (
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{ color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: '900' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}
export default HeaderTabs

const styles = StyleSheet.create({
    text: { color: 'red' }
})