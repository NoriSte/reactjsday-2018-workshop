import React from "react";

class MeasureTime extends React.Component {
  state = {
    secondsPassed: 0
  };

  componentWillMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        ...this.state,
        secondsPassed: this.state.secondsPassed + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return this.props.children(this.state);
  }
}

export { MeasureTime };
