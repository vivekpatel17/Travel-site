
import classes from  "./NavBar.module.css";

import logo from "../images/Logo.svg";
import dropdownIcon from "../images/dropdownicon.svg";

function NavBar() {

    const nav = ["Destinations", "Hotels", "Flights", "Bookings", "Login"];

    function handle_dropdown_click(){
        return(
            nav.map((data) => <p>{data}</p>)
        );
    }

    return (
        <div className={classes.navbar}>
            <img src={logo} alt="Logo" />
            <div className={classes.menu}>
                <div className={classes.menuitem}>
                    {nav.map((data) => <p>{data}</p>)}
                </div>
                <div className={classes.signup}>
                    <button>Sign up</button>
                </div>
                <div 
                    className={classes.menudrop}
                    onClick={handle_dropdown_click}
                >
                    <p>EN<img src={dropdownIcon} alt="" /></p>
                </div>
            </div>
            
        </div>
    );
}

export default NavBar;