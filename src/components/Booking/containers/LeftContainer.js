
import classes from "./LeftContainer.module.css";

import destination from "../images/destination.svg";
import payment from "../images/payment.svg";
import travel from '../images/travel.svg';

function LeftConatainer() {

    const steps = [
        {
            logo: destination,
            stepTitle: "Choose Destination",
            stepDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
        },
        {
            logo: payment,
            stepTitle: "Make Payments",
            stepDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
        },
        {
            logo: travel,
            stepTitle: "Reach Airport on Selected Date",
            stepDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
        }
    ]

    return(
        <div className={classes.leftSection}>
                <div>
                    <h5 className={classes.subheading}>Easy and Fast</h5>
                    <h1 className={classes.heading}>Book Your Next Trip In 3 Easy Steps</h1>
                </div>
                <div className={classes.steps}>
                    {
                        steps.map((data) => (
                            <>
                                <div>
                                    <img src={data.logo} alt=""/>
                                    <div>
                                        <h5 className={classes.stepTitle}>{data.stepTitle}</h5>
                                        <h5 className={classes.stepDes}>{data.stepDes}</h5>
                                    </div>
                                </div>
                            </> 
                        ))
                    }
                </div>
        </div>
    );
}

export default LeftConatainer;