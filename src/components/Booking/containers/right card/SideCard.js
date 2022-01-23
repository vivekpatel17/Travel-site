import classes from "./SideCard.module.css";

import sidecard from "../../images/image.png";

function SideCard() {

    return (
        <div className={classes.sideCard}>
            <div className={classes.topSec}>
                <img src={sidecard} alt=""/>
                <div className={classes.Des}>
                    <h5 className={classes.status}>Ongoing</h5>
                    <h5 className={classes.trip}>Trip to rome</h5>
                </div>
            </div>
            <div className={classes.downSec}>
                <h5>40% <span>completed</span></h5>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default SideCard;