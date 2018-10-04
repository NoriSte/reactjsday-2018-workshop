import React from "react";

const fetchData = apiUrl => Component => {
  return class WithFetchedData extends React.Component {
    state = {
      data: null
    };

    componentWillMount() {
      fetch(apiUrl)
        .then(function(response) {
          return response.json();
        })
        .then(data => {
          this.setState({ data: data.name });
        });
    }

    render() {
      return <Component {...this.state} {...this.props} />;
    }
  };
};

export { fetchData };
