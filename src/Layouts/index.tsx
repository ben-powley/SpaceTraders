import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <main className="p-10">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
