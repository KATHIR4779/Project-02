import { Sword, Target, Users, Trophy, TrendingUp, Zap } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Sword className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold text-white">SkillQuest</span>
            </div>
            <button
              onClick={onGetStarted}
              className="px-6 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6">
            Level Up Your Career
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Transform your professional journey into an epic RPG adventure. Complete quests, earn XP,
            unlock skills, and build a portfolio that gets you hired.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-lg rounded-xl font-bold hover:from-emerald-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
          >
            Start Your Quest
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Clear Roadmap</h3>
            <p className="text-slate-300">
              Follow a structured skill tree tailored to your dream career. No more confusion about what to learn next.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Track Progress</h3>
            <p className="text-slate-300">
              Watch your skills level up in real-time. Every quest completed brings you closer to your career goals.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-colors">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Get Hired</h3>
            <p className="text-slate-300">
              Build a verifiable portfolio that recruiters love. Your achievements speak louder than a resume.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Choose Your Class</h4>
              <p className="text-slate-300 text-sm">Select your dream career path</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Complete Quests</h4>
              <p className="text-slate-300 text-sm">Learn skills through real projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Level Up</h4>
              <p className="text-slate-300 text-sm">Earn XP and unlock new abilities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Get Discovered</h4>
              <p className="text-slate-300 text-sm">Recruiters find you based on skills</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <Users className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join a Guild</h3>
            <p className="text-slate-300 mb-4">
              Team up with other students to tackle epic challenges. Compete on leaderboards and win hackathons together.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Collaboration</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Competition</span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Complete Bounties</h3>
            <p className="text-slate-300 mb-4">
              Take on real challenges posted by companies. Earn rewards and get interviewed for internships.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Real Projects</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Get Paid</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-400">
            <p>SkillQuest - Transform Your Career Journey</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
