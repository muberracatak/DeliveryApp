import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCards from './RestaurantCards';

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between', paddingLeft: 4 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>{title}</Text>
                <AntDesign name="right" size={24} color="#00CCBB" />


            </View>
            <Text style={{ paddingLeft: 14, color: 'gray' }}>{description}</Text>
            <ScrollView
                style={{ paddingTop: 10 }}
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
            >
                <RestaurantCards
                    id={123}
                    imgUrl="https://gastronomidergisi.com/images/haber/mekan%20genel%20(3)5457.jpg"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a shor description"
                    dishes={[]}
                    long={20}
                    lat={0}

                />
                <RestaurantCards
                    id={123}
                    imgUrl="https://gastronomidergisi.com/images/haber/mekan%20genel%20(3)5457.jpg"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a shor description"
                    dishes={[]}
                    long={20}
                    lat={0}

                />
                <RestaurantCards
                    id={123}
                    imgUrl="https://gastronomidergisi.com/images/haber/mekan%20genel%20(3)5457.jpg"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a shor description"
                    dishes={[]}
                    long={20}
                    lat={0}

                />

            </ScrollView>
        </View>
    )
}

export default FeaturedRow