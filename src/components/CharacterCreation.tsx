import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { careerClasses } from '../data/mockData';

interface CharacterCreationProps {
  onComplete: (username: string, password: string, careerClass: string) => void;
  isLogin: boolean;
  onToggleMode: () => void;
}

export const CharacterCreation = ({ onComplete, isLogin, onToggleMode }: CharacterCreationProps) => {
  const [step, setStep] = useState(isLogin ? 2 : 1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSubmit = () => {
    if (isLogin) {
      onComplete(username, password, '');
    } else {
      if (username && password && selectedClass) {
        onComplete(username, password, selectedClass);
      }
    }
  };

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-./g, x => x[1].toUpperCase())];
    return Icon || LucideIcons.Code;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">
              {isLogin ? 'Welcome Back' : 'Character Creation'}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {isLogin ? 'Continue Your Journey' : 'Begin Your Adventure'}
          </h1>
          <p className="text-slate-400">
            {isLogin ? 'Log in to continue leveling up' : 'Create your character to start your career quest'}
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
          {!isLogin && step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Choose Your Career Class</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {careerClasses.map((careerClass) => {
                  const Icon = getIcon(careerClass.icon);
                  return (
                    <button
                      key={careerClass.id}
                      onClick={() => setSelectedClass(careerClass.name)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        selectedClass === careerClass.name
                          ? 'border-emerald-500 bg-emerald-500/10'
                          : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: careerClass.color + '20' }}
                        >
                          <Icon className="w-6 h-6" style={{ color: careerClass.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{careerClass.name}</h3>
                          <p className="text-sm text-slate-400">{careerClass.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!selectedClass}
                className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {isLogin ? 'Login' : 'Create Account'}
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your password"
                  />
                </div>

                {!isLogin && selectedClass && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <div className="text-sm text-slate-300 mb-1">Selected Class:</div>
                    <div className="font-bold text-emerald-400">{selectedClass}</div>
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={!username || !password}
                className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
              >
                {isLogin ? 'Login' : 'Create Character'} <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center">
                <button
                  onClick={onToggleMode}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
                </button>
              </div>

              {!isLogin && (
                <button
                  onClick={() => setStep(1)}
                  className="w-full mt-4 py-2 text-slate-400 hover:text-white transition-colors"
                >
                  Back to Class Selection
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
