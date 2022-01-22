import Card from "./Card";

import satelite from "./images/satelite.svg";
import plane from "./images/plane.svg";
import mice from "./images/mice.svg";
import setting from "./images/setting.svg";

import classes from "./Service.module.css";

function Service() {
    const serviceData = [
        {
            img: satelite,
            heading: "Calculated Weather",
            content: "Built Wicket longer admire do barton vanity itself do in it."
        },
        {
            img: plane,
            heading: "Best Flights",
            content: "Engrossed listening. Park gate sell they west hard for the."
        },
        {
            img: mice,
            heading: "Local Events",
            content: "Barton vanity itself do in it. Preferd to men it engrossed listening. "
        },
        {
            img: setting,
            heading: "Customization",
            content: "We deliver outsourced aviation services for military customers"
        }
    ]

    return(
        <div>
            <div className={classes.headingSection}>
                <p className={classes.top}>CATEGORY</p>
                <h1>We Offer Best Services</h1>
            </div>
            
            <div className={classes.cardSection}>
                {serviceData.map((data) => <Card 
                data = {data}
                />)}
            </div>

            
        </div>
    );
}

export default Service;