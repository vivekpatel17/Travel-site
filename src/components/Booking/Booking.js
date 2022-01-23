import LeftConatainer from "./containers/LeftContainer";
import RightConatiner from "./containers/RightContainer";

import classes from "./Booking.module.css";

function Booking() {

    return(
        <div className={classes.booking}>
            <LeftConatainer />
            <RightConatiner />
        </div>
    );
}

export default Booking;