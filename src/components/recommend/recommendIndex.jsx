import React, { Component } from 'react';

class Recommend extends Component{
    render(){
        return(
            <div>
                <h3>Recommended { this.props.type }s</h3>
                <hr className="line-brightPink-left" />
            </div>
        );
    }
}

export default Recommend;