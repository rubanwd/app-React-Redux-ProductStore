import React, { Component } from 'react';
import getData from './api/getData';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import HomePage from './components/HomePage';
import EditProducts from './components/EditProducts';
import SinglePage from './components/SinglePage';

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

const PrimaryLayout = () => (

  <div className="primary-layout">

    <header>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Product Store</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/edit">Edit Products</a>
              </li>
              <li>
                <a href="/single">Single</a>
              </li>
            </ul>
          </div>
        </nav>
    </header>

    <main className="container">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/edit" component={EditProducts} />
        <Route path="/single" component={SinglePage} />
        <Redirect to="/" />
      </Switch>
    </main>

  </div>
)

export default App;
