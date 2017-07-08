import React from 'react';

import LogIn from './login';
import SignUp from './signup';

const Auth = (props) => {
    return(
        <div className="AuthContainer animated fadeIn">
            <h2>Get Authenticated or Join the FirmCiti Environment!</h2>
            <hr className="line-brightPink-left" />
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