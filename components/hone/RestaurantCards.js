import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
export const localRestaurants = [
    {
        name: "Beachside Bar",
        image:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];
const RestaurantCards = ({ navigation, ...props }) => {

    return (
        <>
            {
                props.restaurantData.map((restaurant, index) => (

                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate('RestaurantDetail', {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            price: restaurant.price,
                            reviews: restaurant.reviews,
                            rating: restaurant.rating,
                            categories: restaurant.categories
                        })}
                        activeOpacity={1}
                        style={{ padding: 15, backgroundColor: 'white', shadowOpacity: 0.5, marginTop: 10, marginBottom: 30 }}>

                        <View key={index}>
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                        </View>

                    </TouchableOpacity>
                ))
            }
        </>
    )
}
const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image,
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <Feather name="heart" size={24} color="black" />
        </TouchableOpacity>
    </>
);
const RestaurantInfo = (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45 . min</Text>
        </View>
        <View style={{ justifyContent: 'center', backgroundColor: '#eee', height: 30, width: 30, alignItems: 'center', borderRadius: 15 }}>
            <Text >{props.rating}</Text>
        </View>
    </View>
)
export default RestaurantCards