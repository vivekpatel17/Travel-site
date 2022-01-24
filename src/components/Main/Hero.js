import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Decor from "./components/Decor";

import classes from "./Hero.module.css";

function Hero() {


    return (
        <div className={classes.hero}>
            <div>
                <Decor />
                <NavBar />
                <Content />
            </div>
            <div>
                
            </div>
            
        </div>
    );
}

export default Hero;