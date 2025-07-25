import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Breadcrumb from "../Breadcrumb";

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock Radix icons
jest.mock("@radix-ui/react-icons", () => ({
  ChevronRightIcon: ({ className, ...props }) => (
    <svg data-testid="chevron-right-icon" className={className} {...props} />
  ),
  HomeIcon: ({ className, ...props }) => (
    <svg data-testid="home-icon" className={className} {...props} />
  ),
}));

describe("Breadcrumb Component", () => {
  beforeEach(() => {
    // Reset the router mock before each test
    useRouter.mockReset();
  });

  it("should not render on home page", () => {
    useRouter.mockReturnValue({
      pathname: "/",
    });

    const { container } = render(<Breadcrumb />);
    expect(container.firstChild).toBeNull();
  });

  it("should render breadcrumbs for nested pages", () => {
    useRouter.mockReturnValue({
      pathname: "/tuitions-and-fees",
    });

    render(<Breadcrumb />);

    // Should show: Home > Program Overview > Tuitions & Fees
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Program Overview")).toBeInTheDocument();
    expect(screen.getByText("Tuitions & Fees")).toBeInTheDocument();
  });

  it("should render proper navigation landmarks for accessibility", () => {
    useRouter.mockReturnValue({
      pathname: "/academics",
    });

    render(<Breadcrumb />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveAttribute("aria-label", "Breadcrumb");

    const list = screen.getByRole("list");
    expect(list).toHaveClass("breadcrumb-list");
  });

  it('should mark current page with aria-current="page"', () => {
    useRouter.mockReturnValue({
      pathname: "/academics",
    });

    render(<Breadcrumb />);

    const currentPage = screen.getByText("Academics").closest("li");
    expect(currentPage).toHaveAttribute("aria-current", "page");
    expect(currentPage).toHaveTextContent("Academics");
  });

  it("should generate proper links for breadcrumb items", () => {
    useRouter.mockReturnValue({
      pathname: "/tuitions-and-fees",
    });

    render(<Breadcrumb />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");

    const programLink = screen.getByRole("link", { name: /program overview/i });
    expect(programLink).toHaveAttribute("href", "/program-overview");
  });

  it("should show home icon for home breadcrumb", () => {
    useRouter.mockReturnValue({
      pathname: "/academics",
    });

    render(<Breadcrumb />);

    const homeIcon = screen.getByTestId("home-icon");
    expect(homeIcon).toBeInTheDocument();
  });

  it("should show separators between breadcrumb items", () => {
    useRouter.mockReturnValue({
      pathname: "/tuitions-and-fees",
    });

    render(<Breadcrumb />);

    const separators = screen.getAllByTestId("chevron-right-icon");
    // Should have 2 separators: Home > Program Overview > Tuitions & Fees
    expect(separators).toHaveLength(2);
  });

  it("should handle hash fragments in routes correctly", () => {
    useRouter.mockReturnValue({
      pathname: "/academics#core-courses",
    });

    render(<Breadcrumb />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Academics")).toBeInTheDocument();
    // Should not create a separate breadcrumb for the hash fragment
    expect(screen.queryByText("core-courses")).not.toBeInTheDocument();
  });

  it("should support custom route configurations", () => {
    useRouter.mockReturnValue({
      pathname: "/custom-page",
    });

    const customRoutes = {
      "/custom-page": { label: "Custom Page", parent: "/" },
    };

    render(<Breadcrumb customRoutes={customRoutes} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Custom Page")).toBeInTheDocument();
  });

  it("should apply custom className when provided", () => {
    useRouter.mockReturnValue({
      pathname: "/academics",
    });

    render(<Breadcrumb className="custom-breadcrumb" />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("breadcrumb", "custom-breadcrumb");
  });

  it("should generate structured data for SEO", () => {
    useRouter.mockReturnValue({
      pathname: "/tuitions-and-fees",
    });

    render(<Breadcrumb />);

    // Check for JSON-LD script tag
    const structuredDataScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(structuredDataScript).toBeInTheDocument();

    const structuredData = JSON.parse(structuredDataScript.textContent);
    expect(structuredData["@type"]).toBe("BreadcrumbList");
    expect(structuredData.itemListElement).toHaveLength(3);
    expect(structuredData.itemListElement[0].name).toBe("Home");
    expect(structuredData.itemListElement[1].name).toBe("Program Overview");
    expect(structuredData.itemListElement[2].name).toBe("Tuitions & Fees");
  });

  it("should have proper keyboard navigation support", () => {
    useRouter.mockReturnValue({
      pathname: "/academics",
    });

    render(<Breadcrumb />);

    const homeLink = screen.getByRole("link", { name: /home/i });

    // Test that the link is focusable
    homeLink.focus();
    expect(document.activeElement).toBe(homeLink);

    // Test keyboard navigation (Enter key)
    fireEvent.keyDown(homeLink, { key: "Enter", code: "Enter" });
    // Note: Actual navigation would be handled by Next.js Link component
  });

  it("should handle all defined routes correctly", () => {
    const testRoutes = [
      { path: "/program-overview", expected: ["Home", "Program Overview"] },
      { path: "/academics", expected: ["Home", "Academics"] },
      { path: "/life-activities", expected: ["Home", "Life & Activities"] },
      { path: "/day-trips", expected: ["Home", "Day Trips"] },
      { path: "/about-us", expected: ["Home", "About Us"] },
      { path: "/apply", expected: ["Home", "Apply Now"] },
      { path: "/parent-information", expected: ["Home", "Parent Information"] },
      { path: "/a-day-at-sciss", expected: ["Home", "A Day at SCISS"] },
    ];

    testRoutes.forEach(({ path, expected }) => {
      useRouter.mockReturnValue({ pathname: path });

      const { unmount } = render(<Breadcrumb />);

      expected.forEach((label) => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });

      unmount();
    });
  });

  it("should maintain proper semantic structure", () => {
    useRouter.mockReturnValue({
      pathname: "/academics",
    });

    render(<Breadcrumb />);

    // Check semantic structure
    const nav = screen.getByRole("navigation");
    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(nav).toContainElement(list);
    expect(list).toHaveAttribute("class", "breadcrumb-list");
    expect(listItems).toHaveLength(2); // Home + Academics
  });
});
