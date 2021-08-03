import React from 'react';
import Follower from './Follower';

class GithubCard extends React.Component {
  constructor() {
    super()
    this.state = {
      avatarUrl: "",
      username: "",
      followerCnt: 0,
      followingCnt: 0,
      followersUrl: "",
      followers: [],
    }
  }
  
  componentDidMount() {
    fetch("https://api.github.com/users/ibraheemdev")
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
        followersUrl: data.followers_url
      }, () => {
        fetch(this.state.followersUrl)
        .then(resp => {
          if (!resp.ok) {
            throw new Error('Network error II!');
          }
          return resp.json();
        })
        .then(data => {
          this.setState({
            followers: data.map(user => {
              return {avatarUrl: user.avatar_url, username: user.login, id: user.id}
            })
          });
        })
        .catch(err => {
          console.log("Oh no! Something went wrong when fetching followers: ", err);
        })
      });
    })
    .catch(err => {
      console.log("Oh no! Something went wrong when fetching the user: ", err);
    })
  }

  render() {
    return (<div>
      <div><img src={this.state.avatarUrl}></img></div>
      <div>{this.state.username}</div>
      <div>Followers: {this.state.followerCnt}</div>
      <div>Following: {this.state.followingCnt}</div>
      
      {this.state.followers.map(user => <Follower key={user.id} user={user} />)} 
    </div>);
  }
}

export default GithubCard;