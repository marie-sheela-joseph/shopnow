import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import Products from './components/Products'
import Header from './components/Header';
import './css/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App


