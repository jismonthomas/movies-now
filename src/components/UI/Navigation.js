import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchMoviesForm from '../SearchMovies/SearchMoviesForm';
import classes from './Navigation.module.css';

const Navigation = () => {

    const [navShow, setNavShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 75) {
                setNavShow(true);
            }
            else {
                setNavShow(false);
            }
        });

        return () => {
            window.removeEventListener('scroll', null);
        }
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${navShow ? classes.secondaryNav : ''}`}>
            <div className="container-xxl">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand pe-0 pe-lg-5" to="/"><h1 className='m-0'>Movies Now.</h1></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/browse/popular?list=popular">Popular</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/browse/top-rated-movies?list=topRated">Top Rated</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/my-list" >My List</NavLink>
                        </li>
                    </ul>
                    <SearchMoviesForm />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;