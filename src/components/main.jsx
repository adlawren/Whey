var React = require('react');

// Reflux
var Reflux = require('reflux');
var Actions = require('../actions');

// Components
var Footer = require('./common/footer');

// Stores
var DefaultStore = require('../stores/default-store');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(DefaultStore, 'onChange'),
    ],
    onChange: function() {

        // TODO: Remove; test
        console.log('onChange() callback invoked.');
    },
    onClickListener: function() {

        // TODO: Remove; test
        console.log('Button was clicked.');

        Actions.defaultAction1();
    },
    content: function() {
        if (this.props.children) {
            return this.props.children;
        } else {
            return <div>
                No children to render.<br />
                <button onClick={this.onClickListener}>Test Button</button>
            </div>
        }
    },
    render: function() {
        return <div>
            {this.content()}
            <Footer />
        </div>
    }
});
