import { render } from "@testing-library/react-native";
import React from "react";
import WeatherCordinates from "../components/WeatherCordinates";

describe('Weaher cordinates', () => {
    test('should render corretly', () => {
      const wrapper = render(<WeatherCordinates />);
      wrapper.getByTestId('weather-cordinates');
    });
  });