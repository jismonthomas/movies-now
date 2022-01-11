
import { moviesActions } from '../../store/movie-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import { Heart, HeartFill } from '../../Assets/Icons';
import classes from './AddToFavourite.module.css';

const AddToFavouriteButton = ({ movie, size: buttonSize, theme, loading = false }) => {

    const dispatch = useDispatch();
    const favMovies = useSelector(state => state.movies.favouriteMovies);

    const isThisFavMovie = !!(favMovies.find(favmovie => favmovie.id === movie.id));

    const addToFavouriteHandler = (e) => {
        e.stopPropagation();
        dispatch(moviesActions.toggleFavouriteMovies(movie));
    }

    return (
        <button type='button' data-bs-toggle="tooltip" data-bs-placement="top" title='Add To Favourites' className={` ${classes.addToFavButton} p-0 shadow-sm b-0 rounded ms-auto ${theme === 'solid' ? classes.solid : classes.transparent} ${isThisFavMovie ? classes.active : ''} `} style={{ width: `${buttonSize}px` }} onClick={addToFavouriteHandler}>
            {isThisFavMovie && !loading && <HeartFill size={buttonSize - 10} />}
            {!isThisFavMovie && !loading && <Heart size={buttonSize - 10} />}
            {loading &&
                <span>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </span>
            }
        </button>
    );
}

export default AddToFavouriteButton;