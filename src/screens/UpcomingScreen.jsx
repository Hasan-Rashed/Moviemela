import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import SkeletonCard from '../components/SkeletonCard';
import { getUpcomingMovies } from '../slices/upcomingSlice';



const UpcomingScreen = () => {

const dispatch = useDispatch();

// select the top rated movies from the store
const upcomingMovies = useSelector(state => state.moviesRoot2.upcoming);


// useEffect to dispatch the getUpcomingMovies action
useEffect(() => {

    dispatch(getUpcomingMovies()); // dispatch the getUpcomingMovies action

}, [dispatch]); // dispatch is a dependency of useEffect



return (
    <>
        <div className="container py-10 px-5 mx-auto items-center justify-center grid grid-cols-1 md:grid-cols-4 gap-3">
            <h1 className="text-2xl font-bold md:col-span-4">Upcoming Movies</h1>

            {
            
                upcomingMovies?.isLoading ? (
                    <SkeletonCard />
                ) : (
                    upcomingMovies?.data?.map((movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <div className="h-64 relative transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <div className="absolute inset-0 bg-cover bg-center z-0 rounded-md shadow-sm transition duration-300 transform-gpu hover:translate-y-2" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}></div>
                        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10  flex flex-col justify-end items-center text-white font-semibold px-2 py-3">
                            <strong className="text-lg">{movie.original_title}</strong>
                            <span className="text-sm">{movie.release_date}</span>
                            <span className="text-sm">{movie.vote_average}</span>
                            <span className="text-sm">{movie.overview.slice(0, 100) + '...'}</span>
                        </div>
                    </div>
                </Link>
                ))
                )
            }
        </div>
    </>
)
}

export default UpcomingScreen