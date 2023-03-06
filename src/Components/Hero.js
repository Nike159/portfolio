import "./HeroStyles.css";
import {Link} from "react-router-dom";





function Hero (props){
    return(
        <>
       <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className="welcome">
                    <Link className="welcomebtn" to="/">
                        <button>Resume</button>
                    </Link>
                    <Link className="welcomebtn" to="/Projects">
                        <button>Projects &#x2192;</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;