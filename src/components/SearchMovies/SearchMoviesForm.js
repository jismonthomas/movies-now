import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchMoviesFom = () => {
    const [currentPage, setCurrentPage] = useState('/');
    const searchref = useRef();
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const searchBarChangeHandler = (e) => {
        if (!e.target.value) {
            navigate(currentPage);
        }
        if (pathname !== '/search') {
            const url = `${pathname}${search}`;
            setCurrentPage(url);
        }
    }

    const searchClickHandler = (e) => {
        e.preventDefault();
        const searchTerm = searchref.current.value;

        if (!!searchTerm) {
            navigate(`/search?q=${searchTerm}`);
        }
    }



    return (
        <form className="d-flex">
            <input className={`form-control me-2`} type="search" ref={searchref} placeholder="Search" onChange={searchBarChangeHandler} aria-label="Search" />
            <button className="btn btn-search" type="submit" onClick={searchClickHandler}>Search</button>
        </form>
    )
};

export default SearchMoviesFom;