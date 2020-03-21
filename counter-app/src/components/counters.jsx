import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter} // loot property. when use each item: this.props.counter.value
            // value={counter.value}    // these are included in counter
            // selected={true}
            // id={counter.id}
          />
          //   id is unique key, value and selected property go to props property
        ))}
      </div>
    );
  }
}

export default Counters;
