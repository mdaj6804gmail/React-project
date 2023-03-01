import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import Textinput from "../Textinput";
import classes from "../../styles/Login.module.css"
import LoginImg from '../../assets/images/login.svg'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={LoginImg} />
                <Form className={classes.login}>
                    <Textinput type='email' placeholder='Enter Email' icon="alternate_email" />
                    <Textinput type="password" placeholder='Enter Password' icon="lock" />
                    <Button><span> Submit now</span></Button>
                    <div className="info">Already have an account? <Link to="/signup">Signup</Link> instead.</div>
                </Form>
            </div>

        </>

    );
}