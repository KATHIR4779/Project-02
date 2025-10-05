import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserQuest, Quest } from '../types';
import { useAuth } from './AuthContext';

interface GameContextType {
  userQuests: UserQuest[];
  startQuest: (quest: Quest) => void;
  submitQuest: (questId: string, proofUrl: string, proofDescription: string) => void;
  completeQuest: (questId: string) => void;
  addXp: (amount: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const { user, updateProfile } = useAuth();
  const [userQuests, setUserQuests] = useState<UserQuest[]>([]);

  useEffect(() => {
    if (user) {
      const savedQuests = localStorage.getItem(`skillquest_quests_${user.id}`);
      if (savedQuests) {
        setUserQuests(JSON.parse(savedQuests));
      }
    }
  }, [user]);

  const saveQuests = (quests: UserQuest[]) => {
    if (user) {
      localStorage.setItem(`skillquest_quests_${user.id}`, JSON.stringify(quests));
      setUserQuests(quests);
    }
  };

  const startQuest = (quest: Quest) => {
    const newUserQuest: UserQuest = {
      id: Math.random().toString(36).substr(2, 9),
      quest,
      status: 'in_progress',
      startedAt: new Date()
    };
    saveQuests([...userQuests, newUserQuest]);
  };

  const submitQuest = (questId: string, proofUrl: string, proofDescription: string) => {
    const updatedQuests = userQuests.map(uq =>
      uq.id === questId
        ? { ...uq, status: 'submitted' as const, proofUrl, proofDescription, submittedAt: new Date() }
        : uq
    );
    saveQuests(updatedQuests);
  };

  const completeQuest = (questId: string) => {
    const userQuest = userQuests.find(uq => uq.id === questId);
    if (!userQuest) return;

    const updatedQuests = userQuests.map(uq =>
      uq.id === questId
        ? { ...uq, status: 'completed' as const, completedAt: new Date() }
        : uq
    );
    saveQuests(updatedQuests);

    addXp(userQuest.quest.xpReward);
  };

  const addXp = (amount: number) => {
    if (!user) return;

    let newCurrentXp = user.currentXp + amount;
    let newTotalXp = user.totalXp + amount;
    let newLevel = user.level;
    let newXpToNext = user.xpToNextLevel;

    while (newCurrentXp >= newXpToNext) {
      newCurrentXp -= newXpToNext;
      newLevel++;
      newXpToNext = Math.floor(100 * Math.pow(1.5, newLevel - 1));
    }

    updateProfile({
      currentXp: newCurrentXp,
      totalXp: newTotalXp,
      level: newLevel,
      xpToNextLevel: newXpToNext
    });
  };

  return (
    <GameContext.Provider
      value={{
        userQuests,
        startQuest,
        submitQuest,
        completeQuest,
        addXp
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
