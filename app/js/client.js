const React = require('react');
const DOM = require('react-dom');

var URI = "http://localhost:3000/api/bears";

//Used to create and display bear data!
var BearsApp = React.createClass({
  getInitialState: function() {
    this.getBears();
    return {
      bears: []
    }
  },

  createBear: function(){

  },

  deleteBear: function(){

  },

  updateBear: function(){

  },

  getBears: function() {
    this.serverRequest = $.get(URI , function (result) {
      var bears = result[1];
      console.log(bears);
      this.setState({
        name: bears.name,
        fish: bears.fishPreference
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
        {this.state.name} the bear loves {this.state.fish} bear.
      </div>
    );
  }
});

DOM.render(<BearsApp /> , document.getElementById('bear') );
