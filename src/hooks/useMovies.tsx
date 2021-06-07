import React,{useEffect, useState} from 'react'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying,Movie } from '../interfaces/movieInterface'

export const useMovies = () => {
    const [IsLoading, setIsLoading] = useState(true);

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    const getMovies = async()=>{

        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setPeliculasEnCine(resp.data.results)
        
    }
    
        useEffect(() => {
            // movieDB.get<MovieDBNowPlaying>('/now_playing')
            // .then(resp=>{
            //     console.log(resp.data.results[0].title) //primera posicion de las peliculas primer titulo
            // })


            //now_playing
            getMovies();

             
         }, [])
    

    return {
     peliculasEnCine,
     IsLoading
      }
}