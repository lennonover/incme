import React, { Component } from 'react'

import Index from './compontents/index'
import Contact from './compontents/contact'
import ListImg from './compontents/listimg'

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
              <li  className="index" ><Link to='/'>LENNONOVER</Link></li>
              <li  className="list" ><Link to='/list'>index</Link></li>
              <li  className="contact" ><Link to='/contact'>contact</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={Index}/>
            <Route exact path='/list' component={ListImg}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </div>
      </HashRouter>
    ];
  }
}


export default App;