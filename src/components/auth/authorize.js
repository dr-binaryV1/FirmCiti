import React from 'react';
import LogIn from './login';
import SignUp from './signup';

const Auth = (props) => {
    return(
        <div className="AuthContainer">
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