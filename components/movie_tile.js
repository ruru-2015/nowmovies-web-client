import React from 'react'
import Poster from './poster'
import MovieInfo from './movie_info'

class MovieTile extends React.Component{
  render(){
    return(
      <div className="movieTile">
        <h1>{this.props.movies[0].title}</h1>
        <Poster {...this.props} />
        <MovieInfo {...this.props} />
      </div>
    )
  }
}

export default MovieTile
