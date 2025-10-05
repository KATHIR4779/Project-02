import { Briefcase, Clock, Award, ExternalLink, DollarSign, Calendar } from 'lucide-react';
import { bounties } from '../data/mockData';

export const RecruiterPortal = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Bounty Board</h1>
        <p className="text-slate-400">Complete real-world challenges from companies and earn rewards</p>
      </div>

      <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">What are Bounties?</h3>
            <p className="text-slate-300 mb-3">
              Bounties are real challenges posted by companies looking for talent. Complete them to earn XP,
              monetary rewards, and potentially secure interviews for internships or jobs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
                Real Projects
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold">
                Get Paid
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold">
                Career Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {bounties.map((bounty) => (
          <div
            key={bounty.id}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{bounty.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Briefcase className="w-4 h-4" />
                  {bounty.companyName}
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold">
                {bounty.status}
              </span>
            </div>

            <p className="text-slate-300 mb-4">{bounty.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-900/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-slate-400">XP Reward</span>
                </div>
                <div className="text-lg font-bold text-emerald-400">
                  {bounty.xpReward.toLocaleString()}
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-slate-400">Compensation</span>
                </div>
                <div className="text-sm font-bold text-yellow-400">
                  {bounty.compensation.split('+')[0]}
                </div>
              </div>
            </div>

            {bounty.deadline && (
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <Calendar className="w-4 h-4" />
                Deadline: {new Date(bounty.deadline).toLocaleDateString()}
              </div>
            )}

            <div className="mb-4">
              <div className="text-xs text-slate-400 mb-2">Required Skills</div>
              <div className="flex flex-wrap gap-2">
                {bounty.requiredSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" />
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
        <Briefcase className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Are you a recruiter?</h3>
        <p className="text-slate-400 mb-4">
          Post bounties and find talented students based on their verified skills and achievements
        </p>
        <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
          Recruiter Sign Up
        </button>
      </div>
    </div>
  );
};
