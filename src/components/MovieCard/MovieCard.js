import { useLocation, useSearchParams } from 'react-router-dom';

import AddToFavouriteButton from '../AddToFavourite/AddToFavouriteButton';
import placeHolderImage from '../../Assets/PosterNotAvailable.png';
import classes from './MovieCard.module.css';
import { Star } from '../../Assets/Icons';
import { requests } from '../../constants/constants';


const MovieCard = props => {

    const movie = props.movie;

    const setSearchParams = useSearchParams()[1];
    const { search } = useLocation();

    const backdrop = `${movie.poster_path ? requests.movie300PosterImageBaseUrl + movie.poster_path : placeHolderImage}`;
    const imageClass = `${movie.poster_path ? '' : classes.placeHolder}`;
    const release_date = new Date(movie.release_date);

    const movieCardClickHandler = () => {
        if (search) {
            const currentUrlParams = Object.fromEntries(new URLSearchParams(search));
            setSearchParams({ ...currentUrlParams, movieId: movie.id });
        }
        else {
            setSearchParams({ movieId: movie.id });
        }
    }

    return (
        <div className={`row p-3 g-0 h-100 ${classes.movieCard}`} onClick={movieCardClickHandler}>
            <div className={`col-md-4 d-flex align-items-center justify-content-center ${imageClass}`}>
                <img
                    src={backdrop}
                    className={`img-fluid shadow rounded-3 ${classes.placeHolderColor}`}
                    alt={movie.title} />
            </div>
            <div className="col-md-8 position-relative">
                <div className={`card-body ${classes.movieBody}`}>
                    <h5 className={`card-title`}>{movie.title}</h5>
                    {
                        movie.release_date && <p className={`card-text mb-2 ${classes.movieYear}`}>{release_date?.getFullYear()}</p>
                    }
                    {
                        movie.overview && <p className={`card-text ${classes.movieOverviewPreview}`}>{`${movie?.overview?.split(' ').slice(0, 8).join(' ')}...`}</p>
                    }


                    <div className='d-flex position-absolute position-xs-relative start-0 bottom-0 w-100 ps-sm-3 align-items-center justify-content-between'>
                        {
                            !!movie.vote_average && movie.vote_average > 0 &&
                            <span className='d-flex align-items-center'><Star size={20} /><span className={`ps-1 ${classes.rating}`}>{movie.vote_average}</span></span>
                        }
                        <AddToFavouriteButton movie={movie} size={30} theme={'transparent'} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieCard;