import classes from "../styles/Accound.module.css";
import { Link } from 'react-router-dom';

export default function Accound() {
    return (
        <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <Link to={"/signup"} title="Signup">Signup</Link>
            <Link to={"/login"}>Login</Link>
            {/* <!-- <span class="material-icons-outlined" title="Logout"> logout </span> --> */}
        </div>
    );
}