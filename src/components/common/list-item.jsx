var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            selected: false
        }
    },
    content: function() {
        if (this.state.selected) {
            return <div>
                {this.props.item.text}
            </div>
        } else {
            return <div>
                {this.props.item.text}
            </div>
        }
    },
    onClickListener: function() {
        this.setState({
            selected: !this.state.selected
        });

        console.log('New selected state: ' + this.state.selected);
    },
    render: function() {
        return <div className="list-group-item" onClick={this.onClickListener}>{this.content()}</div>
    }
});
