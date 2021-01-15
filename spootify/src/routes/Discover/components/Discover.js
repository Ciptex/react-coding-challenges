import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import makeRequest from "../api/makeRequest";
import '../styles/_discover.scss';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  componentDidMount() {
    Promise.allSettled([
      this.fetchSpotifyList("new-releases", "newReleases", "albums"),
      this.fetchSpotifyList("featured-playlists", "playlists", "playlists"),
      this.fetchSpotifyList("categories", "categories", "categories"),
    ]);
  }

  async fetchSpotifyList(apiPath, stateList, listName) {
    const response = await makeRequest(apiPath);
    this.setState({
      [stateList]: response.data[listName].items,
    });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
