import Container from "./Container";
import tmdbLogo from '../../Assets/themoviedb-logo.svg';
import githubLogo from '../../Assets/GitHub-Mark-Light-64px.png';
import classes from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={`${classes.footer}`}>
            <Container>
                <div className={`row align-items-center text-sm-center py-5 ${classes.footerItems}`}>
                    <div className="col-12 col-lg-3">
                        <a href="https://www.themoviedb.org/" target='_blank' rel="noreferrer" className="d-flex justify-content-center justify-content-lg-start align-items-center">
                            Made in love with <img src={tmdbLogo} alt="The Movie DB Logo" className="ps-2" />
                        </a>
                    </div>
                    <div className="col-12 col-lg-3">
                        <a href="https://github.com/jismonthomas/movies-now" target='_blank' rel="noreferrer" className="d-flex justify-content-center justify-content-lg-start align-items-center">
                            <img src={githubLogo} alt="The Movie DB Logo" className="ps-2" />
                        </a>
                    </div>
                </div>
                <div className={`${classes.credit} row py-3`}>
                    <span><a href='https://jismonthomas.com/' target='_blank' rel="noreferrer">PROJECT BY JISMON THOMAS</a></span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;