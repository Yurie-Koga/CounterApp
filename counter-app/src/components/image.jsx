import React, { Component } from "react";

class Image extends Component {
  state = {
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <img src={this.state.imageUrl} alt="" />
        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
}

export default Image;
