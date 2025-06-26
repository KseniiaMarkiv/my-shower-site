import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css'

import CustomNavbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import AboutUsAndFooter from './components/AboutUsAndFooter.jsx'

import Home from './Home'
import GalleryPage from './components/GalleryPage'


export default function App() {
  return (
  <BrowserRouter>
    <CustomNavbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery/:slug" element={<GalleryPage />} />
    </Routes>
    <AboutUsAndFooter />
  </BrowserRouter>
  )
}
