import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from 'react-router-dom';
import Users from './admin/create_user.js';
import Show from './admin/show_user.js'

function Example() {
    return (
        <Router className="Example_container">
            <Switch>
                <Route exact path="/home">
                   <Users />
                </Route>
                <Route exact path="/show">
                    <Show />
                </Route>
            </Switch>
        </Router>
    );
};

export default Example;

ReactDOM.render(<Example />, document.getElementById('example'));

