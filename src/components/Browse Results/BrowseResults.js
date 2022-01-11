import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requests } from "../../constants/constants";
import { fetchData } from "../../store/movie-actions";

import { uiActions } from "../../store/ui-slice";
import MovieCard from "../MovieCard/MovieCard";
import MovieWrappedRow from "../UI/MovieWrappedRow";

const BrowseResults = ({ fetchUrl }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(2);
    const [totalPages, setTotalPages] = useState(0);
    const [searchresults, setSearchResults] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        const BrowseQuery = async () => {
            window.scroll(0, 0);
            setLoading(true);
            setCurrentPage(2);
            setTotalPages(0);
            const data = await fetchData(`${fetchUrl}`);
            if (data) {
                setLoading(false);
                setSearchResults(data.results);
                setTotalPages(data.total_pages);
            }
            else {
                setLoading(false);
                dispatch(uiActions.showNotification({
                    state: 'error',
                    title: 'Fetching Failed',
                    message: 'Searching movies failed!'
                }));
            }
        };
        if (!fetchUrl) {
            navigate('/')
            return;
        }

        BrowseQuery();

    }, [fetchUrl]);

    const fetchMoreData = async () => {

        if (currentPage <= totalPages) {
            const data = await fetchData(`${fetchUrl}&page=${currentPage}`);
            if (data.results.length > 0) {

                setLoading(false);
                setSearchResults(state => {
                    return [...state, ...data.results];
                });

                setCurrentPage(page => page + 1);
            }
            else {
                setLoading(false);
                dispatch(uiActions.showNotification({
                    state: 'error',
                    title: 'Fetching Failed',
                    message: 'Searching movies failed!'
                }));
            }
        }

    }


    return (
        <Fragment>
            {!loading && searchresults?.length < 1 &&
                <ul>
                    <li>Your search did not have any matches.</li>
                    <li>Please try different keywords.</li>
                </ul>
            }

            {searchresults?.length > 0 &&
                <InfiniteScroll
                    dataLength={searchresults.length}
                    scrollThreshold={0.9}
                    next={fetchMoreData}
                    hasMore={currentPage <= totalPages}
                    loader={<b> Loading Your Search Results...</b>}
                    endMessage={<h5 style={{ textAlign: 'center', margin: '2rem 0' }}><b>Yay! You have seen it all</b></h5>} className="searchResults">
                    <MovieWrappedRow>
                        {searchresults?.map((movie) =>
                            <div className="cardWrapper rounded-3 card" key={movie.id}>
                                <MovieCard movie={movie} />
                            </div>
                        )}
                    </MovieWrappedRow>
                </InfiniteScroll >}
        </Fragment >
    )
};

export default BrowseResults;