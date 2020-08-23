import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const App = () => {
  const LoginLazy = lazy(() => import('./components/Login/LoginFormComponent'));
  return (
    <div>
      <Suspense fallback={<Spinner animation="border" />}>
        <Switch>
          <Route exact path="/">
            <LoginLazy />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
