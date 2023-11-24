import AppNav from '../components/AppNav';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <AppNav />
      </header>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
