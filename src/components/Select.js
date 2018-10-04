import React from "react";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      selectedValue: props.defaultValue
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ ...this.state, opened: !this.state.opened });
  }

  onSelect(value) {
    if (!this.state.opened) {
      this.toggle();
      return;
    }
    this.setState({ ...this.state, selectedValue: value }, () => {
      this.toggle();
    });
  }

  render() {
    const { children: options } = this.props;
    return React.Children.map(options, option => {
      const active = option.props.value === this.state.selectedValue;
      const { opened } = this.state;
      const showIt = active || opened;
      if (showIt) {
        return React.cloneElement(option, {
          active: opened && option.props.value === this.state.selectedValue,
          onSelect: () => this.onSelect(option.props.value)
        });
      } else {
        return null;
      }
    });
  }
}

export { Select };
