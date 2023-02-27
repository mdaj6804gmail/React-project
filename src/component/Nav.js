import Logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Accound from "./Accound";

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={Logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <Accound />
        </nav>
    );
}