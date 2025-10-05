import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';
import { LandingPage } from './components/LandingPage';
import { CharacterCreation } from './components/CharacterCreation';
import { Dashboard } from './components/Dashboard';

const AppContent = () => {
  const { user, isAuthenticated, login, signup } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleAuthComplete = async (username: string, password: string, careerClass: string) => {
    try {
      if (isLoginMode) {
        await login(username, password);
      } else {
        await signup(username, password, careerClass);
      }
    } catch (error) {
      console.error('Auth error:', error);
      alert('Authentication failed. Please try again.');
    }
  };

  if (isAuthenticated && user) {
    return (
      <GameProvider>
        <Dashboard />
      </GameProvider>
    );
  }

  if (showAuth) {
    return (
      <CharacterCreation
        onComplete={handleAuthComplete}
        isLogin={isLoginMode}
        onToggleMode={() => setIsLoginMode(!isLoginMode)}
      />
    );
  }

  return <LandingPage onGetStarted={() => setShowAuth(true)} />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
