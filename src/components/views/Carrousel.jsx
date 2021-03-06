var React = require('react');
var Carousel = require('nuka-carousel');

var Carrousel = React.createClass({
  _eachImage: function(){
    var list = [];
    for (i = 1; i <= 7; i++){
        list.push(i);
      };
    return this._buildImages(list);
  },

  _buildImages: function(list) {
    return list.map(function(val){
      return <img src={"/Jam3Test/public/media/" + val + ".jpg"} key={val} />;
    })
  },

  render: function(){
    var styles = {height: "10vmin", width: "auto"};
    var Decorators = [{
        component: React.createClass({
          render: function() {
            return (
              <div onClick={this.props.previousSlide}>
                <img className="arrow" src='/Jam3Test/public/media/arrow-left.png' style={styles} />
              </div>
            )
          }
        }),
        position: 'CenterLeft',
        style: {
          padding: 20
        }
      },
      {
          component: React.createClass({
            render: function() {
              return (
                <div onClick={this.props.nextSlide}>
                  <img className="arrow" src='/Jam3Test/public/media/arrow-right.png' style={styles} />
                </div>
              )
            }
          }),
          position: 'CenterRight',
          style: {
            padding: 20
          }
        }];
    return (
       <Carousel cellAlign="center" decorators={Decorators}>
       {this._eachImage()}
      </Carousel>
    )
  }
});

module.exports = Carrousel;
