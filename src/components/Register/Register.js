import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import { Button } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import MenuBar from '../MenuBar/MenuBar';

const Register = () => {
    const { logInWithGoogle, setIsLoading, setUser } = useFirebase();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignin = () => {
        logInWithGoogle()
            .then((result) => {
                history.push(location.state?.from || "/home");
                // console.log(location.state?.from,"google er te");
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <div>
            <div className="pb-5"><MenuBar></MenuBar></div>
            <div className="login-form py-5">
                <div>
                    <h2> Create Account</h2>
                    <form onSubmit="">
                        <input className="my-1" type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input className="my-1" type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <input className="my-1" type="password" name="" id="" placeholder="Re-enter Password" />
                        <br />
                        <Button>Submit</Button>
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <div>----------or-------------</div>
                    <Button
                        className="btn-danger "
                        onClick={handleGoogleSignin}
                    >Sign In with Google </Button>
                </div>
            </div></div>
    );
};

export default Register;