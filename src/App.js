import React from 'react'
import './App.css'
import SearchBar from './SearchBar.js'
import Stats from './Stats.js'
import ButtonAppBar from './Bar.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return ( 
      <Router>
        <div className="App">
          <ButtonAppBar />
            <SearchBar/>
          <Switch>
            <Route path="/:id" component={Stats}/>
            <Route path="/" component={Stats}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;