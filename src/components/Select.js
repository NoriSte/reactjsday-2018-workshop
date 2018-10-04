import React from "react";

class Select extends React.Component {
  state = {
    opened: false,
    value: this.props.defaultValue
  };

  toggle() {
    this.setState({ ...this.state, opened: !this.state.opened });
  }

  changeValue(value) {
    this.setState({ ...this.state, value });
  }

  render() {
    return this.props.children(this.state);
  }
}

export { Select };
