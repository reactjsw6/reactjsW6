const React = require('react');
const DOM = require('react-dom');

//Used to create and display bear data!
var BearsApp = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      flavor: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('/bears', function (result) {
      var bears = result[0];
      this.setState({
        name: 'Smokey',
        flavor: 'Brown'
      });
    }
    .bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.state.name} the {this.state.flavor} bear.
      </div>
    );
  }
});

DOM.render( <BearsApp />, document.getElementById('bear') );




// var MyComponent = React.createClass({
//   render: function() {
//     return (
//       <h2> My name is Yogi Bear </h2>
//     );
//   }
// });
//
// DOM.render(<MyComponent /> , document.getElementById('bear') );
