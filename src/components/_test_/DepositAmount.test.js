import { render } from "@testing-library/react";
import DepositComponent from "../DepositForm"; // Adjust the path as per your component location

describe("DeleteModal component", () => {
  test("renders the component", () => {
    const { container } = render(<DepositComponent />);

    expect(container).toBeInTheDocument();
    expect(container.firstChild).toBeNull();
  });
});
