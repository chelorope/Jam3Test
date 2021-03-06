var React = require('react');

var Share = React.createClass({
  componentWillMount: function(){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '103745400044770',
        xfbml      : true,
        version    : 'v2.6'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src="https://connect.facebook.net/en_US/all.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  },
  _share: function() {
    FB.ui(
     {
      method: 'share',
      href: 'http://images.huffingtonpost.com/2015-01-23-121121_BURKARD_101629.JPG'
    }, function(response){});
  },
  render: function(){
    var imgClass = "share-img-big"
    if (this.props.mobile){
      imgClass = "share-img-small"
    }
    return (
      <div>
      <img className="fb-logo" src="/Jam3Test/public/media/faceLogo.png" alt="facebook logo" />
      <img className={imgClass} src="http://images.huffingtonpost.com/2015-01-23-121121_BURKARD_101629.JPG"
       alt="Kayak Lake Mountains" />
      <button type="button" onClick={this._share}>Share</button>
      </div>
    )
  }
});

module.exports = Share;
