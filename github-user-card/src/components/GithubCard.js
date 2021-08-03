import React from 'react';

class GithubCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (<div>
      <div>Avatar</div>
      <div>Username</div>
      <div>Followers</div>
      <div>Following</div>
    </div>);
  }
}

export default GithubCard;