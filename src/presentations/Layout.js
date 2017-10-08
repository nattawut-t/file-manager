import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  Switch,
  Route,
  BrowserRoutexr as Router,
  Link,
} from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './Home'
import File from './File'
import Modal from './Modal'

const Layout = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/file" component={File} />
      <Route path="/modal" component={Modal} />
    </Switch>
  </div>

export default withRouter(Layout)