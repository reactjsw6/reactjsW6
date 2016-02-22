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
        if (bear._id === bearId._id) return false;
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
    // .map takes each object in data and uses the following specs to create HTML
    var bearObjects = this.state.bears.map( (bear) => {
      return (
        //HTML
          <tr key={bear._id}>
            <td>
              <input type="text" defaultValue={bear.name}></input>
            </td>
            <td>
              <input type="text" defaultValue={bear.fishPreference}></input>
            </td>
            <td>
              <button onClick={this.deleteBear(bear._id)} className="btn btn-danger glyphicon glyphicon-remove"></button>
            </td>
            <td>
              <button className="btn btn-basic glyphicon glyphicon-pencil"></button>
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

    // return (
    //   <h2> This is being rendered from Client </h2>
    //   <ul>
    //     {this.state.bears.map( (bear) => {
    //       return
    //         <li key={bears._id}> {bear.name}, {bear.flavor}, {bear.fishPreference}
    //           <button onClick={this.deleteBear(bear._id)}>Delete</button>
    //           <form key={bears._id}>
    //             <input type = "text" name = "bearName" placeholder = "Bear Name"/>
    //             <input type = "text" name = "bearFlavor" placeholder = "Bear Flavor"/>
    //           <button type = "submit">Edit</button >
    //           </form>
    //         </li>
    //       })}
    //   </ul>
    // )




// render: function() {
//     var commentNodes = this.props.data.map(function(comment) {
//       return (
//         <Comment author={comment.author} key={comment.id}>
//           {comment.text}
//         </Comment>
//       );
//     });
//     return (
//       <div className="commentList">
//         {commentNodes}
//       </div>
//     );
//   }

DOM.render(<BearsApp /> , document.getElementById('bears'));
