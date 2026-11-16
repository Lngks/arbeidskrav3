import { Navigate, Route, Routes } from "react-router"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AboutPage } from "./pages/AboutPage"
import { CabinsPage } from "./pages/CabinsPage"
import { DestinationsPage } from "./pages/DestinationsPage"
import { HikeDetailPage } from "./pages/HikeDetailPage"
import { HikesPage } from "./pages/HikesPage"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/turer" element={<HikesPage />} />
          <Route path="/turer/:id" element={<HikeDetailPage />} />
          <Route path="/turmal" element={<DestinationsPage />} />
          <Route path="/hytter" element={<CabinsPage />} />
          <Route path="/om" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
