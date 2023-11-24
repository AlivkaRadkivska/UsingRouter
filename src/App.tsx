import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import CardGame from './pages/CardGame';
import Notebook from './pages/Notebook';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Secret from './pages/Secret';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="card-game" element={<CardGame />} />
            <Route path="notebook" element={<Notebook />} />
            <Route path="login" element={<Login />} />
            <Route
              path="secret-link"
              element={
                <ProtectedRoute>
                  <Secret />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
