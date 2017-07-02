import React from 'react';
import LogIn from './login';
import SignUp from './signup';

const Auth = (props) => {
    return(
        <div className="AuthContainer">
            <h2>Get Authenticated or Join the JusBuss Environment!</h2>
            <hr />
            <div className="LogInAuthContainer">
                <LogIn />
            </div>

            <div className="SignUpAuthContainer">
                <SignUp />
            </div>
        </div>
    );
}

export default Auth;