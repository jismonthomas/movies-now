import { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useSearchParams } from 'react-router-dom';

import AddToFavouriteButton from '../AddToFavourite/AddToFavouriteButton';

import { X } from '../../Assets/Icons';
import classes from './MovieModal.module.css';
import MoviePreviewHeader from './MoviePreviewHeader';
import { fetchData } from '../../store/movie-actions';
import { API_KEY, requests } from '../../constants/constants';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import PlaceholderText from '../UI/PlaceholderText';

const portalElement = document.getElementById('overlays');
const MovieModal = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [movie, setMovie] = useState({});
    const { search } = useLocation();
    const movieId = searchParams.get('movieId');

    useEffect(() => {

        const selectedMovie = async () => {
            setLoading(true);
            const fetchUrl = `${requests.fetchSingleMovieDetails}${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos&include_adult=false`;

            const selectedMovieData = await fetchData(fetchUrl);

            if (selectedMovieData) {
                setLoading(false);
                setMovie(selectedMovieData);
            }
            else {
                setLoading(false);
                dispatch(uiActions.showNotification({
                    state: 'error',
                    title: 'Fetching Failed',
                    message: 'Fetching movie info failed failed!'
                }));
            }
        };
        if (movieId) {
            selectedMovie();
        }

    }, [movieId]);


    const closeModal = (e) => {
        e.stopPropagation(e.target.closest('.modal-body'));
        if (!e.target.closest('.modal-body')) {
            let currentUrlParams = Object.fromEntries(new URLSearchParams(search));
            delete currentUrlParams.movieId;
            setSearchParams(currentUrlParams);
        }
    }

    return (

        <>

            {movieId &&
                <Fragment>
                    {ReactDOM.createPortal(
                        <div className={`modal fade show d-block`} id="movieModal" tabIndex="-1" aria-labelledby="movieModalLabel" aria-modal="true" role='dialog' onClick={closeModal}>
                            <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${classes.modalDialog}`}>
                                <div className={`modal-content position-relative  ${classes.modalContent}`}>
                                    <button type="button" className="btn-close position-absolute end-0 top-0 z-index-10" aria-label="Close" onClick={closeModal}>
                                        <X />
                                    </button>

                                    {movie &&
                                        <div className={`modal-body p-0 `}>
                                            <MoviePreviewHeader classes={'pageModal'} loading={loading} movie={!loading &&
                                            {
                                                movieId: movie.id,
                                                title: movie.title,
                                                genreList: movie.genres,
                                                backdrop: movie.backdrop_path,
                                                trailerLink: movie.videos?.results.find(video => video.site === 'YouTube' && video.type === 'Trailer')?.key
                                            }
                                            } >
                                                <AddToFavouriteButton size={38} movie={movie} theme={'solid'} loading={loading} />

                                            </MoviePreviewHeader>

                                            <div className={`p-4 p-lg-5 ${classes.moviePreviewBody}`}>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-7'>
                                                        <div className={`d-flex mb-3 ${classes.movieQuickInfo}`}>

                                                            <span>
                                                                {loading && <PlaceholderText />}{!loading && movie.release_date && new Date(movie.release_date).getFullYear()}
                                                            </span>

                                                            <span> {loading && <PlaceholderText />}
                                                                {!loading &&
                                                                    `${Math.floor(movie.runtime / 60) ? Math.floor(movie.runtime / 60) + ' h' : ''} 
                                                        ${Math.floor(movie.runtime % 60) ? Math.floor(movie.runtime % 60) + ' min' : ''}`}
                                                            </span>

                                                            <span className='movieRating tmdbRating' title='TMDB Vote Average'>
                                                                {loading && <PlaceholderText />}
                                                                {!loading && movie.vote_average > 0 && `TMDB ${movie.vote_average}`}
                                                            </span>

                                                        </div>
                                                        <>
                                                            {loading && <><PlaceholderText /> <PlaceholderText /> <PlaceholderText /></>}
                                                            {!loading && movie.overview}
                                                        </>
                                                    </div>
                                                    <div className='col-12 col-lg-5 mt-3 mt-lg-0'>

                                                        <div className={classes.moviePeople}>
                                                            {loading && <PlaceholderText />}
                                                            {!loading && movie.status && <>
                                                                <span className={classes.movieSmallDetails}>
                                                                    Status:
                                                                </span>
                                                                <span className='movieSmallDetails'>
                                                                    {movie.status}
                                                                </span>
                                                            </>
                                                            }
                                                        </div>
                                                        <div className={classes.moviePeople}>
                                                            {loading && <PlaceholderText />}
                                                            {!loading && movie.production_companies?.length > 0 && <>
                                                                <span className={classes.movieSmallDetails}>
                                                                    Production:
                                                                </span>
                                                                <span className='moviePeopleNames'>
                                                                    {movie.production_companies?.map(company => company.name).join(', ')}
                                                                </span>
                                                            </>
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        , portalElement)}
                    {ReactDOM.createPortal(<div className="modal-backdrop fade show"></div>, portalElement)}
                </Fragment>
            }

        </>
    );

};

export default MovieModal;