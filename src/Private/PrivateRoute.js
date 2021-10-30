
import React, { useContext, createContext, useState } from "react"; import { Spinner } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import useAuth from "../Hooks/useAuth";



const PrivateRoute = ({ children, ...rest }) => {
    let history = useHistory();
    let location = useLocation();
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="text-center">
                <Spinner animation="border" variant="danger" />
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};


export default PrivateRoute;