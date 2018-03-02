import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
//import PageShell from '../../hoc/PageShell'
import FadeWrapper from '../../hoc/FadeWrapper'
import OtherPage from '../other_page'

import { TransitionGroup } from 'react-transition-group'



const App = () => (
  <TransitionGroup className='todo-list'>
  <div>
    <header>
      <Link to="/">Go to Home</Link>:::
      <Link to="/about-us">Go to About</Link>:::
      <Link to="/:MyIdIsThis">OtherPage</Link>
    </header>

    <main>
      <Route exact path="/" component={FadeWrapper(Home)} />
      <Route exact path="/about-us" component={FadeWrapper(About)} />
      <Route exact path="/:contentId" component={FadeWrapper(OtherPage)} />
    </main>
  </div>
  </TransitionGroup>


)

export default App
