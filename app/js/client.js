const React = require('react');
const DOM = require('react-dom');

var URI = "http://localhost:3000/api/bears";

var BearsApp = React.createClass({
  getInitialState: function() {
    this.getBears();
    return {
      bears: []
    }
  },

  getBears: function() {
    this.serverRequest = $.get(URI)
      .then( (data) => {
        data.forEach(function(bear) {
          bear.editing = false;
        });
        this.setState( {bears:data} );
      })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  //Render display data
  render: function() {
    //Creating dynamic data
    var displayData = this.state.bears.map(function (bears) {
      return (
        <div className="bearItem" key={bears._id}>
          {bears.name} the bear loves {bears.fishPreference}
        </div>
      )
    });
    //Final return
    //displayData is defined above
    return (
      <div className="bearsList">
        {displayData}
      </div>
    )
  }

});//End of BearsApp

DOM.render(<BearsApp /> , document.getElementById('bear') );
