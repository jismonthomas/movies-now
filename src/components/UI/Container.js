
const Container = (props) => {
    return (
        <div className="page dark container-xxl">
            {props.children}
        </div>
    )
};

export default Container;