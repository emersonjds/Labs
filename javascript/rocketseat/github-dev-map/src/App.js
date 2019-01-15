import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
  }

  componentWillMount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      ...this.state.viewport({
        width: window.innerWidth,
        height: window.innerHeight
      })
    });
  };

  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;
    console.log(latitude, longitude);
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={
          "pk.eyJ1IjoiZW1lcnNvbmpkcyIsImEiOiJjanF5NGZjZHcwMDJ5M3lsandvaGlvcXBrIn0.mHlWfI4BpweXRc5sF6q1Jw"
        }
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={-23.5439948}
          longitude={-46.6065452}
          onClick={this.handleMapClick}
          captureClick={true}
        >
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48
            }}
            src="https://avatars2.githubusercontent.com/u/12503997?v=4"
          />
        </Marker>
      </MapGL>
    );
  }
}
