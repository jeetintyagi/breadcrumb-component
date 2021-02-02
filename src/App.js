import React from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import Contact from './screens/contact';
import About from './screens/about';
import Blog from './screens/blog';
import Breadcrumb from './component/Breadcrumb';
import './App.css';

const BreadcrumbItems = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' }
];

const App = () => (
  <div className='App'>
    <Router>
      <Breadcrumb separator=' '>
        {BreadcrumbItems.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
      </Switch>
    </Router>
  </div>
);

export default App;
