import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'


import AppNotification from './components/Notifications/AppNotification';
import { moviesActions } from './store/movie-slice';
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';
import MovieModal from './components/Modal/MovieModal';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import SearchPage from './pages/Search';
import Browse from './pages/Browse';
import './App.css';


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const favMovies = useSelector(state => state.movies.favouriteMovies);

  useEffect(() => {
    if (!isInitial) {
      localStorage.setItem("favouriteMovies", JSON.stringify(favMovies));
    }
  }, [favMovies]);

  useEffect(() => {
    const favouriteMoviesLocalStorage = localStorage.getItem("favouriteMovies");
    const parsedFavouriteMovies = JSON.parse(favouriteMoviesLocalStorage);

    if (isInitial && parsedFavouriteMovies) {
      dispatch(moviesActions.setFavouriteMovies(parsedFavouriteMovies));
    }
    isInitial = false;
  }, []);

  return (
    <Fragment>
      <Navigation></Navigation>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='browse/:title' element={< Browse />} />
          <Route path='my-list' element={< Bookmarks />} />
          <Route path='/search' element={<SearchPage />}></Route>
        </Routes>

      </main>
      <Footer />
      <AppNotification />
      <MovieModal />

    </Fragment>

  );
}

export default App;
