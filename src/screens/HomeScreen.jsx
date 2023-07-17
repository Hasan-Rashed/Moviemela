import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../slices/movieSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { AiFillStar } from 'react-icons/ai';




const HomeScreen = () => {

  const dispatch = useDispatch();
  const  popularMovies = useSelector(state => state.movies);

  console.log(popularMovies);

  // useeffect to dispatch the getPopularMovies action
  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]); // dispatch is a dependency of useEffect


  if(popularMovies?.isLoading) return <h1 className='text-red-600 text-5xl'>Loading...</h1>
  

  return (
    <div className='container mx-auto items-center justify-center'>
        {/* {
          popularMovies?.data?.map((movie) => (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <h1 className="text-3xl text-blue-800">Poster path start</h1>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <h1 className="text-3xl text-blue-800">Poster path start</h1>

              <h1 className="text-3xl text-green-800">backdrop_path start</h1> 
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
              <h1 className="text-3xl text-green-800">backdrop_path start</h1> 
              
            </div>
          ))
        } */}

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          transitionTime={1}
        >
          {
            popularMovies?.data?.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div className=''>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className='w-96' />
                  {/* release date */}
                  <div  className=""> 
                    <h3 className='text-lg'>{movie.original_title}</h3>
                    <p className="">{movie.release_date}</p>
                    <p className='text-white'>{movie.vote_average} <AiFillStar className='inline-block' /></p>
                    <p className='text-sm'>{movie.overview}</p>
                  </div>
                </div>
              </Link>
            ))
          }
            </Carousel>
        
    </div>
  )
}

export default HomeScreen