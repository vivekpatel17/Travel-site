
import classes from "./Decor.module.css";

import DecorRight from "../images/decorRight.svg";
import Travel from "../images/traveller.png";
import DecorLeft from "../images/decorLeft.svg";


function Decor() {

    return (
        <div className={classes.Decor}>
            <div className={classes.decorRight}>
                <img src={DecorRight}  alt="" />
            </div>
            <div className={classes.travelImg}>
                <img src={Travel} alt="Travel-img" />
            </div>
            <div className={classes.decorLeft}>
                <img src={DecorLeft} alt="" />
            </div>

        </div>
    );
}

export default Decor;