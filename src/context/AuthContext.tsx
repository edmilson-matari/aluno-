// src/context/AuthContext.tsx
import { createContext, useContext, useState } from 'react';
import type {ReactNode} from 'react'

interface AuthContextType {
  isAuthenticated: boolean;
  userName: string;
  login: (name?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('Aluno'); // valor padrão

  const login = (name: string = 'Francisco Afonso') => {
    setIsAuthenticated(true);
    setUserName(name);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserName('Aluno');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook customizado para usar o contexto de forma segura
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}