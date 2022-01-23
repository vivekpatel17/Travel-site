
import classes from "./NavCol.module.css";

function NavCol() {

    const NavData = [
        {
            title: "Company",
            parts: ["About", "Careers", "Mobile"]
        },
        {
            title: "Contact",
            parts: ["Help/FAQ", "Press", "Affilates"]
        },
        {
            title: "More",
            parts: ["Airlinefees", "Airline", "Low fare tips"]
        }
    ]

    return(
        <div className={classes.navCol}>
            
            {
                NavData.map((data) => (
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.parts[0]}</p>
                    <p>{data.parts[1]}</p>
                    <p>{data.parts[2]}</p>
                </div>
                ))
            }

        </div>
    );
}

export default NavCol;