const React = require('react');
const DOM = require('react-dom');

var URI = "http://localhost:3000/api/bears";

var BearsApp = React.createClass({
  //Start the server, run these things
  getInitialState: function() {
    this.getBears();
    return { bears: [] };
  },

  getBears: function(){
    $.get(URI).then( (data) => {
        data.forEach( (bear) => {
          bear.editing = false;
        });
        this.setState( {bears: data} );
    })
  },

  deleteBear: function(bearId) {
    return () => {
      var holder = this.state.bears.filter(function(bear) {
        if (bear._id === bearId) return false;
        return true;
      });
      //
      this.setState({ bears: holder });
      $.ajax({
        url: URI + '/' + bearId,
        type: 'DELETE'
        }).then( (data) => {
          console.log(data)
        });
    };
  },

   updateBear: function(bear) {

     event.preventDefault();
     var bearData = {
       name: bear.target.children['bear-name'].value,
       fishPreference: bear.target.children['bear-fish'].value
     }

      return () => {
        var something = this.state.bears.map( (bear) => {
          if (id === bear._id) bear.editing = true;
          return bear;
        });
        this.setState( { bears: something } );
        console.log('Updating Bear')
      };
    },

  render: function() {
    // .map takes each object in data and uses the following specs to create HTML
    var bearObjects = this.state.bears.map( (bear) => {
      return (
        //HTML
          <tr key={bear._id}>
            <td>
              <input type="text" name='bear-name' defaultValue={bear.name}></input>
            </td>
            <td>
              <input type="text" name='bear-fish' defaultValue={bear.fishPreference}></input>
            </td>
            <td>
              <button  onClick={this.deleteBear(bear._id)} className="btn btn-danger glyphicon glyphicon-remove"></button>
            </td>
            <td>
              <button onClick={this.updateBear(bear._id)} className="btn btn-basic glyphicon glyphicon-pencil"></button>
            </td>
          </tr>
      )
    })
    return (
      //HTML
      <table className="table table-striped table-hover bearList">
        <thead>
          <tr>
            <td>Name</td><td>Fish Preference</td><td>Delete</td><td>Update</td>
          </tr>
        </thead>
        <tbody>
          {bearObjects}
        </tbody>
      </table>
    )
  }
});

DOM.render(<BearsApp /> , document.getElementById('bears'));
