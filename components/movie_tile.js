import React from 'react'
import Poster from './poster'
import MovieInfo from './movie_info'

export class MovieTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isClicked: false }
  }

  render() {

    console.log('this', this)

    return(
      <div onClick={this.clickHandler.bind(this)} className="movieTile">
        {this.state.isClicked ? <div>"Clicked"</div> : null}
        <h1> {this.props.movie.Addtitle} </h1>
        <Poster poster={this.props.movie.poster} />
        <MovieInfo data={this.props.movie} />
      </div>
    )
  }

  clickHandler() {
    console.log('clicked')
    this.setState({isClicked: !this.state.isClicked })
  }

}

export default MovieTile
