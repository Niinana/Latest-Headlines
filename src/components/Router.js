import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';



const Router = (data) => {

    const AppPage = (props) => {
        return (
            <App {...props} {...data} />
        );
    } 


    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" render={AppPage} />
            <Route exact path="/source/:source" render={AppPage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    );
};

export default Router;