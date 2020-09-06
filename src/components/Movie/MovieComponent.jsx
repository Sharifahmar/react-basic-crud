import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Spinner } from 'react-bootstrap';

const MovieComponent = () => {
    const GridLazyComponent = lazy(() => import('../Grid/GridComponent'));
    const AddMovieLazyComponent = lazy(() => import('./AddMovieComponent'));
    let { path } = useRouteMatch();
    return (
        <>
            <Suspense fallback={<Spinner animation="border" variant="secondary" />}>
                <Switch>
                    <Route exact path={path}>
                        <ErrorBoundary>
                            <GridLazyComponent />
                        </ErrorBoundary>
                    </Route>
                    <Route path={`${path}/AddMovie`}>
                        <ErrorBoundary>
                            <AddMovieLazyComponent />
                        </ErrorBoundary>
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
}

export default MovieComponent
