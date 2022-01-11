import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { API_KEY, requests } from '../../constants/constants';
import MoviePreviewHeader from "../Modal/MoviePreviewHeader";
import AddToFavouriteButton from "../AddToFavourite/AddToFavouriteButton";
import { fetchData } from "../../store/movie-actions";
import { uiActions } from "../../store/ui-slice";

const Header = ({ fetchUrl }) => {
    const [movie, setMovie] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const getRandomMovieIndex = (max) => Math.floor(Math.random() * max);

        if (!movie) {

            const bannerMovie = async () => {
                const bannerMovie = await fetchData(fetchUrl);
                if (bannerMovie) {
                    const movieId = bannerMovie.results[getRandomMovieIndex(bannerMovie.results.length)].id;
                    return movieId;
                }
                else {
                    dispatch(uiActions.showNotification({
                        state: 'error',
                        title: 'Fetching Failed',
                        message: 'Fetching banner movie ID failed!'
                    }));
                }
            };


            const movieDetails = async () => {
                try {
                    const movieId = await bannerMovie();
                    const fetchUrl = `${requests.fetchSingleMovieDetails}${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;

                    const bannerMovieDetails = await fetchData(fetchUrl);
                    if (bannerMovieDetails) {
                        setMovie(bannerMovieDetails);
                    }

                }
                catch (err) {
                    dispatch(uiActions.showNotification({
                        state: 'error',
                        title: 'Fetching Failed',
                        message: 'Fetching banner movie failed!'
                    }));
                }

            };

            movieDetails();

        }
    }, []);

    return (
        <header className="pageHeader">
            {movie &&
                <MoviePreviewHeader classes={'container pageHeader'} movie={
                    {
                        movieId: movie.id,
                        title: movie.title,
                        genreList: movie.genres,
                        backdrop: movie.backdrop_path,
                        trailerLink: movie.videos.results.find(video => video.site === 'YouTube' && video.type === 'Trailer').key
                    }
                } >
                    <AddToFavouriteButton size={38} movie={movie} theme={'solid'} />
                </MoviePreviewHeader>
            }
        </header>
    );
}

export default Header;