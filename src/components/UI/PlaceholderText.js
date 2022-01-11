
const PlaceholderText = ({ size = 12 }) => {
    return (
        <p className="placeholder-glow d-block my-0 me-1">
            <span className={`placeholder col-${size}`}></span>
        </p >

    )
}

export default PlaceholderText