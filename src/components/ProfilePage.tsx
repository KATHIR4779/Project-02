import { Award, Star, Trophy, TrendingUp, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useGame } from '../contexts/GameContext';

export const ProfilePage = () => {
  const { user } = useAuth();
  const { userQuests } = useGame();

  if (!user) return null;

  const completedQuests = userQuests.filter(uq => uq.status === 'completed');
  const totalXpEarned = completedQuests.reduce((sum, uq) => sum + uq.quest.xpReward, 0);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-slate-500 bg-slate-500/10';
      case 'rare': return 'border-blue-500 bg-blue-500/10';
      case 'epic': return 'border-purple-500 bg-purple-500/10';
      case 'legendary': return 'border-orange-500 bg-orange-500/10';
      default: return 'border-slate-500 bg-slate-500/10';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center text-4xl font-bold text-slate-900">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-white">{user.username}</h1>
              <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold">
                Level {user.level}
              </span>
            </div>
            <p className="text-lg text-emerald-400 font-semibold mb-2">{user.title}</p>
            <p className="text-slate-400 mb-4">{user.careerClass}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">{user.totalXp.toLocaleString()}</span>
                <span className="text-slate-400">Total XP</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="font-semibold">{completedQuests.length}</span>
                <span className="text-slate-400">Quests Completed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-600">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-300">Progress to Level {user.level + 1}</span>
            <span className="text-sm font-semibold text-emerald-400">
              {user.currentXp} / {user.xpToNextLevel} XP
            </span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
              style={{ width: `${(user.currentXp / user.xpToNextLevel) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{user.level}</div>
              <div className="text-sm text-slate-400">Character Level</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{completedQuests.length}</div>
              <div className="text-sm text-slate-400">Quests Complete</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{user.achievements.length}</div>
              <div className="text-sm text-slate-400">Achievements</div>
            </div>
          </div>
        </div>
      </div>

      {user.skills.length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {user.skills.map((userSkill) => (
              <div key={userSkill.skill.id} className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white">{userSkill.skill.name}</span>
                  <span className="text-sm font-bold text-emerald-400">Level {userSkill.level}</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                    style={{ width: `${(userSkill.xp % 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-slate-400 mt-1">{userSkill.xp} XP</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {user.achievements.length > 0 ? (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Achievements</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {user.achievements.map((userAchievement) => (
              <div
                key={userAchievement.achievement.id}
                className={`border-2 rounded-xl p-4 ${getRarityColor(userAchievement.achievement.rarity)}`}
              >
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-bold text-white mb-1">{userAchievement.achievement.name}</h3>
                <p className="text-sm text-slate-400 mb-2">{userAchievement.achievement.description}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3 h-3" />
                  {new Date(userAchievement.earnedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-12 text-center">
          <Trophy className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No Achievements Yet</h3>
          <p className="text-slate-400">Complete quests to unlock achievements!</p>
        </div>
      )}

      {completedQuests.length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Quest History</h2>
          </div>
          <div className="space-y-3">
            {completedQuests.slice(0, 5).map((userQuest) => (
              <div key={userQuest.id} className="flex items-center justify-between bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <div>
                  <h4 className="font-semibold text-white">{userQuest.quest.title}</h4>
                  <p className="text-sm text-slate-400">
                    Completed {new Date(userQuest.completedAt!).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-lg">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-emerald-400">+{userQuest.quest.xpReward} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
