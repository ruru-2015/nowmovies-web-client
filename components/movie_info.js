import React from 'react'

class MovieInfo extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div className="movieInfo">
        <ul>
          <li>{this.props.movies[0].rated}</li>
          <li>{this.props.movies[0].year}</li>
          <li>{this.props.movies[0].runtime}</li>
          <li>{this.props.movies[0].genres}</li>
          <li>{this.props.movies[0].actors}</li>
        </ul>
      </div>
    )
  }
}

export default MovieInfo
