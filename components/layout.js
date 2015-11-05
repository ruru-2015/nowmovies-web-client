import React, {Component, PropTypes} from 'react';
import WhatsOn from './whats_on'
// import {connect} from 'react-redux';
// import {Content} from '../component/Content.js';
// import {Header} from '../component/Header.js';
// import {fetchArtist} from '../action/index.js';

class Layout extends React.Component{

  render() {
    const { movies } = this.props

    return (
      <div className='layout'>
        <WhatsOn {...this.props} />
      </div>
    );
  }
}

export default Layout

        // {movies.map(movie => {
        //   return <div>{movie.title} </div>
        // })}
