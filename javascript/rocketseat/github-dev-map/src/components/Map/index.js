import React, { Component } from "react";

import MapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import { bindActionsCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modal";

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

  handleMapClick = async e => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;

    // console.log(e.lngLat);

    await showModal({ latitude, longitude });
  };

  render() {
    const { viewport: viewportState } = this.state;
    const { users } = this.props;

    return (
      <MapGL
        {...viewportState}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZW1lcnNvbmpkcyIsImEiOiJjanF5NGZjZHcwMDJ5M3lsandvaGlvcXBrIn0.mHlWfI4BpweXRc5sF6q1Jw"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {users.data.map(user => {
          <Marker
            latitude={user.cordinates.latitude}
            longitude={user.cordinates.longitude}
            key={user.id}
          >
            <img
              className="avatar"
              alr={`${user.name} Avatar`}
              src={user.avatar}
            />
          </Marker>;
        })}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionsCreators(ModalActions, dispatch);

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(Map);
