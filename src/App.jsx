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
import BalconiesLayot from "./layouts/BalconiesLayout"
import BalconiesDetail from "./pages/BalconiesDetail"
import ServicesLayot from './layouts/ServicesLayout'
import Services from "./pages/Services"
import ServicesDetail from "./pages/ServicesDetail"
import Sertific from "./pages/Sertific"
import Payment from "./pages/Payment"
import PaymentLayout from "./layouts/PaymentLayout"
import Delevery from "./pages/Delevery"
import PaymentMethods from "./pages/PaymentMethods"
import AboutCompanyLayout from "./layouts/AboutCompanyLayout"
import AboutCompany from "./pages/AboutCompany"
import OurTeam from "./pages/OurTeam"
import ReviewsAboutTheCompany from "./pages/ReviewsAboutTheCompany"
import NewsLayout from './layouts/NewsLayout'
import News from "./pages/News"
import NewsDetail from "./pages/NewsDetail"
import NewsSections from "./pages/NewsSections"
import BlogLayout from "./layouts/BlogLayout"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail"

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
        <Route path="yangiliklar" element={<NewsLayout />}>b
          <Route index element={<News />} />
          <Route path="/yangiliklar/:uniqueName" element={<NewsSections />} />
          <Route path="/yangiliklar/:uniqueName/:title" element={<NewsDetail />} />
        </Route>
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Blog />} />
          <Route path="/blog/:title" element={<BlogDetail />} />
        </Route>
        <Route path="/to&apos;lov" element={<PaymentLayout />}>
          <Route index element={<Payment />} />
          <Route path="/to&apos;lov/to&apos;lov usullari" element={<PaymentMethods />} />
          <Route path="/to&apos;lov/yetkazib berish" element={<Delevery />} />
        </Route>
        <Route path="/kompaniya haqida" element={<AboutCompanyLayout />}>
          <Route index element={<AboutCompany />} />
          <Route path="/kompaniya haqida/bizning jamoamiz" element={<OurTeam />} />
          <Route path="/kompaniya haqida/biz haqimizda sharhlar" element={<ReviewsAboutTheCompany />} />
        </Route>
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