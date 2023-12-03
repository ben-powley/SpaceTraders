import { it, expect, vi } from "vitest"
import { screen } from "@testing-library/react"
import NewGame from "./NewGame"
import { renderWithProviders } from "Test/Utils"

it("renders", async () => {
  // Arrange
  renderWithProviders(<NewGame />)

  vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: () => vi.fn(),
  }))

  // Act
  await screen.findByRole("heading")

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("New Game")
})
