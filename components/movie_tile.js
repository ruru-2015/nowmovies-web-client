import React from 'react'
import Poster from './poster'
import MovieInfo from './movie_info'

class MovieTile extends React.Component{
  render(){
    console.log("movie tile: ", this.props)
    return(
      <div className="movieTile">
        <h1> {this.props.title} </h1>
        <Poster poster={this.props.movie.poster} />
      </div>
    )
  }
}

export default MovieTile
