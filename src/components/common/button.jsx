var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <div>
            <button onClick={this.props.onClickListener} className="btn btn-default">{this.props.label}</button>
        </div>
    }
});
