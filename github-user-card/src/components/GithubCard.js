import React from 'react';

class GithubCard extends React.Component {
  constructor() {
    super()
    this.state = {
      avatarUrl: "",
      username: "",
      followerCnt: 0,
      followingCnt: 0,
    }
  }
  
  componentDidMount() {
    fetch("https://api.github.com/users/sb7297")
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Network error!');
      }
      return resp.json();
    })
    .then(data => {
      this.setState({
        avatarUrl: data.avatar_url,
        username: data.login,
        followerCnt: data.followers,
        followingCnt: data.following,
      });
    })
    .catch(err => {
      console.log("Oh no! Something went wrong: ", err);
    });
  }

  render() {
    return (<div>
      <div><img src={this.state.avatarUrl}></img></div>
      <div>{this.state.username}</div>
      <div>Followers: {this.state.followerCnt}</div>
      <div>Following: {this.state.followingCnt}</div>
    </div>);
  }
}

export default GithubCard;