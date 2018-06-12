import React, { Component } from 'react'

import HomePage from './compontents/homepage'
import Contact from './compontents/contact'
import IndexPage from './compontents/indexpage'

import PropTypes from 'prop-types'
import { HashRouter} from 'react-router-dom'
import { Link,Switch, Route} from 'react-router-dom'

import './App.css'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isHidelogin:"show"
      }
  }
  static contextTypes = {
      store: PropTypes.object,
      router: PropTypes.shape({
        history: PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
        staticContext: PropTypes.object
      })
  }
  componentDidMount () {
    var _this = this;
    setTimeout(function(){
        _this.setState({
            isHidelogin:"hide"
        })
    },8000)
  }
  render() {
    return [
      <HashRouter >
        <div className="wai">
          <div className={this.state.isHidelogin + " wai-index-logo"}></div>
          <ul className="nav clearfix"> 
              <li  className="home" ><Link to='/'>LENNONOVER</Link></li>
              <li  className="index" ><Link to='/index'>index</Link></li>
              <li  className="contact" ><Link to='/contact'>contact</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' exact component={HomePage}/>
            <Route exact path='/index' component={IndexPage}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </div>
      </HashRouter>
    ];
  }
}


export default App;