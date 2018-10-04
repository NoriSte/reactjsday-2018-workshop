import React from "react";

const withMouse = Component => {
  return class WithMouse extends React.Component {
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
      return <Component {...this.state} {...this.props} />;
    }
  };
};

export { withMouse };
