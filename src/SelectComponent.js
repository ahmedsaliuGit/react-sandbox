import React from "react";

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "orange"
    };
  }

  render() {
    return (
      <div>
        <label>Fruit:</label>
        <select>
          <option value="coconut">Coconut</option>
          <option value="orange">Orange</option>
          <option value="apple">Apple</option>
          <option value="cucumber">Cucumber</option>
        </select>
      </div>
    );
  }
}

export default SelectComponent;
