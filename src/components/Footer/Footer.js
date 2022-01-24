import CompanyDesc from "./sections/CompantDesc";
import NavCol from "./sections/NavCol";
import Outbound from "./sections/Outbound";

import classes from "./Footer.module.css";

function Footer() {

    return (
        <div className={classes.footer}>
            <CompanyDesc />
            <div className={classes.contact}>
                <NavCol />
                <Outbound />
            </div>
            
        </div>
    );
}

export default Footer;