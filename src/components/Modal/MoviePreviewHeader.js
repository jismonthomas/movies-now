import { requests } from '../../constants/constants';
import { Play } from '../../Assets/Icons';
import classes from './MoviePreviewHeader.module.css';
import PlaceholderText from '../UI/PlaceholderText';

const MoviePreviewHeader = (props) => {

    const { title, genreList, backdrop, trailerLink } = props.movie;
    const loading = props.loading ? props.loading : false;
    const backdropPath = `${requests.movieOriginalImageBaseUrl}${backdrop}`;

    return (
        <div className={`position-relative d-flex align-items-end align-items-sm-center ${classes.moviePreviewHeader} ${backdrop || classes.noBackdrop}`}>
            <div className={`${props.classes} ${classes.moviePreviewHeaderInfo}`}>

                <h1 className="modal-title col-12 fw-bold mb-2" id="movieModalLabel">
                    {loading && <PlaceholderText />}
                    {!loading && title}
                </h1>

                <div className={`d-flex flex-wrap mb-4 ${classes.genreList}`}>
                    {loading && <><PlaceholderText /> <PlaceholderText /></>}
                    {!loading && genreList?.map(genre => <span key={genre.id} className='position-relative'>{genre.name}</span>)}
                </div>

                <div className='d-flex'>
                    <a className={`rounded shadow-sm ${classes.movieTrailer} ${!trailerLink ? classes.movieTrailerDisabled : ''}`}
                        href={`${trailerLink ? 'https://www.youtube.com/watch?v=' + trailerLink : ''}`}
                        target='_blank'
                        rel="noreferrer"
                    >
                        {loading && <PlaceholderText />}
                        {!loading && trailerLink ? <span>Youtube Trailer<Play /></span> : 'Trailer Unavailable'}
                    </a>

                    {props.children}

                </div>
            </div>

            <div className={`position-absolute top-0 bottom-0 start-0 w-100 h-100 overflow-hidden ${classes.moviePreviewHeaderPoster}`}>
                {!loading && backdrop && <img src={backdropPath} alt={title} />}

            </div>



        </div >
    );

};

export default MoviePreviewHeader;
