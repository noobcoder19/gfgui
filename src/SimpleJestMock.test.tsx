// import { Promise } from "cypress/types/bluebird";
import { render,screen } from "@testing-library/react";
import SimpleJestMock from "./SimpleJestMock";
import * as API from "./ApiInvoke";

describe("Simple jest mock", () => {
    it("mocking", async() => {
        const mock = jest.spyOn(API,"apiInvoke");
        mock.mockImplementation(() => Promise.resolve("geeks"));
        const {getByTestId} = render(<SimpleJestMock />);
        expect(await screen.findByText("geeks")).toBeInTheDocument();
        const output =getByTestId("output");
        expect(output.innerHTML).toBe("geeks");
        expect(mock).toBeCalledTimes(1);
    });
})