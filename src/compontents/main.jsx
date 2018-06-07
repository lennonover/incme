import React from 'react'
import One from './one'
import Two from './two'
import Three from './three'
import { Switch, Route} from 'react-router-dom'
class Main extends React.Component {
    constructor(props) {
        super(props);
    }
   
    componentDidMount() {
        /** 做点什么*/
        window.addEventListener('hashchange', () => {
            alert()
        })
    }
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={One}/>
                    <Route path='/roster' component={Two}/>
                    <Route path='/schedule' component={Three}/>
                </Switch>
            </main>
        )
    }
}
export default Main;