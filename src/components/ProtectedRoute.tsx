import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthContext();

  return user ? <>{children}</> : <Navigate to="/err" replace />;
}
