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

// useStrict = true; // mobx don't permite anything changes on validate strict mode

@observer
export default class Temperature extends Component {
  // @observable unit = "C";
  // @observable temperatureCelsius = 25;

  constructor(props) {
    super(props);
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

  //when you named and actions , debugger identify the modification in that action and allow visualize that action
  @action("update temperature and unit")
  setData(degrees, unit) {
    this.setCelsius(degrees);
    this.setUnit(unit);
  }

  render() {
    return <TView temperature={temps} />;
  }
}

@observer
class TView extends Component {
  render() {
    const t = this.props.temperature;
    return t.map(data => (
      <li key={data.id}>
        {data.name}, {data.temperature.temperatureCelsius}
      </li>
    ));
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
const temps = observable([
  { id: 1, name: "Amsterdam", temperature: new Temperature() },
  { id: 2, name: "Rome", temperature: new Temperature() }
]);
