import { createContext, useState, useContext } from 'react';

type UserType = {
  firstName: string;
  username: string;
  password: string;
};

type AuthContextType = {
  user?: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const authContext = useContext(AuthContext);

  if (!authContext)
    throw new Error("Don't use AuthContext outside AuthProvider");

  return authContext;
}
