
import classes from "./Card.module.css";

import navigationIcon from './icons/navigationicon.svg'

function Card(props) {

    return (
        <div className={classes.card}>
            <div>
                <img src={props.data.imgURL} alt=""/>
            </div>
            <div 
            className={classes.data}>
                <div>
                    <h5>{props.data.location}</h5>
                    <h5>{props.data.cost}</h5>
                </div>
                <div>
                    <h5>
                        <img className={classes.navIcon} src={navigationIcon} alt="Navgation-Icon" />
                        {props.data.package}
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Card;