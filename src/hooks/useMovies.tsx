import React,{useEffect, useState} from 'react'
import movieDB from '../api/movieDB'
import { MovieDBResponse,Movie } from '../interfaces/movieInterface'

export const useMovies = () => {
    const [IsLoading, setIsLoading] = useState(true);

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([])
    
    const getMovies = async()=>{

        const respNowPlaying = await movieDB.get<MovieDBResponse>('/now_playing');
        const respPopular = await movieDB.get<MovieDBResponse>('/popular');

        setPeliculasEnCine(respNowPlaying.data.results);
        setPeliculasPopulares(respPopular.data.results);


        setIsLoading(false);
        
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
     peliculasPopulares,
     IsLoading,
      }
}