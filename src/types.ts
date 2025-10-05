export type QuestType = 'tutorial' | 'project' | 'community' | 'epic' | 'raid';
export type QuestDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type QuestStatus = 'available' | 'in_progress' | 'submitted' | 'completed' | 'verified';
export type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary';
export type GuildRole = 'leader' | 'officer' | 'member';

export interface CareerClass {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

export interface UserSkill {
  skill: Skill;
  level: number;
  xp: number;
  unlockedAt: Date;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  type: QuestType;
  difficulty: QuestDifficulty;
  xpReward: number;
  careerClass?: string;
  requiredLevel: number;
  estimatedHours: number;
  proofRequired: boolean;
  skillsAwarded: { skillId: string; xp: number }[];
  icon: string;
}

export interface UserQuest {
  id: string;
  quest: Quest;
  status: QuestStatus;
  proofUrl?: string;
  proofDescription?: string;
  startedAt?: Date;
  submittedAt?: Date;
  completedAt?: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: AchievementRarity;
}

export interface UserAchievement {
  achievement: Achievement;
  earnedAt: Date;
}

export interface Profile {
  id: string;
  username: string;
  avatarUrl: string;
  careerClass: string;
  level: number;
  totalXp: number;
  currentXp: number;
  xpToNextLevel: number;
  title: string;
  bio: string;
  isRecruiter: boolean;
  skills: UserSkill[];
  achievements: UserAchievement[];
}

export interface Guild {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  leaderId: string;
  totalXp: number;
  level: number;
  maxMembers: number;
  isRecruiting: boolean;
  memberCount: number;
}

export interface LeaderboardEntry {
  rank: number;
  profile: Profile;
  score: number;
}

export interface Bounty {
  id: string;
  companyId: string;
  companyName: string;
  title: string;
  description: string;
  xpReward: number;
  compensation: string;
  deadline?: Date;
  requiredSkills: string[];
  status: 'open' | 'in_progress' | 'completed' | 'closed';
}
