import React from "react";

class MouseLogger extends React.Component {
  state = {
    x: 0,
    y: 0
  };

  componentWillMount() {
    window.addEventListener("mousemove", e => {
      this.setState({
        x: e.pageX,
        y: e.pageY
      });
    });
  }

  render() {
    return this.props.children(this.state);
  }
}

export { MouseLogger };
