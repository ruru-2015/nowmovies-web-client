import React, {Component, PropTypes} from 'react';
// import {connect} from 'react-redux';
// import {Content} from '../component/Content.js';
// import {Header} from '../component/Header.js';
// import {fetchArtist} from '../action/index.js';

class Layout extends React.Component{

  render() {
    const { movies } = this.props

    return (
      <div className='layout'>
        {movies.map(movie => {
          return <div>{movie.title} </div>
        })}
      </div>
    );
  }
}

export default Layout

