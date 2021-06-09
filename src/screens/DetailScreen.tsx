import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { styles } from '../components/styles/MoviePosterStyles';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMoviesDetails } from '../hooks/useMoviesDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

export const DetailScreen = ({route}:Props) => {
 
    const movie = route.params // as Movie;
    console.log(movie.id)
    console.log(movie.title)
    const uri =`https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    useMoviesDetails(movie.id)

         
   
    return (
      <ScrollView>
            <View style={{
              ...styles.imageContainer,
               width:'100%',
               height:screenHeight *0.7,
               flex:0,
               paddingBottom:5,
              }}>
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
             <View style={styles.marginContainer}>
               <Icon 
               name='airplane-outline'
               color='grey'
               size={30}/>
             </View>
                </ScrollView>
        
    )
}
