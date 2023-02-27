import classes from "../styles/Accound.module.css";

export default function Accound() {
    return (
        <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="signup.html">Signup</a>
            {/* <!-- <span class="material-icons-outlined" title="Logout"> logout </span> --> */}
        </div>
    );
}