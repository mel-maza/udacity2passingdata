import React, { Component } from 'react';

class MovieCard extends Component {
	render(){
    	const {movieInfo, users, usersWhoLikeMovie} = this.props;
      
      	return (
        	<li key={movieInfo.id}>
				<h2>{movieInfo.name}</h2>
				{! usersWhoLikeMovie || usersWhoLikeMovie.length === 0 ? (
                 	<p>None of the current users liked this movie.</p>
                 ) : (
                 	<div>
                   		<p>Liked by:</p>
                   		{usersWhoLikeMovie.map( userId => (
                 			<li key={userId}>{users[userId].name}</li>))}
                   	</div>)}
          	</li>
        )
    }
}

export default MovieCard