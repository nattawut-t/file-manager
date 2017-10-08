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
import FileInput from './FileInput'
import Test from './Test'

class Layout extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/file" component={FileInput} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Layout)