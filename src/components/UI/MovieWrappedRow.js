
const MovieWrappedRow = (props) => {
    return (
        <div className='d-flex flex-wrap justify-content-between movieRow'>
            {props.children}
        </div>
    );
}

export default MovieWrappedRow;