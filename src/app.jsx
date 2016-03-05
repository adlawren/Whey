var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes');
var Api = require('./utils/api');

var ReactRouter = require('react-router');

ReactDOM.render(Routes, document.querySelector('.container'));
