
const SpinningContainer = () => {
    return (
        <div className="d-flex justify-content-center loadingContainer">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default SpinningContainer;