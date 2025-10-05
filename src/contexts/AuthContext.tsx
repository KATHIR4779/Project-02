import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Profile } from '../types';

interface AuthContextType {
  user: Profile | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string, careerClass: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<Profile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<Profile | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('skillquest_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (username: string, _password: string) => {
    const savedUsers = JSON.parse(localStorage.getItem('skillquest_users') || '[]');
    const foundUser = savedUsers.find((u: Profile) => u.username === username);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('skillquest_user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (username: string, _password: string, careerClass: string) => {
    const newUser: Profile = {
      id: Math.random().toString(36).substr(2, 9),
      username,
      avatarUrl: '',
      careerClass,
      level: 1,
      totalXp: 0,
      currentXp: 0,
      xpToNextLevel: 100,
      title: 'Novice Adventurer',
      bio: '',
      isRecruiter: false,
      skills: [],
      achievements: []
    };

    const savedUsers = JSON.parse(localStorage.getItem('skillquest_users') || '[]');
    savedUsers.push(newUser);
    localStorage.setItem('skillquest_users', JSON.stringify(savedUsers));

    setUser(newUser);
    localStorage.setItem('skillquest_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skillquest_user');
  };

  const updateProfile = (updates: Partial<Profile>) => {
    if (!user) return;

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('skillquest_user', JSON.stringify(updatedUser));

    const savedUsers = JSON.parse(localStorage.getItem('skillquest_users') || '[]');
    const userIndex = savedUsers.findIndex((u: Profile) => u.id === user.id);
    if (userIndex !== -1) {
      savedUsers[userIndex] = updatedUser;
      localStorage.setItem('skillquest_users', JSON.stringify(savedUsers));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
