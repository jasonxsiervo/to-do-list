import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function Protectedroute({
    component: Component,
    isAuthenticated: isAuthenticated,
    logout: logout,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) {
                    return <Component logout={logout} />;
                } else {
                    return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                }
            }}
        />
    )
}

export default Protectedroute;
