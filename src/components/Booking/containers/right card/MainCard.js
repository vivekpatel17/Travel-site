
import classes from "./MainCard.module.css";

import card from '../../images/card.jpg';
import leaficon from "../../images/leaficon.svg";
import mapicon from "../../images/mapicon.svg";
import sendicon from "../../images/sendicon.svg";
import buildingicon from "../../images/buildingicon.svg";
import hearticon from "../../images/hearticon.svg";

function MainCard(){

    return(
        <div className={classes.maincard}>
                <div >
                    <img src={card} alt="main-img"/>
                </div>
                <div className={classes.design}></div>
                <div className={classes.detailSec}>
                    <h5>Trip To Greece</h5>
                    <h5>14-29 June| <span> by Robin Joseph</span></h5>
                </div>
                <div className={classes.iconSec}>
                    <img src={leaficon} alt="leaf-icon"/>
                    <img src={mapicon} alt="map-icon"/>
                    <img src={sendicon} alt="send-icon"/>
                </div>
                <div className={classes.peopleSec}>
                    <div>
                        <img src={buildingicon} alt="building-icon"/>
                        <h5>24 people going</h5>
                    </div>
                    <img src={hearticon} alt="heart-icon"/>
                </div>
        </div>
    );
}

export default MainCard;