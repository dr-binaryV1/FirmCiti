import React from 'react';

export const Loader = () =>{
    console.log('loader called');
    return (
        <div className="animated fadeIn loading-animation">
            <div className="lds-css ng-scope">
                <div className="lds-square">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}