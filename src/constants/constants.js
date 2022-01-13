export const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
export const API_BASE_URL = 'https://api.themoviedb.org/3/';

export const requests = {
    movieOriginalImageBaseUrl: `https://image.tmdb.org/t/p/original`,
    movie300PosterImageBaseUrl: `https://image.tmdb.org/t/p/w342`,
    movieVideosBaseUrl: `${API_BASE_URL}movie/`,
    fetchSingleMovieDetails: `${API_BASE_URL}movie/`,
    fetchGenreList: `${API_BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`,
    movieList: {
        upcoming: `${API_BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
        trending: `${API_BASE_URL}trending/movie/day?api_key=${API_KEY}`,
        nowPlaying: `${API_BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
        topRated: `${API_BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
        popular: `${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US`,
        search: `${API_BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=`,
        horror: `${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27`,
        romance: `${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749`,
        comedy: `${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,
    }
}