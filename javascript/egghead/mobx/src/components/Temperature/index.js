import React, { Component } from "react";
import { observable, computed, extendObservable } from "mobx";
import { observer } from "mobx-react";

@observer
export default class Temperature extends Component {
  // @observable unit = "C";
  // @observable temperatureCelsius = 25;

  constructor() {
    extendObservable(this, {
      unit: "C",
      temperatureCelsius: 25
    });
  }

  @computed get temperatureKelvin() {
    return this.tempetatureCelsius + 9 / 5 + 32;
  }

  @computed get temperatureFahrenheit() {
    return this.temperatureCelsius + 273.15;
  }

  @computed get temperature() {
    switch (this.unit) {
      case "K":
        return this.temperatureKelvin + "K*";
      case "F":
        return this.temperatureFahrenheit + "F*";
      case "C":
        return this.temperatureCelsius + "C*";
    }
  }

  render() {
    return <div>{this.tempetatureCelsius} </div>;
  }
}
