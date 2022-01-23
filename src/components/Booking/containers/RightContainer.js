import MainCard from "./right card/MainCard";
import SideCard from "./right card/SideCard";

import classes from "./RightContainer.module.css";

function RightConatiner() {

    return (
        <div className={classes.rightSection}>
                <MainCard />
                <SideCard />
        </div>
    );
}

export default RightConatiner;