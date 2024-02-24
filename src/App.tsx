import { useRoutes } from "react-router-dom"
import Home from "./pages/home/Home"
import Layout from "./layout/Layout"
import Portfolio from "./pages/portfolio/portfolio"
import Events from "./pages/events/events"
import WearOfAbsolue from "./pages/brands/wearofabsolue/WearOfAbsolue"
import LashStudio from "./pages/brands/lash-studio/LasStudio"

function App() {

  const page = useRoutes(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/brands/wearofabsolue",
        element: <WearOfAbsolue />
      },
      {
        path: "/brands/lashstudio",
        element: <LashStudio />
      }
    ]
  )



  return (
    <>
      <Layout>
        {page}
      </Layout>
    </>
  )
}

export default App
