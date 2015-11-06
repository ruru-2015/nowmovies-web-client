import React from 'react'

class Poster extends React.Component{
  render(){

    const poster = this.props.poster
    return(
      <div className="poster">
        <img src={poster} />
      </div>
    )
  }
}

export default Poster
