var React = require('react');

// Components
var Footer = require('./common/footer');

module.exports = React.createClass({
    content: function() {
        if (this.props.children) {
            return this.props.children;
        } else {
            return <div>
                No children to render.
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
