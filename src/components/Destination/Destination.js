import Card from "./Card";

import dst1 from "./images/dst1.png";
import dst2 from "./images/dst2.png";
import dst3 from "./images/dst3.png";

import classes from "./Destination.module.css";

function Destination() {
    const destinationData = [
        {
            imgURL: dst1,
            location: "Rome, Italy",
            cost: "$5,42k",
            package: "10 Days Trip"
        },
        {
            imgURL: dst2,
            location: "London, UK",
            cost: "$4.2k",
            package: "12 Days Trip"
        },
        {
            imgURL: dst3,
            location: "Full Europe",
            cost: "$15k",
            package: "28 Days Trip"
        }
    ]

    return (
        <div className={classes.destination}>
            <div className={classes.headerSection}>
                <h5 className={classes.subheading}>Top Selling</h5>
                <h1 className={classes.heading}>Top Destination</h1>
            </div>

            <div className={classes.cardSection}>
                {destinationData.map((data) => <Card 
                    data = {data}
                />)}
            </div>
        </div>
    );
}

export default Destination;