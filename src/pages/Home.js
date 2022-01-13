import { requests } from "../constants/constants";

import Container from '../components/UI/Container';

import { Fragment, useEffect } from "react";


import Header from '../components/Header/Header';
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";

const Home = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (

        <Fragment>
            <Header fetchUrl={requests.movieList.upcoming} />
            <Container>
                <MovieCarousel heading="Trending Movies" fetchUrl={requests.movieList.trending} movieList={'upcoming'}></MovieCarousel>
                <MovieCarousel heading="Now Playing" fetchUrl={requests.movieList.nowPlaying} movieList={'nowPlaying'}></MovieCarousel>
                <MovieCarousel heading="Horror Movies" fetchUrl={requests.movieList.horror} movieList={'horror'}></MovieCarousel>
                <MovieCarousel heading="Romance Movies" fetchUrl={requests.movieList.romance} movieList={'romance'}></MovieCarousel>
                <MovieCarousel heading="Comedy Movies" fetchUrl={requests.movieList.comedy} movieList={'comedy'}></MovieCarousel>
            </Container>
        </Fragment>
    );
};

export default Home;