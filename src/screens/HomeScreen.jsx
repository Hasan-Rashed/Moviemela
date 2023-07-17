import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../slices/movieSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { AiFillStar } from 'react-icons/ai';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import MovieList from '../components/MovieList';



const HomeScreen = () => {

  const dispatch = useDispatch();

  // select the movies from the store
  const  popularMovies = useSelector(state => state.movies);

  console.log(popularMovies);

  // useeffect to dispatch the getPopularMovies action
  useEffect(() => {

    dispatch(getPopularMovies()); // dispatch the getPopularMovies action

  }, [dispatch]); // dispatch is a dependency of useEffect


  return (
    <>
    <div className='container mx-auto items-center justify-center'>
        {
          popularMovies?.isLoading ? (
                 <SkeletonTheme color='#F5F5F5' highlightColor='#ffffff'> {/* color="#202020" highlightColor="#444" */}
                    <section>
                     <Skeleton height={500} duration={2} /> {/* can also use width */}
                    </section>
                  </SkeletonTheme>
              ) :(
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
                    <div>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                      <div> 
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
          )
        }
      </div>

        <MovieList />
        
    </>
  )
}

export default HomeScreen