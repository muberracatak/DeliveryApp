import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'


const items = [
    {
        image: require("../../assets/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../assets/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../../assets/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../../assets/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../../assets/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../assets/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../../assets/desserts.png"),
        text: "Desserts",
    },
];
const Categories = () => {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 20
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
                        <Image style={{
                            width: 50,
                            height: 40,
                            resizeMode: 'contain'
                        }}
                            source={item.image} />
                        <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text} </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Categories