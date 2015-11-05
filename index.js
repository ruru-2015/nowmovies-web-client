import React from 'react';
import ReactDOM from 'react-dom';
import testData from './test/data'
import Layout from './components/layout'

ReactDOM.render(

  <Layout movies={testData} />,
  document.getElementById('root')
);




