import React from "react";
import InitPlayers from "./InitPlayers";
import { mount } from "enzyme";
import { players } from "../../../tools/testData";

const renderInitPlayers = args => {
  const defaultProps = {
    players: players,
    errors: {},
    onPlayerFirstNameChange: jest.fn(),
    onPlayerLastNameChange: jest.fn(),
    onPlayerNumberChange: jest.fn(),
    onPlayerCaptainButtonClicked: jest.fn(),
  };

  const props = { ...defaultProps, ...args };
  return mount(<InitPlayers {...props} />);
};

describe("test InitPlayers component is rendered correctly", () => {
  const component = renderInitPlayers();

  test("should have 11 player inputs", () => {
    const numPlayerInputs = component.find("div.squad").children().length;

    expect(numPlayerInputs).toEqual(11);
  });

  test("should have only one captain", () => {
    const numCaptains = component.find(".captain-switch.switch-selected")
      .length;
    expect(numCaptains).toEqual(1);
  });
});
