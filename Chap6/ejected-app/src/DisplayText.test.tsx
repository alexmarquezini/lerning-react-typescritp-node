import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import DisplayText from "./DisplayText";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
describe("Test DisplayText", () => {
  const getUserFullNameMock = (
    username: string
  ): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
    const promise = new Promise<string>((res, rej) => {
      res(username);
    });
    const getUserFullName = jest.fn(
      async (username: string): Promise<string> => {
        return promise;
      }
    );
    return [promise, getUserFullName];
  };
  it("Renders without crashing", () => {
    const username = "testuser";
    const [promise, getUserFullName] = getUserFullNameMock(username);
    const { baseElement } = render(
      <DisplayText getUserFullName={getUserFullName} />
    );
    expect(baseElement).toBeInTheDocument();
  });
  it("receives input text", () => {
    const username = "testuser";
    const [promise, getUserFullName] = getUserFullNameMock(username);
    const { getByTestId } = render(
      <DisplayText getUserFullName={getUserFullName} />
    );
    const input = getByTestId("user-input");
    fireEvent.change(input, { target: { value: username } });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(username);
  });
  it("shows welcome message", async () => {
    const username = "testuser";
    const [promise, getUserFullName] = getUserFullNameMock(username);
    const msg = `Welcome to react testing, ${username}`;
    const { getByTestId } = render(
      <DisplayText getUserFullName={getUserFullName} />
    );
    const input = getByTestId("user-input");
    const label = getByTestId("final-msg");
    fireEvent.change(input, { target: { value: username } });
    const btn = getByTestId("input-submit");
    fireEvent.click(btn);

    expect(label).toBeInTheDocument();
    await wait(() => promise);
    expect(label.innerHTML).toBe(msg);
  });
  it("matches snapshot", () => {
    const username = "testuser";
    const [promise, getUserFullName] = getUserFullNameMock(username);
    const { baseElement } = render(
      <DisplayText getUserFullName={getUserFullName} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
