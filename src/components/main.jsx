var React = require('react');

// Reflux
var Reflux = require('reflux');
var Actions = require('../actions');

// Components
var Footer = require('./common/footer');
var List = require('./common/list');

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
    getInitialState: function() {
        return {
            items: []
        }
    },
    onClickListener: function() {

        // TODO: Remove; test
        console.log('Button was clicked.');

        Actions.defaultAction1();

        var array = this.state.items;
        var len = array.length;
        
        array.push({
            key: len,
            text: 'New Item ' + len
        });

        // dictionary[len] = 'New Item ' + len;

        // for (var i = 0; i < 10; ++i) {
        //     dictionary[i] = i;
        // }

        this.setState({
            items: array
        });
    },
    content: function() {
        if (this.props.children) {
            return this.props.children;
        } else {
            return <div>
                No children to render.<br />
                <button onClick={this.onClickListener}>Test Button</button>
                <List items={this.state.items}/>
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
