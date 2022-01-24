import classes from "./Card.module.css"

function Card(props) {

    return (
        <div className={classes.Fcard}>
            <div className={classes.card}>
                <img className={classes.img} src={props.data.img} alt={props.data.alt}/>
                <p className={classes.heading}>{props.data.heading}</p>
                <p className={classes.content}>{props.data.content}</p>
            </div>
            <div className={classes.effect}>

            </div>
        </div>
        
    );
}

export default Card;