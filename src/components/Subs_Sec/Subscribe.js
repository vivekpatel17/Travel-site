
import classes from "./Subscribe.module.css"

import SendIcon from "./icons/sendIcon.svg";
import leftCircle from "./icons/leftCircle.svg";
import rightCircle from "./icons/rightCircle.svg";
// import EmailIcon from "./icons/emailIcon.svg";

function Subscribe() {


    return(
        <div className={classes.subscribe}>
            <div className={classes.leftCircle}>
                <img src={leftCircle} alt="" />
            </div>
            <img src={SendIcon} alt="" />
            <div>
                <h1>Subscribe to get information, latest news and other interesting offers about Cobham</h1>
            </div>
            <div className={classes.email}>
                <input typeof="email" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
            <div className={classes.rightCircle}>
                <img src={rightCircle} alt="" />
            </div>
        </div>
    );
}

export default Subscribe;