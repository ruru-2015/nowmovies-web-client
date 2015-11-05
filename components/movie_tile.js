import React from 'react'
import Poster from './poster'

class MovieTile extends React.Component{
  render(){
    return(
      <div className="movieTile">
        <Poster {...this.props} />
      </div>
    )
  }
}

export default MovieTile
