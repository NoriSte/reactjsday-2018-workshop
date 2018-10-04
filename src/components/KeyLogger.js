import React from "react";

class KeyLogger extends React.Component {
  state = {
    lastKeystroke: "",
    typedText: ""
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    let lastKeystroke = e.key;
    let typedText = this.state.typedText;
    if (
      lastKeystroke !== "Backspace" &&
      lastKeystroke !== "Enter" &&
      lastKeystroke !== "Escape"
    ) {
      typedText += lastKeystroke;
    }

    this.setState({
      lastKeystroke,
      typedText
    });
  }

  componentDidMount() {
    this.myRef.current.tabIndex = "0";
  }

  render() {
    return (
      <div ref={this.myRef} onKeyDown={this.onKeyDown}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

export { KeyLogger };
