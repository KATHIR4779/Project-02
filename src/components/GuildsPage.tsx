import { Users, Shield, TrendingUp, UserPlus } from 'lucide-react';
import { guilds } from '../data/mockData';

export const GuildsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Guilds</h1>
          <p className="text-slate-400">Join forces with other adventurers to tackle epic challenges</p>
        </div>
        <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Create Guild
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guilds.map((guild) => (
          <div
            key={guild.id}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center text-2xl font-bold text-slate-900">
                {guild.name.charAt(0)}
              </div>
              {guild.isRecruiting && (
                <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold">
                  Recruiting
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{guild.name}</h3>
            <p className="text-sm text-slate-400 mb-4">{guild.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-900/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-slate-400">Level</span>
                </div>
                <div className="text-lg font-bold text-white">{guild.level}</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">Members</span>
                </div>
                <div className="text-lg font-bold text-white">
                  {guild.memberCount}/{guild.maxMembers}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs text-slate-400 mb-1">Total Guild XP</div>
              <div className="text-xl font-bold text-emerald-400">
                {guild.totalXp.toLocaleString()}
              </div>
            </div>

            <button
              disabled={!guild.isRecruiting || guild.memberCount >= guild.maxMembers}
              className="w-full py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              {guild.isRecruiting ? 'Join Guild' : 'Not Recruiting'}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Guild Benefits</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                Access to exclusive raid quests with massive XP rewards
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                Collaborate on group projects and learn from peers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                Compete in guild vs guild tournaments
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                Shared resources and mentorship opportunities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
