import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import RestaurantDetail from './screens/RestaurantDetail';
import OrderCompleted from './screens/OrderCompleted';

import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store';

const store = configureStore();

const navigation = () => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
                    <Stack.Screen name='OrderCompleted' component={OrderCompleted} />

                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}

export default navigation