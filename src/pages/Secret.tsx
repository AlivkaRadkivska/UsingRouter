import { useAuthContext } from '../contexts/AuthContext';

export default function Secret() {
  const { user } = useAuthContext();

  return (
    <div>
      <p>Hi there, {user?.firstName}. That's a secret link</p>
    </div>
  );
}
