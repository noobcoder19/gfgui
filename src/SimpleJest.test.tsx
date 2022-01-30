import { fireEvent, render } from "@testing-library/react"
import SimpleJest from "./SimpleJest"

describe("SimpleJest", () => {
    it("Simple test",() => {
        const {baseElement} =render(<SimpleJest />)
        expect(baseElement).toBeInTheDocument();
    })

    it("text changes", () => {
        const obj = {target:{value: "geeks"}};
        const {getByTestId} = render(<SimpleJest />);
        const input = getByTestId("input");
        fireEvent.change(input,obj);
        const output = getByTestId("output");
        expect(output.innerHTML).toBe("hello geeks");
    })

    it("snapshot testing", () => {
        const {baseElement} = render(<SimpleJest />);
        expect(baseElement).toMatchSnapshot();
    })
})