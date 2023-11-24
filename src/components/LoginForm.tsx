import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { user, setUser } = useAuthContext();
  const redirect = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await res.json();
    setUser(data);

    if (user) redirect('/secret-link', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input type="submit" value="Login" />
    </form>
  );
}
