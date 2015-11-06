import React from 'react'
import Poster from './poster'
import MovieInfo from './movie_info'

class MovieTile extends React.Component{
  render(){
    return(
      <div className="movieTile">
        <h1> {this.props.movie.title} </h1>
        <Poster poster={this.props.movie.poster} />
        <MovieInfo data={this.props.movie} />
      </div>
    )
  }
}

export default MovieTile
