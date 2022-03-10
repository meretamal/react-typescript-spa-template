import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import Navbar from "./components/layout/navbar.component";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}
