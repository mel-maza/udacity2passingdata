import React, { Component } from 'react';
import MovieCard from './MovieCard';

class ListMovies extends Component {
  render() {
  	const {users, movies, usersByMovie} = this.props;
    
    return (
      <ul>
      {Object.keys(movies).map( movieId => (
       		<MovieCard movieInfo={movies[movieId]} users={users} usersWhoLikeMovie={usersByMovie[movieId]} />))}
      </ul>
    )
  }
}

export default ListMovies