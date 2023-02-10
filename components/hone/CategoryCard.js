import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity style={{ position: 'relative' }}>
            <Image source={{ uri: imgUrl }} style={{ height: 100, width: 100, margin: 5, padding: 10 }} />

        </TouchableOpacity>
    )
}

export default CategoryCard