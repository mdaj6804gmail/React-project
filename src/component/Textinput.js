import classes from "../styles/Textinput.module.css"


export default function Textinput({icon,...props}){
    return(
        <div className={classes.textInput}>
        <input {...props}/>
        <span className="material-icons-outlined">{icon}</span>
      </div>
    );
}