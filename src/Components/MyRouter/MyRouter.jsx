import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../../Pages/Home/Home';

const MyRouter = () => {
    return (
        <Switch>
            <Route exact path="/"> <Home/> </Route>
            
        </Switch>
    );
};

export default MyRouter;