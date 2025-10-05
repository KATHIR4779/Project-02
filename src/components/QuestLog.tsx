import { useState } from 'react';
import { Clock, Award, Star, CheckCircle, Play, Send } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useGame } from '../contexts/GameContext';
import { quests } from '../data/mockData';
import { Quest, QuestDifficulty } from '../types';

export const QuestLog = () => {
  const { user } = useAuth();
  const { userQuests, startQuest, submitQuest, completeQuest } = useGame();
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [proofUrl, setProofUrl] = useState('');
  const [proofDescription, setProofDescription] = useState('');
  const [filter, setFilter] = useState<'all' | 'available' | 'active' | 'completed'>('all');

  if (!user) return null;

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-./g, x => x[1].toUpperCase())];
    return Icon || LucideIcons.Target;
  };

  const availableQuests = quests.filter(q => {
    if (q.careerClass && q.careerClass !== user.careerClass) return false;
    if (q.requiredLevel > user.level) return false;
    return !userQuests.some(uq => uq.quest.id === q.id);
  });

  const activeQuests = userQuests.filter(uq => uq.status === 'in_progress' || uq.status === 'submitted');
  const completedQuests = userQuests.filter(uq => uq.status === 'completed');

  const displayQuests = filter === 'available'
    ? availableQuests.map(q => ({ quest: q, isAvailable: true }))
    : filter === 'active'
    ? activeQuests.map(uq => ({ quest: uq.quest, userQuest: uq, isAvailable: false }))
    : filter === 'completed'
    ? completedQuests.map(uq => ({ quest: uq.quest, userQuest: uq, isAvailable: false }))
    : [
        ...activeQuests.map(uq => ({ quest: uq.quest, userQuest: uq, isAvailable: false })),
        ...availableQuests.map(q => ({ quest: q, isAvailable: true }))
      ];

  const getDifficultyColor = (difficulty: QuestDifficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-orange-400 bg-orange-500/20';
      case 'expert': return 'text-red-400 bg-red-500/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'tutorial': return 'text-blue-400 bg-blue-500/20';
      case 'project': return 'text-purple-400 bg-purple-500/20';
      case 'community': return 'text-emerald-400 bg-emerald-500/20';
      case 'epic': return 'text-orange-400 bg-orange-500/20';
      case 'raid': return 'text-red-400 bg-red-500/20';
      default: return 'text-slate-400 bg-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Quest Log</h1>
          <p className="text-slate-400">Complete quests to earn XP and level up your skills</p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {(['all', 'available', 'active', 'completed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
              filter === f
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {f}
            {f === 'active' && activeQuests.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                {activeQuests.length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {displayQuests.map(({ quest, userQuest, isAvailable }) => {
            const Icon = getIcon(quest.icon);
            const status = userQuest?.status;

            return (
              <div
                key={quest.id}
                onClick={() => setSelectedQuest(quest)}
                className={`bg-slate-800/50 border rounded-xl p-6 cursor-pointer transition-all hover:border-emerald-500/50 ${
                  selectedQuest?.id === quest.id ? 'border-emerald-500' : 'border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-white">{quest.title}</h3>
                      {status && (
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                          status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          status === 'submitted' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {status === 'in_progress' ? 'In Progress' :
                           status === 'submitted' ? 'Submitted' : 'Completed'}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mb-3 line-clamp-2">{quest.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(quest.type)}`}>
                        {quest.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(quest.difficulty)}`}>
                        {quest.difficulty}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {quest.xpReward} XP
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-slate-700 text-slate-300 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {quest.estimatedHours}h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {displayQuests.length === 0 && (
            <div className="text-center py-12 bg-slate-800/50 border border-slate-700 rounded-xl">
              <p className="text-slate-400">No quests found for this filter</p>
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-24 h-fit">
          {selectedQuest ? (
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {(() => {
                    const Icon = getIcon(selectedQuest.icon);
                    return (
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-slate-900" />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedQuest.title}</h2>
                    <div className="flex gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(selectedQuest.difficulty)}`}>
                        {selectedQuest.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{selectedQuest.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">XP Reward</div>
                    <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {selectedQuest.xpReward}
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Est. Time</div>
                    <div className="text-lg font-bold text-white flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedQuest.estimatedHours}h
                    </div>
                  </div>
                </div>

                {selectedQuest.skillsAwarded.length > 0 && (
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      Skills Awarded
                    </div>
                    <div className="space-y-1">
                      {selectedQuest.skillsAwarded.map((skill, idx) => (
                        <div key={idx} className="text-sm text-slate-400">
                          +{skill.xp} XP in Skill {skill.skillId}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {(() => {
                const userQuest = userQuests.find(uq => uq.quest.id === selectedQuest.id);

                if (!userQuest) {
                  return (
                    <button
                      onClick={() => startQuest(selectedQuest)}
                      disabled={selectedQuest.requiredLevel > user.level}
                      className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      Start Quest
                      {selectedQuest.requiredLevel > user.level && (
                        <span className="text-xs">(Level {selectedQuest.requiredLevel} required)</span>
                      )}
                    </button>
                  );
                }

                if (userQuest.status === 'in_progress') {
                  return (
                    <div className="space-y-4">
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                        <div className="text-sm font-semibold text-blue-400 mb-1">Quest In Progress</div>
                        <div className="text-xs text-slate-400">
                          Started {new Date(userQuest.startedAt!).toLocaleDateString()}
                        </div>
                      </div>

                      {selectedQuest.proofRequired && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Proof URL
                            </label>
                            <input
                              type="text"
                              value={proofUrl}
                              onChange={(e) => setProofUrl(e.target.value)}
                              placeholder="https://github.com/yourproject"
                              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Description
                            </label>
                            <textarea
                              value={proofDescription}
                              onChange={(e) => setProofDescription(e.target.value)}
                              placeholder="Describe what you accomplished..."
                              rows={3}
                              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                            />
                          </div>
                          <button
                            onClick={() => {
                              submitQuest(userQuest.id, proofUrl, proofDescription);
                              setProofUrl('');
                              setProofDescription('');
                            }}
                            disabled={!proofUrl || !proofDescription}
                            className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          >
                            <Send className="w-5 h-5" />
                            Submit for Verification
                          </button>
                        </>
                      )}
                    </div>
                  );
                }

                if (userQuest.status === 'submitted') {
                  return (
                    <div className="space-y-4">
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                        <div className="text-sm font-semibold text-yellow-400 mb-1">Awaiting Verification</div>
                        <div className="text-xs text-slate-400">
                          Submitted {new Date(userQuest.submittedAt!).toLocaleDateString()}
                        </div>
                      </div>
                      <button
                        onClick={() => completeQuest(userQuest.id)}
                        className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Verify & Complete (Demo)
                      </button>
                    </div>
                  );
                }

                if (userQuest.status === 'completed') {
                  return (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                      <div className="text-sm font-semibold text-green-400 mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Quest Completed!
                      </div>
                      <div className="text-xs text-slate-400">
                        Completed {new Date(userQuest.completedAt!).toLocaleDateString()}
                      </div>
                    </div>
                  );
                }
              })()}
            </div>
          ) : (
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-12 text-center">
              <p className="text-slate-400">Select a quest to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
