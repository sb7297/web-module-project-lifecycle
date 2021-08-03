import React from 'react';

class Follower extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    let { user } = this.props;

    return(<div>
      <div><img src={user ? user.avatarUrl : ""}></img></div>
      <div>{user ? user.username : ""}</div>
    </div>);
  }
}

export default Follower;