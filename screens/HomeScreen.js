import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from "react-native-elements";
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderButton'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantCards, { localRestaurants } from '../components/home/RestaurantCards'
import BottomTabs from '../components/home/BottomTabs';
import navigation from '../navigation';
const YELP_API_KEY = "age8QSTIc2wP2nR2yAZkIrXcZWFIizcA-Zuo2t-fnea5dF0iiCyB-CkRR7bOcpmy7sXeXPHWKHBvm1PM8vjYPF-L72ypIy7YoBcZBaaGjEJ5_nT3ZkmTChiqWvPjY3Yx"

const HomeScreen = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("SanDiego")
    const [activeTab, setActiveTab] = useState("Delivery")

    const getRestaurantsFromHelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        }
        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json =>
            setRestaurantData(json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
            )
            )
        )
    };
    useEffect(() => {
        getRestaurantsFromHelp();
    }, [city, activeTab])
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantCards restaurantData={restaurantData} navigation={navigation} />

            </ScrollView>

            <BottomTabs />
        </SafeAreaView>

    )
}

export default HomeScreen