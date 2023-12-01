import Game from "Pages/Game"
import Home from "Pages/Home"

type NavRoute = {
  key: string
  title: string
  url: string
  component: JSX.Element
}

const NAV_ROUTES: NavRoute[] = [
  {
    key: "home",
    title: "Home",
    url: "/",
    component: <Home />,
  },
  {
    key: "game",
    title: "Game",
    url: "/game",
    component: <Game />,
  },
]

export { NAV_ROUTES }
