import { Trophy, TrendingUp, Medal } from 'lucide-react';

export const Leaderboard = () => {
  const mockLeaderboard = [
    { rank: 1, username: 'CodeMaster99', level: 32, totalXp: 48500, careerClass: 'Full-Stack Developer' },
    { rank: 2, username: 'DataWhiz', level: 28, totalXp: 42100, careerClass: 'Data Scientist' },
    { rank: 3, username: 'DesignNinja', level: 26, totalXp: 38900, careerClass: 'UX/UI Designer' },
    { rank: 4, username: 'DevOpsGuru', level: 24, totalXp: 35200, careerClass: 'DevOps Engineer' },
    { rank: 5, username: 'ReactQueen', level: 23, totalXp: 33800, careerClass: 'Full-Stack Developer' },
    { rank: 6, username: 'PythonPro', level: 22, totalXp: 31500, careerClass: 'Data Scientist' },
    { rank: 7, username: 'MobileDev', level: 21, totalXp: 29700, careerClass: 'Mobile Developer' },
    { rank: 8, username: 'CloudKing', level: 20, totalXp: 28100, careerClass: 'DevOps Engineer' },
    { rank: 9, username: 'UIWizard', level: 19, totalXp: 26400, careerClass: 'UX/UI Designer' },
    { rank: 10, username: 'APIBuilder', level: 18, totalXp: 24800, careerClass: 'Full-Stack Developer' }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Medal className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-slate-300" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-orange-400" />;
    return null;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-slate-400">Compete with fellow adventurers and climb to the top</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {mockLeaderboard.slice(0, 3).map((entry) => (
          <div
            key={entry.rank}
            className={`bg-gradient-to-br border-2 rounded-2xl p-6 ${
              entry.rank === 1
                ? 'from-yellow-500/10 to-orange-500/10 border-yellow-500/50'
                : entry.rank === 2
                ? 'from-slate-500/10 to-slate-600/10 border-slate-400/50'
                : 'from-orange-500/10 to-orange-600/10 border-orange-500/50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl font-bold">#{entry.rank}</div>
              {getRankIcon(entry.rank)}
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center text-2xl font-bold text-slate-900 mb-4">
              {entry.username.charAt(0).toUpperCase()}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{entry.username}</h3>
            <p className="text-sm text-slate-400 mb-3">{entry.careerClass}</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">Level</div>
                <div className="text-lg font-bold text-white">{entry.level}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Total XP</div>
                <div className="text-lg font-bold text-emerald-400">
                  {entry.totalXp.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900/50 border-b border-slate-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Player
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Career Class
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Level
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Total XP
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {mockLeaderboard.map((entry) => (
                <tr key={entry.rank} className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getRankIcon(entry.rank)}
                      <span className="text-lg font-bold text-white">#{entry.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center text-sm font-bold text-slate-900">
                        {entry.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-semibold text-white">{entry.username}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300">{entry.careerClass}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold text-white">{entry.level}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="font-bold text-emerald-400">
                        {entry.totalXp.toLocaleString()}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <Trophy className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">Weekly Challenge</h3>
            <p className="text-sm text-slate-300">
              Complete 5 quests this week to earn bonus XP and climb the leaderboard!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
