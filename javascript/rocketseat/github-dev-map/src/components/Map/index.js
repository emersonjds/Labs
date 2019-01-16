import React, { Component } from "react";

import MapGL, { Marker } from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -21.975923,
      longitude: -46.780686,
      zoom: 15
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillMount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = e => {
    const [longitude, latitude] = e.lgnLat;
  };

  render() {
    const { viewport: viewportState } = this.state;

    return (
      <MapGL
        {...viewportState}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZW1lcnNvbmpkcyIsImEiOiJjanF5NGZjZHcwMDJ5M3lsandvaGlvcXBrIn0.mHlWfI4BpweXRc5sF6q1Jw"
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const mapStateToProps = state => ({});
