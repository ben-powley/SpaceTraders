import { NAV_ROUTES } from "Helpers/NavigationHelper"
import Layout from "Layouts"
import Error from "Pages/Error"
import { Suspense } from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      {NAV_ROUTES.map((route) => (
        <Route key={route.key} id={route.key} index={route.key === "jobs"} path={route.url} element={<Suspense>{route.component}</Suspense>} />
      ))}
    </Route>
  )
)

export { router }
