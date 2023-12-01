import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NewGame from "./NewGame";

it("renders", async () => {
    // Arrange
    render(<NewGame />)

    // Act
    await screen.findByRole("heading");

    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("New Game");
})