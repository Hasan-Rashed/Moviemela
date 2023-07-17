import Skeleton from "react-loading-skeleton";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../slices/movieSlice';


const SkeletonCard = () => {

    
    const dispatch = useDispatch();

    // select the movies from the store
    const  popularMovies = useSelector(state => state.movies);

    // length of popularMovies
    const popularMoviesLength = popularMovies?.data?.length;

    // useeffect to dispatch the getPopularMovies action
    useEffect(() => {

      dispatch(getPopularMovies()); // dispatch the getPopularMovies action

    }, [dispatch]); // dispatch is a dependency of useEffect
    
    
return (
    <section>
        <h2 className="section-title">
            <Skeleton duration={1} height={30} width={300} />
        </h2>

        <ul className="list">
            {Array(popularMoviesLength)
            .fill()
            .map((item, index) => (
                <li className="card" key={index}>
                    <Skeleton height={180} />
                    <h4 className="card-title">
                        <Skeleton circle={true} height={50} width={50} /> &nbsp;
                        <Skeleton height={36} width={`80%`} />
                    </h4>
                    <p className="card-channel">
                        <Skeleton width={`60%`} />
                    </p>
                    <div className="card-metrics">
                        <Skeleton width={`90%`} />
                    </div>
                </li>
            ))}
        </ul>
    </section>
);
};

export default SkeletonCard;