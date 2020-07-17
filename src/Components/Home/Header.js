import React from 'react';

class Header extends React.Component {
  render() {
    var profilepic= "images/"+this.props.data.image;
    return (
      <div className="header-section">
        <div className="header-frame">
          <h1 className="headname" style={{color: this.props.appClr}}>{this.props.data.name}</h1>
          <h2 className="headjob">{this.props.data.job}</h2>
        </div>
        <div className="img-frame">
          <img id="propic" src={profilepic} alt="profile"/>
        </div>
      </div>
    );
  }
}

export default Header;
