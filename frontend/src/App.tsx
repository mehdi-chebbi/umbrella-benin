import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/ui/BackToTop';
import ProtectedRoute from './components/ProtectedRoute';
import ChatAgent from './components/ChatAgent';
import Accueil from './pages/Accueil';
import Indicateurs from './pages/Indicateurs';
import APropos from './pages/APropos';
import Geoportail from './pages/Geoportail';
import AdminLogin from './pages/admin/Login';
import AdminLayout from './pages/admin/Layout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminLayers from './pages/admin/Layers';
import AdminClips from './pages/admin/Clips';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public pages with Navbar + Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="flex-1">
                  <Accueil />
                </main>
                <Footer />
                <BackToTop />
              </>
            }
          />
          <Route
            path="/indicateurs"
            element={
              <>
                <Navbar />
                <main className="flex-1">
                  <Indicateurs />
                </main>
                <Footer />
                <BackToTop />
              </>
            }
          />
          <Route
            path="/a-propos"
            element={
              <>
                <Navbar />
                <main className="flex-1">
                  <APropos />
                </main>
                <Footer />
                <BackToTop />
              </>
            }
          />

          {/* Geoportail — has its own Navbar */}
          <Route path="/geoportail" element={<Geoportail />} />

          {/* Admin Login — standalone */}
          <Route path="/admin/connexion" element={<AdminLogin />} />

          {/* Admin Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="utilisateurs" element={<AdminUsers />} />
            <Route path="couches" element={<AdminLayers />} />
            <Route path="decoupages" element={<AdminClips />} />
          </Route>

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Chat agent — always available */}
        <ChatAgent />
      </AuthProvider>
    </BrowserRouter>
  );
}
