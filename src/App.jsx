import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const App = () => {
  const LoginLazyComponent = lazy(() => import('./components/Login/LoginFormComponent'));
  const HomeLazyComponent = lazy(() => import('./components/Home/HomeComponent'));
  return (
    <div>
      <Suspense fallback={<Spinner animation="border" />}>
        <Switch>
          <Route exact path="/">
            <LoginLazyComponent />
          </Route>
          <Route path="/Home">
            <HomeLazyComponent />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
