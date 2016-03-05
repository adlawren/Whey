var React = require('react');

// Components
var ListItem = require('./list-item');

module.exports = React.createClass({
    content: function() {
        if (!this.props.items) {

            // TODO: Update text
            return <span>
                List is empty
            </span>
        } else {
            // for (var key in this.props.items) {
            //     console.log('Next key: ' + key + ', with value: ' + this.props.items[key]);
            // }

            var items = [];
            for (var i = 0; i < this.props.items.length; ++i) {

                // TODO: Remove; test
                console.log('Next item:' + this.props.items[i].text);

                items.push(
                    <ListItem item={this.props.items[i]} key={this.props.items[i].key} />
                );
            }

            // return <span>
            //     Not Empty
            // </span>

            return items;
        }
    },
    render: function() {
        return <div>{this.content()}</div>
    }
});
