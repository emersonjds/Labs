import React, { Component } from "react";
import * as VanillaTilt from "vanilla-tilt";
import "./style.css";

export default class ReactRefs extends Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 400,
      glare: true,
      reverse: true,
      "max-glare": 0.5
    });
  }

  render() {
    return (
      <div className="tilt-root" ref={node => (this.rootNode = node)}>
        <div className="tilt-child">
          <div {...this.props} />
        </div>
      </div>
    );
  }
}
