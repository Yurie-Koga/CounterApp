import React, { Component } from "react";
import "./image.css";

class Image extends Component {
  state = {
    // imageUrl: "https://picsum.photos/200"
  };

  render() {
    return (
      <div className="imgBox">
        <img src="./img/tiger.png" alt="" className="img" />
        <img src="./img/wolf.png" alt="" className="img" />
        <img src="./img/bird.png" alt="" className="img" />
        {/* <img src={this.state.imageUrl} alt="" className="img" /> */}
      </div>
    );
  }
}

export default Image;
