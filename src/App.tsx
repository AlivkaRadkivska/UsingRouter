import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import CardGame from './pages/CardGame';
import Notebook from './pages/Notebook';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="card-game" element={<CardGame />} />
          <Route path="notebook" element={<Notebook />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
