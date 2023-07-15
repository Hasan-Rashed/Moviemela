import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../slices/movieSlice';

const HomeScreen = () => {

  const dispatch = useDispatch();
  const  popularMovies = useSelector(state => state.movies);

  console.log( popularMovies);

  if(popularMovies?.isLoading) return <h1 className='text-red-600 text-5xl'>Loading...</h1>
  

  return (
    <div>
        <h1>Home Screen</h1>

        <button onClick={() => dispatch(getPopularMovies()) } >fetch data</button>
        
        {
          popularMovies?.data?.map((movie) => (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
          ))

        }
    </div>
  )
}

export default HomeScreen