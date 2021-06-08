import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import { styles } from '../components/styles/MoviePosterStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

export const DetailScreen = ({route}:Props) => {
    const movie = route.params // as Movie;
    console.log(movie.title)
    const uri =`https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

         
   
    return (
      <ScrollView>
            <View style={{
              ...styles.imageContainer,
               width:'100%',
               height:screenHeight *0.7,
               flex:0,
               paddingBottom:5,
              //  backgroundColor:'red',
               overflow:'hidden',
               borderBottomEndRadius:25,
               borderBottomStartRadius:25
              }}>

                <Image 
                
                source={{uri}}
                style={styles.posterImage}
                />
                </View> 
                <View style={styles.marginContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subTitle}>{movie.title}</Text>
                </View>
                </ScrollView>
        
    )
}
