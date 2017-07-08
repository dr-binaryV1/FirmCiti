import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title, { flushTitle } from 'react-title-component';

import { fetchHouses } from '../../actions';
import HouseItem from './houseItem';
import SideBar from '../sidebar/sidebar';
import { Loader } from '../includes/loader';

class House extends Component {
  componentDidMount(){
    <Title render="JusBuss | Houses"/>
    this.props.fetchHouses();
  }

  renderUniversities(){
      var isEmpty = _.isEmpty(this.props.houses);
        if(isEmpty){
            <Loader />
        } else {
            return _.map(this.props.houses, house => {
                  return (
                      <HouseItem
                          key={ house._id }
                          id={ house._id }
                          Img= "src/static/images/rentHouse.jpg"
                          name={ `${house.first_name} ${house.last_name}` }
                          gender={ house.tenant_gender }
                          price={ house.price }
                          tel={ house.phone }
                          address={ house.address }
                          status={ house.status } />
                  );
            });
        }
  }

  render(){
    return(
      <div >
        <div className="Container animated fadeIn houseContainer">
          <h3>Rooms for Rent</h3>
          <hr className="line-brightPink-left" />

          { this.renderUniversities() }
        </div>
        <div className="recommend animated fadeIn">
            <SideBar loginStatus={ this.props.loginStatus }/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      houses: state.houses,
      loginStatus: state.loginStatus
    }
}

export default connect(mapStateToProps, { fetchHouses })(House);
