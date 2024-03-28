import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// pages
import MainLayouts from "./layouts/MainLayout"
import Home from "./pages/Home"
import PageNotFound from './pages/PageNotFound'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App