import { useSelector } from "react-redux";

import Container from '../components/UI/Container';
import MovieCard from "../components/MovieCard/MovieCard";
import MovieWrappedRow from "../components/UI/MovieWrappedRow";
import { useEffect } from "react";

const Bookmarks = () => {
    const favouriteMovies = useSelector(state => state.movies.favouriteMovies);
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <Container>
            <h1 className="pt-5 mt-5">My List </h1>
            {favouriteMovies.length < 1 && <p>Your haven't added any movies to your list.</p>}
            {favouriteMovies &&
                <MovieWrappedRow>
                    {[...favouriteMovies]?.reverse()?.map((movie) =>
                        <div className="cardWrapper rounded-3 card" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    )}
                </MovieWrappedRow>
            }
        </Container>
    )
}

export default Bookmarks;