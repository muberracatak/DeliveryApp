import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons, EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ cityHandler }) => {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data.description);
                    const city = data.description.split(',')[0];
                    cityHandler(city);
                }}
                query={{
                    key: 'AIzaSyCfyolB-xHPHwm3b_PFHiniMImG4fcRVX4',
                    language: 'en',
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} color="black" />
                    </View>
                )}
                renderRightButton={() =>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 8,
                        backgroundColor: 'white',
                        padding: 9,
                        borderRadius: 30,
                        alignItems: 'center'
                    }}>
                        <EvilIcons name="clock" size={11} color="black" style={{
                            marginRight: 6
                        }}
                        />
                        <Text>Search</Text>
                    </View>
                }
            />
        </View>
    )
}

export default SearchBar