import React from 'react'
import MovieTile from './movie_tile'

class WhatsOn extends React.Component {
  render(){
    console.log("whats on", this.props)
    const movies = this.props.data
    return(
      <div className="whatsOn">
        {movies.map((element) => {
          return (<MovieTile movie={element}  />)
        })}
      </div>
    )
  }
}

export default WhatsOn
