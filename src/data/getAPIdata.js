import React, { Component } from "react";

class getAPIdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItems: [],
      starting: 0,
      error: false,
      quantity: 5,
      hasMore: false
    };
  }

  componentDidMount() {
    this.fetchData();
    if (this.state.newItems.length === this.state.quantity) {
      this.setState({ ...this.state, starting: +5 });
    }
  }

  fetchData = () => {
    fetch(
      `http://jsonplaceholder.typicode.com/photos?_start=${this.state.starting}&_limit=5`
    )
      .then(res => {
        return res.json();
      })
      .then(photos => {
        this.setState({ items: photos });
      });
  };

  render() {
    console.log(this.state.items);
    return (
      <div>
        <h1>loadData</h1>
      </div>
    );
  }
}
export default getAPIdata;
