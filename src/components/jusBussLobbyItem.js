import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class LobbyItem extends Component {
    render(){
        return(
            <div className="lobby-item">
                <h3>{this.props.Name}</h3>
                <div className="display-picture">
                    <img className="LobbyImage" src={this.props.img} alt={this.props.alt} />
                </div>
                <div className="item-info">
                    <p>{this.props.Desc}</p>

                    <Link className="readMore" to="/restaurants">View Category</Link>
                </div>
            </div>
        );
    }
};

export default LobbyItem;