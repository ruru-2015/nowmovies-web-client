import React from 'react'

class MovieInfo extends React.Component{
  render(){
    return(
      <div className="movieInfo">
        <ul>
          <li>Rating: {this.props.movies[0].rated}</li>
          <li>Year: {this.props.movies[0].year}</li>
          <li>Runtime: {this.props.movies[0].runtime}</li>
          <li>Genre: {this.props.movies[0].genres}</li>
          <li>Actors: {this.props.movies[0].actors}</li>
        </ul>
      </div>
    )
  }
}

export default MovieInfo
