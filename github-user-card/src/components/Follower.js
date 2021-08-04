import React from 'react';

class Follower extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    let { user } = this.props;

    return(<div className="flex justify-between items-center w-5/6 mx-auto">
      <img className="rounded-full w-1/6" src={user ? user.avatarUrl : ""}></img>
      <div className="text-lg">{user ? user.username : ""}</div>
    </div>);
  }
}

export default Follower;