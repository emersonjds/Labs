import { render } from "@testing-library/react-native";
import React from "react";
import WeatherCurrent from "../WeatherCurrent";

describe("WeatherCoordinates", () => {
    test("renders correctly", () => {
        const wrapper = render(<WeatherCurrent />);
        wrapper.getByTestId("WeatherCurrent");
    })
})