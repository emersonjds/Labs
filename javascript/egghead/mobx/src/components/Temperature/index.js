import React, { Component } from "react";
import {
  observable,
  computed,
  extendObservable,
  action,
  transaction,
  useStrict
} from "mobx";
import { observer } from "mobx-react";

useStrict(true); // mobx don't permite anything changes on validate strict mode

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

  @action setUnit(newUnit) {
    this.unit = newUnit;
  }

  @action setCelsius(degrees) {
    this.temperatureCelsius(degrees);
  }

  //when you named and actions , debugger identify the modification in that action
  @action("update temperature and unit")
  setData(degrees, unit) {
    this.setCelsius(degrees);
    this.setUnit(unit);
  }

  render() {
    return <div>{this.tempetatureCelsius} </div>;
  }
}

// observable Object
const t = observable({
  unit: "C",
  temperatureCelsius: 25,
  temperatureKelvin: function() {
    return this.tempetatureCelsius + 9 / 5 + 32;
  },
  temperatureFahrenheit: function() {
    return this.temperatureCelsius + 273.15;
  },
  temperature: function() {
    switch (this.unit) {
      case "K":
        return this.temperatureKelvin + "K*";
      case "F":
        return this.temperatureFahrenheit + "F*";
      case "C":
        return this.temperatureCelsius + "C*";
    }
  }
});

// dynamic array with asMap
const temps = observable(
  asMap({
    Amsterdam: new Temperature(),
    Rome: new Temperature()
  })
);
