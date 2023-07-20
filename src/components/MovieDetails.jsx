import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";



const MovieDetails = () => {

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // set the initial state of isLoading to true

    const { id } = useParams(); // get the id from the url

    console.log(movie)
    // fetch the movie details using axios asynchrounously with try catch
    
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API}&language=en-US`);
                setMovie(data);
                setIsLoading(false); // set isLoading to false when the data is fetched
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovieDetails();
        
    }, [id]);
    
  return (
    <>
        <div className="container mx-auto px-5 py-2 items-center justify-center text-center">
            <h1 className="text-2xl font-bold py-3">Movie Details</h1>

            {
                isLoading ? (
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-400 rounded"></div>
                                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-1/2" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
                        <h1 className="text-2xl font-bold">{movie.original_title}</h1>

                        {   
                            movie.genres.map((genre) => (
                                <span className="text-sm bg-white py-1 my-1 px-2 text-black rounded-md" key={movie.id} >{genre.name}</span>
                            ))
                        }
                        
                        <span className="text-sm py-1">{movie.tagline}</span>
                        <span className="text-sm py-1">{movie.release_date}</span>
                        <span className="text-sm py-1">{movie.vote_average} <AiFillStar className="inline-block" /></span>
                        <span className="text-sm py-1">{movie.overview}</span>

                        {/* useful links */}
                        <div className="flex items-center space-x-16 py-5">
                            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="text-sm py-1 px-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">IMDB <BiLinkExternal className='inline-block' /> </a>
                            <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noreferrer" className="text-sm py-1 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">TMDB <BiLinkExternal className='inline-block' /> </a>
                            <a href={`https://www.youtube.com/results?search_query=${movie.original_title}`} target="_blank" rel="noreferrer" className="text-sm py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600">Youtube <BiLinkExternal className='inline-block' /> </a>
                        </div>

                        
                        {/* production companies */}
                        <div className="flex flex-col items-center justify-center bg-white">
                            <h1 className="text-2xl font-bold py-3 text-black">Production Companies</h1>
                            <div className="flex flex-wrap items-center justify-center">
                                {
                                    movie.production_companies.map((company) => (
                                        <div className="flex flex-col items-center justify-center mx-2 my-2" key={company.id}>
                                            <img className="w-24" src={`https://image.tmdb.org/t/p/original/${company.logo_path}`} alt={company.name} />
                                            <span className="text-sm py-1 text-black">{company.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default MovieDetails