
import { useParams, useSearchParams } from "react-router-dom";
import BrowseResults from "../components/Browse Results/BrowseResults";
import Container from '../components/UI/Container';
import { requests } from "../constants/constants";

const Browse = () => {
    const [search] = useSearchParams();
    const listName = search.get('list');
    const url = requests.movieList[listName];
    const { title } = useParams();

    return (
        <Container>
            <h1 className="pt-5 mt-5">Browse all the  movies: </h1>
            <BrowseResults fetchUrl={url} />
        </Container>
    )
}

export default Browse;