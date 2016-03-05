var React = require('react');

module.exports = React.createClass({
    content: function() {
        return <div>
            {this.props.item.text}
        </div>
    },
    render: function() {
        return <div className="list-group-item">{this.content()}</div>
    }
});
