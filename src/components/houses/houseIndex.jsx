import React, { Component } from 'react';
import Construction from '../construction';
import Title, { flushTitle } from 'react-title-component';

class House extends Component {
  componentDidMount(){
    <Title render="JusBuss | Houses"/>
  }

  render(){
    return(
      <div className="Container animated fadeIn">
        <Construction />
      </div>
    );
  }
}

export default House;
