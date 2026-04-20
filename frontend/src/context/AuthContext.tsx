import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { AdminUser } from '../types';
import { apiClient } from '../api/client';

interface AuthContextType {
  user: AdminUser | null;
  token: string | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isLoading: true,
  login: async () => ({ success: false }),
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('umbrella_token');
    if (storedToken) {
      setToken(storedToken);
      apiClient.getMe().then((response) => {
        if (response.success && response.data) {
          setUser(response.data);
        } else {
          localStorage.removeItem('umbrella_token');
          setToken(null);
        }
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const response = await apiClient.login({ username, password });
    if (response.success && response.data) {
      const { token: newToken, user: newUser } = response.data;
      localStorage.setItem('umbrella_token', newToken);
      setToken(newToken);
      setUser(newUser);
      return { success: true };
    }
    return { success: false, message: response.message };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('umbrella_token');
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
