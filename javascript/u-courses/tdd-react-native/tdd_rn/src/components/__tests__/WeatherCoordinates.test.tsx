import { render } from "@testing-library/react-native";
import React from "react";
import WeatherCoordinates from "../WeatherCoordinates";

describe("WeatherCoordinates", () => {
    test("renders correctly", () => {
        const wrapper = render(<WeatherCoordinates />);
        wrapper.getByTestId("WeatherCoordinates");
    })
})