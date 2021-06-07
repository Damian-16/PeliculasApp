import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { ActivityIndicator, ActivityIndicatorBase, Button, View } from 'react-native'
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import { useMovies } from '../hooks/useMovies';


export const HomeScreen = () => {
    const {peliculasEnCine,IsLoading} = useMovies();
    console.log(peliculasEnCine[4]?.title)
    const navigation = useNavigation();

    if(IsLoading){
        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }
    return (
        <View>
            <Button 
            title="ir detalle"
            onPress={()=>navigation.navigate('DetailScreen')}></Button>
            
        </View>
    )
}
