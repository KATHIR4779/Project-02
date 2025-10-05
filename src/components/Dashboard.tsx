import { useState } from 'react';
import { User, Target, Trophy, Users, Briefcase, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { QuestLog } from './QuestLog';
import { ProfilePage } from './ProfilePage';
import { Leaderboard } from './Leaderboard';
import { GuildsPage } from './GuildsPage';
import { RecruiterPortal } from './RecruiterPortal';

type TabType = 'quests' | 'profile' | 'leaderboard' | 'guilds' | 'bounties';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('quests');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!user) return null;

  const xpPercentage = (user.currentXp / user.xpToNextLevel) * 100;

  const tabs = [
    { id: 'quests' as TabType, label: 'Quest Log', icon: Target },
    { id: 'profile' as TabType, label: 'Profile', icon: User },
    { id: 'leaderboard' as TabType, label: 'Leaderboard', icon: Trophy },
    { id: 'guilds' as TabType, label: 'Guilds', icon: Users },
    { id: 'bounties' as TabType, label: 'Bounties', icon: Briefcase }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg"></div>
                <span className="text-xl font-bold text-white hidden sm:block">SkillQuest</span>
              </div>

              <div className="hidden lg:flex items-center gap-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-500 text-white'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <div>
                  <div className="text-xs text-slate-400">Level {user.level}</div>
                  <div className="text-sm font-bold text-white">{user.username}</div>
                </div>
                <div className="w-px h-10 bg-slate-700"></div>
                <div className="min-w-[120px]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs text-slate-400">XP</span>
                    <span className="text-xs font-semibold text-emerald-400">
                      {user.currentXp}/{user.xpToNextLevel}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                      style={{ width: `${xpPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <button
                onClick={logout}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors hidden sm:block"
              >
                <LogOut className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-700 py-4">
              <div className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-500 text-white'
                          : 'text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
                <button
                  onClick={logout}
                  className="w-full px-4 py-3 rounded-lg flex items-center gap-3 text-slate-400 hover:bg-slate-800 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'quests' && <QuestLog />}
        {activeTab === 'profile' && <ProfilePage />}
        {activeTab === 'leaderboard' && <Leaderboard />}
        {activeTab === 'guilds' && <GuildsPage />}
        {activeTab === 'bounties' && <RecruiterPortal />}
      </main>
    </div>
  );
};
