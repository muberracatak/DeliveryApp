import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native';
import MenuItem from '../components/restaurantDetail/MenuItem';
import OrderItem from '../components/restaurantDetail/OrderItem'

const OrderCompleted = () => {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Bologna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image:
                    "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
        ],
    });
    const [modalVisible, setModalVisible] = useState(false)
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                margin: 15,
                alignItems: 'center',
                height: '100%'
            }}>
                <LottieView
                    autoPlay
                    style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
                    speed={1}
                    loop={false}
                    source={require('../assets/animations/check.json')}
                />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Your order at {restaurantName} has been placed for {totalUSD}</Text>

                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>

                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subTotalContainer}>
                            <Text style={styles.subTotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>

                    </View>
                </View>
                <LottieView
                    autoPlay
                    style={{ height: 500, alignSelf: 'center', top: 50 }}
                    speed={1}
                    loop={false}
                    source={require('../assets/animations/cooking.json')}
                />

            </View>
        </SafeAreaView >
    )
}

export default OrderCompleted

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 5,
        height: 100
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    subTotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10
    }
})