import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Image, Dimensions, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { styles } from '../components/styles/MoviePosterStyles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { Cast } from '../interfaces/creditsInterface';
import { MovieDetails } from '../components/MovieDetails';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

export const DetailScreen = ({route,navigation}:Props) => {
 
    const movie = route.params // as Movie;
    console.log(movie.id)
    console.log(movie.title)
    const uri =`https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const {isLoading,movieFull,cast} = useMoviesDetails(movie.id)
    console.log({isLoading,movieFull,cast})

         
   
    return (
      <ScrollView>
            <View style={{
              ...styles.imageContainer,
               width:'100%',
               height:screenHeight *0.7,
               flex:0,
               paddingBottom:5,
              }}>
                      {/*Botonpara cerrar */}
               <View style={styles.backButton}>
                 <TouchableOpacity
                 onPress={()=>navigation.pop()}>
               <Icon 
               color="yellow"
               name="arrow-back-outline"
               size={150}
               style={{bottom:40}}
              
               />
               </TouchableOpacity>
               </View>
                <View style={styles.imageBorder}>

                    <Image 
                    
                    source={{uri}}
                    style={styles.posterImage}
                    />
                </View>
                </View> 
                <View style={styles.marginContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subTitle}>{movie.title}</Text>
                </View>
        
             
               {
                 isLoading
                 ?<ActivityIndicator size={35} color="grey" style={{marginTop:20}}/>
                 :<MovieDetails movieFull={movieFull!} cast={cast}/>
               }
         
                </ScrollView>
        
    )
}
