import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Button, View } from 'react-native'


export const HomeScreen = () => {

    const navigation = useNavigation();
    return (
        <View>
            <Button 
            title="ir detalle"
            onPress={()=>navigation.navigate('DetailScreen')}></Button>
            
        </View>
    )
}
