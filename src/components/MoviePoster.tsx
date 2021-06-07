import React from 'react'
import { View, Text, Image, } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from './styles/MoviePosterStyles';




interface Props {
    movie:Movie
}





export const MoviePoster = ({movie}:Props) => {
 const uri =`https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
   //console.log(movie.poster_path);

    return (
        <View style={{
            width:150,
            height:300,
            // backgroundColor:'red'
        }}>
           <View style={styles.imageContainer}>
           <Image 
            source={{uri}}
            style={styles.image}/>
            </View> 
            
        </View>
    )
}
