import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// pages
import MainLayouts from "./layouts/MainLayout"
import Home from "./pages/Home"
import PageNotFound from './pages/PageNotFound'
import ProfilesLayout from "./layouts/ProfilesLayout"
import Profiles from "./pages/Profiles"
import ProfilesDetail from "./pages/ProfilesDetail"
import StocksPage from "./pages/StocksPage"
import Contacts from "./pages/Contacts"
import Prices from "./pages/Prices"
import Registration from "./pages/Registration"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path="/aksiyalar" element={<StocksPage />} />
        <Route path="/kontaktlar" element={<Contacts />} />
        <Route path="/narxlar" element={<Prices />} />
        <Route path="/registratsiya" element={<Registration />} />
        <Route path="/Profillar" element={<ProfilesLayout />}>
          <Route index element={<Profiles />} />
          <Route path="/Profillar/:title" element={<ProfilesDetail />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App