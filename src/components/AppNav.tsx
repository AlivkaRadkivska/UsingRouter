import { NavLink } from 'react-router-dom';

export default function AppNav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="card-game">Card Game</NavLink>
      <NavLink to="notebook">Notebook</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="secret-link">Secret</NavLink>
    </nav>
  );
}
