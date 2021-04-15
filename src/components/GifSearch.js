import React from "react";

export default class GifSearch extends React.Component {

  state = {
    search: ""
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.onSearch(e, this.state.search)}>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" value={this.state.search} onChange={(e) => this.handleChange(e)}></input>
      </form>
    )
  }
}