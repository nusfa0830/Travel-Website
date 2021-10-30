import React from 'react';
import "./LogIn.css";
import { useHistory, useLocation } from "react-router";
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import useAuth from '../../Hooks/useAuth';
import MenuBar from '../MenuBar/MenuBar';

const LogIn = () => {

    const { logInWithGoogle, user, setUser, gitHubSignIn, handleLogout, setIsLoading } =
        useFirebase();
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

    const handleGitSignin = () => {
        gitHubSignIn()
            .then((result) => {
                history.push(location.state?.from || "/home");
                // console.log(location.state?.from, "facebook er te");
                setUser(result.user);
                // console.log("facebbok user", result.user)
            })
            .finally(() => setIsLoading(false));
    };






    return (



        <div>
            <div className="pb-5"><MenuBar></MenuBar></div>
            <div className="login-form py-5">
                <div>
                    <h2>Login</h2>
                    <div className="pb-2">     <form>
                        <input className="my-2" type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input type="password" name="" id="" placeholder="Password" />
                        <br />
                    </form>
                    </div>

                    <Button> LogIn </Button>
                    <p>New to website? <Link to="/register">Create Account</Link></p>
                    <div>-------or----------</div>
                    <div className=" " >
                        <Button
                            className="btn-danger "
                            onClick={handleGoogleSignin}
                        >Google Sign In</Button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;