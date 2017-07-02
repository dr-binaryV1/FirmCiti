import React, { Component } from 'react';
import Construction from './construction';
import Title, { flushTitle } from 'react-title-component';


class Restaurant extends Component{
    componentDidMount(){
      <Title render="JusBuss | Restaurants"/>
    }

    render(){
        return(
            <div>
                <Construction />
            </div>
        );
    }
}

export default Restaurant;
