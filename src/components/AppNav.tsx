import { NavLink } from 'react-router-dom';

export default function AppNav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="card-game">Card Game</NavLink>
      <NavLink to="notebook">Notebook</NavLink>
      <NavLink to="signin">Sign in</NavLink>
    </nav>
  );
}
