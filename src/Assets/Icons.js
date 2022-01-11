import classes from './Icons.module.css';

export const Heart = (props) => {
    return (
        <svg className={classes.heart} width={props.size} height={props.size} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    )
};

export const HeartFill = (props) => {
    return (
        <svg className={`${classes.heart} ${classes.heartFill}`} width={props.size} height={props.size} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    )
};

export const Star = (props) => {
    return (
        <svg className={classes.star} width={props.size} height={props.size} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    )
}

export const X = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={classes.closeIcon}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    )
}

export const Play = () => {
    return (
        <svg className={classes.play} width="22" height="22" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
    )
}

export const ArrowRight = () => {
    return (
        <svg className={classes.arrowRight} width="24" height="24" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    )
}

