import classes from "../../styles/Signup.module.css"
import Button from "../Button"
import Checkbox from "../Checkbox"
import Form from "../Form"
import Illustration from "../Illustration"
import Textinput from "../Textinput"
import signupImg from "../../assets/images/signup.svg"
export default function Signup() {

    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={signupImg}/>
                <Form className={`${classes.signup}`} >
                    <Textinput type="text" placeholder='Enter Name' icon="person" />
                    <Textinput type="email" placeholder='Enter Email' icon="alternate_email" />
                    <Textinput type="password" placeholder='Enter Password' icon="lock" />
                    <Textinput type="password" placeholder='Confirm password' icon="lock_clock" />
                    <Checkbox text="I agree to the Terms &amp; Conditions" />
                    <Button><span> Submit now</span></Button>
                    <div className="info">Already have an account? <a href="login.html">Login</a> instead.</div>

                </Form>
            </div>

        </>
    )
}