import { useRoutes } from "react-router-dom"
import Home from "./pages/home/Home"
import Layout from "./layout/Layout"
import Portfolio from "./pages/portfolio/portfolio"
import Events from "./pages/events/events"
import WearOfAbsolue from "./pages/brands/wearofabsolue/WearOfAbsolue"
import LashStudio from "./pages/brands/lash-studio/LasStudio"
import ConceptFlannel from "./pages/brands/concept-flannel/ConceptFlannel"
import Mayam from "./pages/brands/mayam/Mayam"
import Brands from "./pages/brands/Brands"

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
        path: "/brands",
        element: <Brands />
      },
      {
        path: "/brands/wearofabsolue",
        element: <WearOfAbsolue />
      },
      {
        path: "/brands/lashstudio",
        element: <LashStudio />
      },
      {
        path: "/brands/conceptflannel",
        element: <ConceptFlannel />
      },
      {
        path: "/brands/mayam",
        element: <Mayam />
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
