import React from "react";

class ControlledSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened || false,
      selectedValue: props.value || props.initialValue
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ opened: !this.state.opened }, () => {
      if (this.state.opened && this.props.onOpen) {
        this.props.onOpen();
      }
    });
  }

  onOpen() {
    if (this.props.onOpen) {
      this.props.onOpen();
      return;
    }
    this.setState({ opened: true });
  }

  onSelect(value) {
    if (this.props.onSelect) {
      this.props.onSelect(value);
      return;
    }
    this.setState({ selectedValue: value });
  }

  render() {
    const { children: options } = this.props;
    let opened, selectedValue;

    if (this.props.value && this.props.onSelect) {
      // it's a controlled component
      opened = this.props.opened;
      selectedValue = this.props.value;
    } else {
      // it's not a controlled component
      ({ opened, selectedValue } = this.state);
    }

    const needToBeOpened = !opened;

    return React.Children.map(options, option => {
      const active = option.props.value === selectedValue;
      const showIt = active || opened;
      if (showIt) {
        return React.cloneElement(option, {
          active: opened && option.props.value === selectedValue,
          onSelect: () =>
            needToBeOpened ? this.onOpen() : this.onSelect(option.props.value)
        });
      } else {
        return null;
      }
    });
  }
}

export { ControlledSelect };
