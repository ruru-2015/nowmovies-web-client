import React from 'react'

class MovieInfo extends React.Component{
  render(){
    const info = this.props.data
    return(
      <div className="movieInfo">
        <ul>
          <li>Title: {info.title}</li>
          <li>Year: {info.year}</li>
          <li>Runtime: {info.runtime}</li>
          <li>Genre: {info.genre}</li>
          <li>Actors: {info.actors}</li>
        </ul>
      </div>
    )
  }
}

export default MovieInfo
