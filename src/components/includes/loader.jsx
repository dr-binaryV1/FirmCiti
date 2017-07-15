import React from 'react';

export const Loader = () =>{
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