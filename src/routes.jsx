var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Main Component
var Main = require('./components/main');

// Other Components
var SubComponent1 = require('./components/component1');
var SubComponent2 = require('./components/component2');

module.exports = (
    <Router>
        <Route path="/" component={Main}>
            <Route path="subpath1" component={SubComponent1} />
            <Route path="subpath2" component={SubComponent2} />
        </Route>
    </Router>
);
