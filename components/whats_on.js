import React from 'react'
import MovieTile from './movie_tile'

class WhatsOn extends React.Component {
  render(){
    return(
      <div className="whatsOn">
        <MovieTile {...this.props} />
      </div>
    )
  }
}

export default WhatsOn
