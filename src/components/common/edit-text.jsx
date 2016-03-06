var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        }
    },
    onChangeListener: function(event) {
        this.setState({
            text: event.target.value
        });
    },
    onKeyDownListener: function(event) {
        if (event.key === 'Enter') {
            // ...
        }
    },
    render: function() {
        return <div>
            <input type="text" value={this.state.text} onChange={this.onChangeListener} onKeyDown={this.onKeyDownListener} />
        </div>
    }
});
