import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { ActivityIndicator, ActivityIndicatorBase, Button, Dimensions, View } from 'react-native'
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';


const windowWidth = Dimensions.get('window').width

export const HomeScreen = () => {
    const {peliculasEnCine,IsLoading} = useMovies();
    console.log(peliculasEnCine[4]?.title)
    const navigation = useNavigation();
    const {top}= useSafeAreaInsets();
    if(IsLoading){
        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }
    return (
        <View style={{marginTop: top + 20}}> 
            {/* <MoviePoster
            movie={peliculasEnCine[1]}/>
            <Button 
            title="ir detalle"
            onPress={()=>navigation.navigate('DetailScreen')}></Button>
             */}
            <View style={{
            height:340,
            // backgroundColor:'red'
        }} >
             <Carousel 
             data={peliculasEnCine}
             renderItem={({item}:any)=> <MoviePoster movie={item}/>}
             sliderWidth={windowWidth}
             itemWidth={180}
             />
             </View>
        </View>
    )
}
