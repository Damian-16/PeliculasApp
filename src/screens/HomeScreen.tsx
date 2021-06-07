import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { ActivityIndicator, ActivityIndicatorBase, Button, Dimensions, Text, View } from 'react-native'
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


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
      <ScrollView>
        <View style={{marginTop: top + 20}}> 
            {/* <MoviePoster
            movie={peliculasEnCine[1]}/>
            <Button 
            title="ir detalle"
            onPress={()=>navigation.navigate('DetailScreen')}></Button>
             */}


          {/* carrousel principal    */}
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
       {/* peliculas populares       */}
       <View style={{backgroundColor:'red',height:250}}>
           <Text style={{fontSize:30,fontWeight:'bold'}}>En Cines</Text>
           <FlatList
            data={peliculasEnCine}
            renderItem={({item}:any)=> (<MoviePoster movie={item} width={100}height={200}/>)}
            keyExtractor={ (item)=>item.id.toString() }
            horizontal={true}
           />
       </View>
        </View>
    </ScrollView>      
    )
}
