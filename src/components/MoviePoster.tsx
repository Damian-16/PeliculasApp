import React from 'react'
import { View, Text, Image, } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from './styles/MoviePosterStyles';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';




interface Props {
    movie:Movie;
    height?:number;
    width?:number;
}





export const MoviePoster = ({movie,height=300,width=180}:Props) => {
 const uri =`https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

 const navigation = useNavigation();
    
   //console.log(movie.poster_path);

    return (
        <TouchableOpacity 
        onPress={()=> navigation.navigate('DetailScreen',movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal:2,
            paddingBottom:20,
            paddingHorizontal:7
           
        }}>
            
           <View style={styles.imageContainer}>
           <Image 
            source={{uri}}
            style={styles.image}/>
            </View> 
            
        </TouchableOpacity>
    )
}
