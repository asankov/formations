import React from "react";
import InitTeam from "./InitTeam";
import { mount } from "enzyme";
import { team } from "../../../tools/testData";

const renderInitTeam = args => {
  const defaultProps = {
    teamName: team.name,
    onTeamNameChange: jest.fn(),
    manager: team.manager,
    onManagerFirstNameChange: jest.fn(),
    onManagerLastNameChange: jest.fn(),
    errors: {},
  };

  const props = { ...defaultProps, ...args };
  return mount(<InitTeam {...props} />);
};

describe("InitTeam renders correctly", () => {
  test("team name should equal passed team name", () => {
    const component = renderInitTeam();
    const teamName = component.find(".team-name-input").props().value;

    expect(teamName).toEqual(team.name);
  });
});
