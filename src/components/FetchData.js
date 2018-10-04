import React from "react";

class FetchData extends React.Component {
  state = {
    data: null
  };

  componentWillMount() {
    fetch(this.props.apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({ data: data.name });
      });
  }

  render() {
    return this.props.children(this.state);
  }
}

export { FetchData };
