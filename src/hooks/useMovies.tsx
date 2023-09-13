import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  //este interface es para evitar tener muchos states y tambien muchos await
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [IsLoading, setIsLoading] = useState(true);

  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [], //ahora siempre va a tener un valor base
  });

  // const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
  // const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([])

  const getMovies = async () => {
    const NowPlayingPromise = await movieDB.get<MovieDBResponse>(
      '/now_playing',
    );
    const popularPromise = await movieDB.get<MovieDBResponse>('/popular');
    const topRatedPromise = await movieDB.get<MovieDBResponse>('/top_rated');
    const upComingPromise = await movieDB.get<MovieDBResponse>('/upcoming');

    const resps = await Promise.all([
      NowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upComing: resps[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    // movieDB.get<MovieDBNowPlaying>('/now_playing')
    // .then(resp=>{
    //     console.log(resp.data.results[0].title) //primera posicion de las peliculas primer titulo
    // })

    //now_playing
    getMovies();
  }, []);

  return {
    ...moviesState,
    IsLoading,
  };
};
