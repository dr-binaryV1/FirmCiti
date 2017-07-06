import React, { Component } from 'react';
import Construction from '../construction';
import { fetchHouses } from '../../actions';
import { connect } from 'react-redux';
import Title, { flushTitle } from 'react-title-component';

class House extends Component {
  componentDidMount(){
    <Title render="JusBuss | Houses"/>
    this.props.fetchHouses();
  }

  render(){
    return(
      <div className="Container animated fadeIn">
        <Construction />
      </div>
    );
  }
}

function mapStateToProps(state){
    return { houses: state.houses }
}

export default connect(mapStateToProps, { fetchHouses })(House);
