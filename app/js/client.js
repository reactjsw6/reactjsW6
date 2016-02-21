const React = require('react');
const DOM = require('react-dom');

var URI = "http://localhost:3000/api/bears";

var BearsApp = React.createClass({

  //Start the server, run these things

  getInitialState: function() {
    //This makes it so our requests can be handled as cross XML
    // $.ajaxSetup( {
    //   dataType: 'jsonp'
    // });
    this.getBears();
    return { bears: [] };

  },

  getBears: function() {
    this.serverRequest = $.get(URI)
    .then( (data) => {
      console.log('Hello from inside getBears')
      data.forEach(function(bear) {
        bear.editing = false;
      });
      this.setState( { bears:data } );
    });
  },

  // deleteBear: function(bearId) {
  //
  //   this.serverRequest = $.delete(URI)
  //     .then( (data) ) => {
  //
  //     }
  //
  //   return () => {
  //     var something = this.state.bears.filter(function(bear) {
  //       if(bear._id === bearId) {
  //         return false;
  //       }else {
  //         return true;
  //       }
  //     });
  //     this.setState({bears: something});
  //   }
  // },

  // editBear: function(id) {
  //   return () => {
  //     var something = this.state.bears.map(function(bear) {
  //       if(id === bear._id) {
  //         return bear;
  //       }
  //     });
  //     this.setState({bears: something});
  //   }
  // },

  render: function() {
    return (

      <h2> This is being rendered from Client </h2>
      // <ul> {this.state.bears.map((bear) => {
      //   return
      //     <li key={bears._id}> {bear.name}, {bear.flavor}, {bear.fishPreference}
      //       <button onClick={this.deleteBear(bear._id)}>Delete</button>
      //       <form key={bears._id}>
      //         <input type = "text" name = "bearName" placeholder = "Bear Name"/>
      //         <input type = "text" name = "bearFlavor" placeholder = "Bear Flavor"/>
      //       <button type = "submit">Edit</button >
      //       </form>
      //     </li>
      //   })}
      // </ul>
    )
  }
});

DOM.render(<BearsApp /> , document.getElementById('bears'));
