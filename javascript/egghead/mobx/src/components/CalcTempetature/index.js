import React, { Component } from "react";
import {
  observable,
  computed,
  action,
  transaction,
  extendObservable
} from "mobx";
import { observer } from "mobx-react";

@observer
export default class CalcTemperature extends Component {
  @observable input = "";
  @observable loading = true;
  @observable returnedTemperature = "";

  @action onChange = e => {
    this.input = e.target.value;
  };

  @action("Buscar temperatura de pais digitado")
  getCityData() {
    window
      .fetch(
        // get open API
        `http://api.openweathermap.org/data/2.5/weather?appid=${APPID}&q=${this.input}`
      )
      .then(res => res.json())
      .then(
        action(json => {
          (this.returnedTemperature = json.main.temp - 273.15),
            (this.loading = false);
        })
      );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="digite a cidade"
          onChange={this.onChange}
          value={this.input}
        />
        <p>
          Temperatura agora em {this.input} é {this.returnedTemperature}{" "}
        </p>
        <button onClick={this.getCityData}>
          {" "}
          {this.loading ? "Buscar" : "Buscando . . . "}
        </button>
      </div>
    );
  }
}
