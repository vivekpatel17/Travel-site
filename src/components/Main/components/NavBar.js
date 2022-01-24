
import classes from  "./NavBar.module.css";

import logo from "../images/Logo.svg";
import dropdownIcon from "../images/dropdownicon.svg";
import HamburgerIcon from "../images/hamburger-menu.svg";

function NavBar() {

    const nav = ["Destinations", "Hotels", "Flights", "Bookings", "Login"];

    return (
        <div className={classes.navbar}>
            <img src={logo} alt="Logo" />
            <div className={classes.menu}>
                <div className={classes.menuitem}>
                    {nav.map((data) => <p>{data}</p>)}
                    <button>
                        <img src={HamburgerIcon} alt="" />
                    </button>
                </div>
                <div className={classes.signup}>
                    <button>Sign up</button>
                </div>
                <div className={classes.menudrop}>
                    <p>EN<img src={dropdownIcon} alt="" /></p>
                </div>
            </div>
            
        </div>
    );
}

export default NavBar;