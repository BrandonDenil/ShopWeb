import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AdminLogin from './views/admin/login/login';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Web = React.lazy(() => import('./views/web/containers/TheLayout'));
const Admin = React.lazy(() => import('./views/admin/containers/TheLayout'));
const Categories = React.lazy(() => import('./views/web/shop/categories'));


const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/admin/login" exact name="login admin" render={props => <AdminLogin {...props} />} />
          <Route path="/admin" name="Administracion" render={props => <Admin {...props} />} />
          <Route path="/" name="Home" render={props => <Web {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
