import { requests } from "../constants/constants";
import Container from '../components/UI/Container';
import BrowseResults from "../components/Browse Results/BrowseResults";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
    const searchParams = useSearchParams()[0];
    const keyword = searchParams.get('q');

    return (
        <Container>
            <p className="pt-5 mt-5">Search results for "{keyword}"</p>
            <BrowseResults fetchUrl={`${requests.movieList.search}${keyword}`} />
        </Container>
    )
};

export default SearchPage;