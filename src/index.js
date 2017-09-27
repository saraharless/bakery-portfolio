import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home.js'
import App from './components/App.js'
import Portfolio from './components/Portfolio.js'
import About from './components/About';
import BaseLayout from './components/BaseLayout.js';
import Contact from './components/Contact.js';
import References from './components/References.js';

ReactDOM.render(
<BrowserRouter>
<BaseLayout>
  <Switch>
    <Route path='/home' component={Home}/>
    <Route path='/portfolio' component={Portfolio}/>
    <Route path='/about' component={About}/>
    <Route exact path='/' component={App}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/references' component={References}/>
  </Switch>
</BaseLayout>
</BrowserRouter>

,document.getElementById('root')
);
registerServiceWorker();
