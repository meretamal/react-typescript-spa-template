import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/static/home.page';
import NotFoundPage from './pages/errors/not-found.page';
import Footer from './components/layout/footer.component';
import Navbar from './components/layout/navbar.component';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
