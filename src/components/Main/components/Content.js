
import classes from "./Content.module.css";

import Playbtn from "../images/playbtn.svg"

function Content() {


    return(
        <div className={classes.contentSec}>
            <div className={classes.content}>
                <h5>BEST DESTINATIONS AROUND THE WORLD</h5>
                <h1>Travel,enjoy and live a new and full life</h1>
                <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div>
                    <button className={classes.learnbtn}>
                        <p>Find out more</p>
                    </button>
                    <button className={classes.playbtn}>
                        <img src={Playbtn} alt=""/>
                    </button>
                    <p>Play Demo</p>
                </div>
            </div>
        </div>
        
    );
}

export default Content;