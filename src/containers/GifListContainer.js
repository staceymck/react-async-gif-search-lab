import React from "react";
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"


export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  onSearch = (e, query) => {
    e.preventDefault()
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(searchUrl)
    .then(res => res.json())
    .then(json => {
      this.setState({
        gifs: json["data"].slice(0, 3).map(gif => gif.images.original.url)
      })
    })
  }

  render() {
    return (
      <div>
        < GifSearch onSearch={this.onSearch}/>
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }
}