var React = require('react');

var Twitter = React.createClass({
  getInitialState: function() {
    return{ tweets: ""};
  },
  componentWillMount: function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.renderTweets(JSON.parse(xhttp.responseText));
      }
    }.bind(this);

    xhttp.open("GET", "http://localhost:8080", true);
    // xhttp.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:8081");
    xhttp.send();
  },
  renderTweets: function(props) {
    var rendTweets = props.statuses.map(function(item){
      return (
        <div key={item.id} className="user" >
          <img src={item.user.profile_image_url}></img>
          <h3>{item.user.name}</h3>
          <h4>@{item.user.screen_name}</h4>
        </div>
      )
    });
    this.setState({tweets : rendTweets});
  },
   render: function(){
    return <div>{this.state.tweets}</div>;
  }
});

module.exports = Twitter;