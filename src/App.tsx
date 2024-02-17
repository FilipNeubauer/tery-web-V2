import { useRoutes } from "react-router-dom"
import Home from "./pages/home/Home"
import Layout from "./layout/Layout"
import Portfolio from "./pages/portfolio/portfolio"

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
