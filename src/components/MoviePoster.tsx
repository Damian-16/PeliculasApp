import React from 'react'
import { View, Text, Image, } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from './styles/MoviePosterStyles';




interface Props {
    movie:Movie;
    height?:number;
    width?:number;
}





export const MoviePoster = ({movie,height=300,width=180}:Props) => {
 const uri =`https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
   //console.log(movie.poster_path);

    return (
        <View style={{
            width,
            height,
            marginHorizontal:8
           
        }}>
           <View style={styles.imageContainer}>
           <Image 
            source={{uri}}
            style={styles.image}/>
            </View> 
            
        </View>
    )
}
