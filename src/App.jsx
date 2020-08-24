import React, { lazy, Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const LoginLazyComponent = lazy(() => import('./components/Login/LoginFormComponent'));
  const HomeLazyComponent = lazy(() => import('./components/Home/HomeComponent'));
  const ErrorLazyComponent = lazy(() => import('./components/Error/ErrorComponent'));
  const RegisterLazyComponent = lazy(() => import('./components/Register/RegisterComponent'));
  return (
    <div>
      <Suspense fallback={<Spinner animation="border" variant="secondary" />}>
        <Switch>
          <Route exact path="/">
            <LoginLazyComponent />
          </Route>
          <Route path="/Home">
            <HomeLazyComponent />
          </Route>
          <Route path="/Register">
            <RegisterLazyComponent />
          </Route>
          <Route path="*">
            <ErrorLazyComponent />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
