import React from 'react'
import ReactDOM from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import { HashRouter} from 'react-router-dom'
import history from './history'
import './index.css'
import App from './App'
import Content from './compontents/content';
import One from './compontents/one'
import Two from './compontents/two'
import Three from './compontents/three'
import { Link,Switch, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store)
ReactDOM.render(
    <Provider store={store}>
        <HashRouter  history={history}>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
            <main>
                <Switch>
                    <Route exact path='/' component={Content}/>
                    <Route path='/roster' component={Two}/>
                    <Route path='/schedule' component={Three}/>
                </Switch>
            </main>
        </div>
        </HashRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
