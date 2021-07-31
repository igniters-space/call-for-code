import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ForgetPasssword from './pages/ForgetPasssword'
import Landing from './pages/Landing'

import SignUp from './pages/SignUp'
import NavBar from './components/NavBar'
import Album from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/SignIn" component={Album} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/ForgetPasssword" component={ForgetPasssword} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
