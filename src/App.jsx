import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';


import './styles/App.css'

import CustomNavbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import AboutUsAndFooter from './components/AboutUsAndFooter.jsx'

import Home from './Home'
const GalleryPage = lazy(() => import('./components/GalleryPage'));

function SpinnerFallback() {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="text-center">
        <div className="spinner-border text-primary me-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}


export default function App() {
  return (
  <BrowserRouter>
    <CustomNavbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/gallery/:slug"
        element={
          <Suspense fallback={<SpinnerFallback />}>
            <GalleryPage />
          </Suspense>
        }
      />
    </Routes>
    <AboutUsAndFooter />
  </BrowserRouter>
  )
}
