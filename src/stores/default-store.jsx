var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
    listenables: [
        Actions
    ],
    triggerChange: function() {
        this.trigger('change', this.storedData);
    },
    defaultAction1: function() {

        // TODO: Remove; test
        console.log('Default Action 1 invoked.');

        this.triggerChange();
    }
});
