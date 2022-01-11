import { useSelector } from "react-redux";

import Container from '../components/UI/Container';
import MovieCard from "../components/MovieCard/MovieCard";
import MovieWrappedRow from "../components/UI/MovieWrappedRow";

const Bookmarks = () => {
    const favouriteMovies = useSelector(state => state.movies.favouriteMovies);

    return (
        <Container>
            <h1 className="pt-5 mt-5">My List </h1>
            <MovieWrappedRow>
                {[...favouriteMovies]?.reverse()?.map((movie) =>
                    <div className="cardWrapper rounded-3 card" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                )}
            </MovieWrappedRow>
        </Container>
    )
}

export default Bookmarks;