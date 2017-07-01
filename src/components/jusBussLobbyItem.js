import React,{ Component } from 'react';

class LobbyItem extends Component {
    readMoreClicked(){
        console.log('clicked');
    }

    render(){
        return(
            <div className="lobby-item">
                <h3>{this.props.Name}</h3>
                <div className="display-picture">
                    <img className="LobbyImage" src={this.props.img} alt={this.props.alt} />
                </div>
                <div className="item-info">
                    <p>{this.props.Desc}</p>

                    <button className="readMore" onClick={this.readMoreClicked}>View Category</button>
                </div>
            </div>
        );
    }
};

export default LobbyItem;