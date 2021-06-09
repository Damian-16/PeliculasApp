import React from 'react'
import { Image, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'
import { styles } from './styles/MoviePosterStyles';

interface Props {
    actor:Cast
}

export const CastItem = ({actor}: Props) => {

const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

    return (
        <View style={styles.actorContainer}>
            <Image
              source={{uri}}
              style={{width:50,height:50,borderRadius:10}}/>
       
        <View style={styles.actorInfo}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>
                {actor.name}
            </Text>
            <Text style={{fontSize:15,opacity:0.7}}>
                {actor.character}
            </Text>
        </View>
        </View>
    )
}
