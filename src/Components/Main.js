import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

function Main(props){
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </main>
    )
  } 
  
  export default Main