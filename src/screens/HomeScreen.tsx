import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { ActivityIndicator, ActivityIndicatorBase, Button, Dimensions, Text, View } from 'react-native'
import { MovieDBResponse } from '../interfaces/movieInterface';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';


const windowWidth = Dimensions.get('window').width

export const HomeScreen = () => {
    const {nowPlaying,popular,topRated,upComing,IsLoading} = useMovies();
    // console.log(peliculasEnCine[4]?.title)
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
      <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}> 
           


          {/* carrousel principal    */}
            <View style={{
            height:340,
           }} >
             <Carousel 
             data={nowPlaying}
             renderItem={({item}:any)=> <MoviePoster movie={item}/>}
             sliderWidth={windowWidth}
             itemWidth={180}
             inactiveSlideOpacity={0.9}
             />

             </View>
       <HorizontalSlider title='en cines' movies={nowPlaying}/>
       <HorizontalSlider title='Populares' movies={popular}/>
       <HorizontalSlider title='TOP' movies={topRated}/>
       <HorizontalSlider title='Proximamente' movies={upComing}/>
       {/* //ejemplo movies={nowPlaying!}la almiracion denota que si o si ese dato va a  venir, le decimos ala maquina quew no se preocupe */}
        </View>
    </ScrollView>    
    </GradientBackground>  
    )
}
