import classes from "../styles/MiniPlayer.module.css";
import Mini from "../assets/images/3.jpg"
export default function MiniPlayer() {
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
            <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
            <span className={`material-icons-outlined ${classes.close}`}> close </span>
            <img src={Mini} alt="Mini-img" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}