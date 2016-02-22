const React = require('react');
const DOM = require('react-dom');

var URI = "http://localhost:5000/api/bears";

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
        return bear._id !== bearId._id;
      });

      this.setState({ bears: holder });

      $.ajax({
        url: URI + '/' + bearId,
        type: 'DELETE'
      }).then( (data) => {
        console.log(data)
      });
    };
  },

  findDatBear: function (id) {
    console.log("findDatBear", id);
    return this.state.bears.filter(function(bear) {
      return bear._id === id;
    }).shift();
  },

  handleUpdate: function(id) {
    var that = this;
    return function (e) {
      var bear = that.findDatBear(id);
      console.log("handleUpdate", bear);

      if (bear) {
        bear[e.target.name] = e.target.value;
        that.setState(that.state);
      } else {
        newBear = that.state.newBear || {};
        newBear[e.target.name] = e.target.value;
        that.setState({ newBear: newBear });
      }
    }
  },

  updateBear: function(id) {
    var that = this;
    return function (e) {
      var bear = that.findDatBear(id);

      console.log("updateBear", bear);

      $.ajax({
        url: URI + "/" + id,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(bear),
      }).then(function () {
        console.log("updateBear", "FUCK YEAH");
      });
    };
  },

  newBear: function (e) {
    $.ajax({
      url: URI,
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(this.state.newBear),
    }).then(function () {
      console.log("NEW BEAR", "FUCK YEAH");
    });
  },

  render: function() {
    // .map takes each object in data and uses the following specs to create HTML
    var bearObjects = this.state.bears.map( (bear) => {
      return (
        //HTML
          <tr key={bear._id}>
            <td>
              <input name="name" type="text" defaultValue={bear.name} onChange={this.handleUpdate(bear._id)}></input>
            </td>
            <td>
              <input name="fishPreference" type="text" defaultValue={bear.fishPreference} onChange={this.handleUpdate(bear._id)}></input>
            </td>
            <td>
              <button onClick={this.deleteBear(bear._id)} className="btn btn-danger glyphicon glyphicon-remove"></button>
            </td>
            <td>
              <button onClick={this.updateBear(bear._id)} className="btn btn-basic glyphicon glyphicon-pencil"></button>
            </td>
          </tr>
      )
    })
    return (
      //HTML
      <div>
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
        <div>
          <ul>
          <li>Name<input name="name" type="text" onChange={this.handleUpdate("new")}></input></li>
          <li>Fish Preference<input name="fishPreference" type="text" onChange={this.handleUpdate("new")}></input></li>
          <li><button onClick={this.newBear} className="btn btn-basic glyphicon glyphicon-pencil"></button></li>
          </ul>
        </div>
      </div>
    )
  }

});

DOM.render(<BearsApp /> , document.getElementById('bears'));
