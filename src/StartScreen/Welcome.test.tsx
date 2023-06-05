import { screen } from "@testing-library/react";
import { render } from "@test-utils";
import { StartScreen } from "./StartScreen";

it("displays welcome text", () => {
    render(<StartScreen />);
    expect(screen.getByText("Welcome to Mantine!")).toBeInTheDocument();
});
