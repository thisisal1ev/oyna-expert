import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// pages
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import PageNotFound from './pages/PageNotFound'
import ProfilesLayout from "./layouts/ProfilesLayout"
import Profiles from "./pages/Profiles"
import ProfilesDetail from "./pages/ProfilesDetail"
import StocksPage from "./pages/StocksPage"
import Contacts from "./pages/Contacts"
import Prices from "./pages/Prices"
import Registration from "./pages/Registration"
import WindowsLayout from "./layouts/WindowsLayout"
import PlasticWindows from './pages/PlasticWindows'
import WindowsDetail from "./pages/WindowsDetail"
import Balconies from "./pages/Balconies"
import BalconiesLayot from "./layouts/BalconiesLayot"
import BalconiesDetail from "./pages/BalconiesDetail"
import ServicesLayot from './layouts/ServicesLayot'
import Services from "./pages/Services"
import ServicesDetail from "./pages/ServicesDetail"
import Sertific from "./pages/Sertific"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/aksiyalar" element={<StocksPage />} />
        <Route path="/kontaktlar" element={<Contacts />} />
        <Route path="/narxlar" element={<Prices />} />
        <Route path="/sertifikatlar" element={<Sertific />} />
        <Route path="/registratsiya" element={<Registration />} />
        <Route path="/profillar" element={<ProfilesLayout />}>
          <Route index element={<Profiles />} />
          <Route path="/profillar/:title" element={<ProfilesDetail />} />
        </Route>
        <Route path="/plastik oynalar" element={<WindowsLayout />}>
          <Route index element={<PlasticWindows />} />
          <Route path="/plastik oynalar/:title" element={<WindowsDetail />} />
        </Route>
        <Route path="/balkonlar" element={<BalconiesLayot />}>
          <Route index element={<Balconies />} />
          <Route path="/balkonlar/:title" element={<BalconiesDetail />} />
        </Route>
        <Route path="/xizmat ko'rsatish" element={<ServicesLayot />}>
          <Route index element={<Services />} />
          <Route path="/xizmat ko'rsatish/:title" element={<ServicesDetail />} />
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