import React, { Component } from 'react'

import Content from './compontents/content'
import Random from './compontents/random'

import PropTypes from 'prop-types'
import history from './history'
import { HashRouter} from 'react-router-dom'
import { Link,Switch, Route} from 'react-router-dom'

import './App.css'

class App extends Component {
  constructor(props) {
      super(props);
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
    // console.log(this.props)
    // console.log(this.context)
  }
  render() {
    
    return [
      <HashRouter  history={history}>
        <div>
            <ul>
                <li><Link to='/'>歪</Link></li>
                <li><Link to='/random'>RANDOM</Link></li>
               
            </ul>
            <main>
                <Switch>
                    <Route exact path='/' component={Content}/>
                    <Route path='/random' component={Random}/>
                </Switch>
            </main>
        </div>
      </HashRouter>
    ];
  }
}


export default App;