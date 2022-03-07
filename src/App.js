import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import MatchCard from './components/MatchCard'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={MatchCard} />
    <Route component={NotFound} />
  </Switch>
)

export default App
