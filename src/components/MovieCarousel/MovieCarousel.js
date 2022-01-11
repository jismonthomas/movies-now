import { useEffect, useRef, useState } from 'react';

import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ArrowRight } from '../../Assets/Icons';
import { uiActions } from '../../store/ui-slice';
import MovieCard from "../MovieCard/MovieCard";
import classes from './MovieCarousel.module.css';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../store/movie-actions';
import { Link } from 'react-router-dom';


const MovieCarousel = ({ heading, fetchUrl, movieList }) => {

    const [carouselMovies, setCarouselMovies] = useState();
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const movies = async () => {
            setLoading(true);
            const data = await fetchData(fetchUrl);
            if (data) {
                setLoading(false);
                setCarouselMovies(data.results);
            }
            else {
                setLoading(false);
                dispatch(uiActions.showNotification({
                    state: 'error',
                    title: 'Fetching Failed',
                    message: 'Fetching carousel movies failed!'
                }));
            }
        };
        movies();

    }, [fetchUrl]);

    const paginationRef = useRef(null);

    return (
        <div className={`my-5`}>
            <h2
                className={classes.carouselHeading}>
                {!loading &&
                    <>
                        <Link to={`browse/${heading.toLowerCase().split(' ').join('-')}?list=${movieList}`}>
                            {heading}
                            <span className={classes.carouselLinkHelper}>
                                Explore All <ArrowRight />
                            </span>
                        </Link>
                    </>
                }
            </h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={15}
                slidesPerView={'auto'}
                navigation
                pagination={{ clickable: false, el: paginationRef.current }}
                onSwiper={(swiper) => { }}
                onBeforeInit={(swiper) => {
                    swiper.params.pagination.el = paginationRef.current;
                }}
            >
                {!loading &&
                    carouselMovies?.map(movie => {
                        return (
                            <SwiperSlide key={movie.id} className={`rounded-3 card ${classes.card}`}>
                                <MovieCard movie={movie} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className='carouselPagination text-end' ref={paginationRef} />

        </div>
    )
};

export default MovieCarousel;