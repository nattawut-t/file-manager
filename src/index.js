import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Layout from './presentations/Layout'

import 'bootstrap/dist/css/bootstrap.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const Root = () =>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>

render(<Root />, document.querySelector('react'))
