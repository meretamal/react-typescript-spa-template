import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from '@/components/layout/footer.component';
import { Hero } from '@/components/layout/hero.component';
import { Navbar } from '@/components/layout/navbar.component';

const HomePage = lazy(() =>
  import('@/pages/static/home.page').then((module) => ({
    default: module.HomePage,
  })),
);
const NotFoundPage = lazy(() =>
  import('@/pages/errors/not-found.page').then((module) => ({
    default: module.NotFoundPage,
  })),
);

export function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Hero navbar />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
