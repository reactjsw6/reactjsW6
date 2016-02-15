const React = require('react');
const DOM = require('react-dom');


var MyComponent = React.createClass({
  render: function() {
    return (
      <h2> My name is Yogi Bear </h2>
    );
  }
});

DOM.render(<MyComponent /> , document.getElementById('bear'));



// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var BearsApp = React.createClass({
//   getInitialState: function() {
//     return {
//       name: ''
//       // bears = []
//       // lastGistUrl: ''
//     };
//   },
//
//   componentDidMount: function() {
//     this.serverRequest = $.get(this.props.source, function (result) {
//       var bears = result[0];
//       this.setState({
//         name: bears.name
//         // lastGistUrl: lastGist.html_url
//       });
//     }.bind(this));
//   },
//
//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },
//
//   render: function() {
//     return (
//       <div>
//         {this.state.name}s last gist is
//         // <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <BearsApp source="https://localhost:5000/api/bears" />,
//   mountNode
// );
