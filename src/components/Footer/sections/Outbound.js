
import classes from "./Outbound.module.css";

import fb from "../icons/facebook.svg";
import insta from "../icons/insta.svg";
import twitter from "../icons/twitter.svg";
import playstore from "../icons/playstore.svg";
import apple from "../icons/apple.svg";


function Outbound() {

    return(
        <div className={classes.outboundSec}>
            <div className={classes.icons}>
                <img src={fb} alt="fb icon" />
                <img src={insta} alt="instagram icon" />
                <img src={twitter} alt="twitter icon" />
            </div>
            <div className={classes.appinfo}>
                <h1>Discover our app</h1>
                <div className={classes.app}>
                    <button>
                        <img src={playstore}  alt=""/>
                        Android
                    </button>
                    <button>
                        <img src={apple} alt=""/>
                          Mac OS
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Outbound;