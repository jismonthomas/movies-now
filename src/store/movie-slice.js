import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        favouriteMovies: [],
        movieGenres: []
    },
    reducers: {
        setMovies(state, action) {
            const newMovies = action.payload;
            const currentMovies = state.storedMovies;
            state.storedMovies = [...currentMovies, newMovies];
        },
        setMovieGenres(state, action) {
            state.movieGenres = [...action.payload];
        },
        toggleFavouriteMovies(state, action) {
            const favMovie = action.payload;
            const existFavMovieIndex = state.favouriteMovies.findIndex(
                movie => movie.id === favMovie.id
            );
            if (existFavMovieIndex >= 0) {
                const newFavMovie = state.favouriteMovies.filter(movie => movie.id !== favMovie.id);
                state.favouriteMovies = newFavMovie;
            }
            else {
                const currentFavMovies = state.favouriteMovies;
                state.favouriteMovies = [...currentFavMovies, favMovie];
            }
        },
        setFavouriteMovies(state, action) {
            state.favouriteMovies = [...action.payload];
        }
    }
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;