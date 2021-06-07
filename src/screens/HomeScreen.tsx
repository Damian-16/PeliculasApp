import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, View } from 'react-native'
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';


export const HomeScreen = () => {
    useEffect(() => {
       movieDB.get<MovieDBNowPlaying>('/now_playing')
       .then(resp=>{
           console.log(resp.data.results[0].title) //primera posicion de las peliculas primer titulo
       })
        
    }, [])

    const navigation = useNavigation();
    return (
        <View>
            <Button 
            title="ir detalle"
            onPress={()=>navigation.navigate('DetailScreen')}></Button>
            
        </View>
    )
}
