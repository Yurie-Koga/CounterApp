// Simple React Snippets makes lots short cut
// type "imrc" then below statment will be shown, push "tab" key
import React, { Component } from "react";

// type "cc" for class and export class
class Counter extends Component {
  state = {
    count: 10,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // --- bind constructor way 1: use bind key word and 2 blocks ---
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }
  // --- bind constructor way 1: use bind key word and 2 blocks ---

  // --- bind constructor way 2: use Arrow function ---
  handleIncrement = product => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };
  // --- bind constructor way 2: use Arrow function ---

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  render() {
    let classes = this.getBadgeClasses();

    return (
      // Embedding (埋込) Expression
      // <React.Fragment>
      //   <h1>Hello World</h1>
      //   <button>Increment</button>
      // </React.Fragment>

      // "m-2": margin - 2 to make space
      <div>
        <img src={this.state.imageUrl} alt="" />

        {/* JSX Comment */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      // without "styles" Property: double "{{}}" and set property
      // <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
      //   {this.formatCount()}
      // </span>

      // without using "classes"
      // <span style={this.styles} className="badge badge-primary m-2">
      //   {this.formatCount()}
      // </span>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

// <div><h1>... is below
//<div id="root">
//<div><h1>Hello World</h1><button>Increment</button></div>
//</div>

// <React.Fragment><h1>... is below : Enbedding (埋込) Expression
//<div id="root">
//<h1>Hello World</h1><button>Increment</button>
//</div>

export default Counter;
