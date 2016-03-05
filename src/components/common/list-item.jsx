var React = require('react');

module.exports = React.createClass({
    content: function() {
        return <div>
            {this.props.item.text}
        </div>
    },
    render: function() {
        return <div>{this.content()}</div>
    }
});
