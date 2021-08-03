import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Gallery from '../Pages/Gallery'
import Location from '../Pages/Location'

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
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/location">
                    <Location />
                </Route>
            </Switch>
        </main>
    )
  } 
  
  export default Main