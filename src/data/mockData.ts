import { CareerClass, Quest, Achievement, Guild, Bounty, Skill } from '../types';

export const careerClasses: CareerClass[] = [
  {
    id: '1',
    name: 'Full-Stack Developer',
    description: 'Master both frontend and backend development to build complete web applications',
    icon: 'code',
    color: '#10B981'
  },
  {
    id: '2',
    name: 'Data Scientist',
    description: 'Analyze data, build models, and extract insights using statistics and machine learning',
    icon: 'bar-chart',
    color: '#3B82F6'
  },
  {
    id: '3',
    name: 'Product Manager',
    description: 'Lead product development from strategy to execution, bridging tech and business',
    icon: 'briefcase',
    color: '#8B5CF6'
  },
  {
    id: '4',
    name: 'DevOps Engineer',
    description: 'Build and maintain infrastructure, automate deployments, and ensure system reliability',
    icon: 'server',
    color: '#F59E0B'
  },
  {
    id: '5',
    name: 'Mobile Developer',
    description: 'Create native and cross-platform mobile applications for iOS and Android',
    icon: 'smartphone',
    color: '#EC4899'
  },
  {
    id: '6',
    name: 'UX/UI Designer',
    description: 'Design beautiful and intuitive user experiences that delight users',
    icon: 'palette',
    color: '#EF4444'
  }
];

export const skills: Skill[] = [
  { id: 's1', name: 'Python', description: 'General-purpose programming language', category: 'Programming', icon: 'code' },
  { id: 's2', name: 'JavaScript', description: 'Web programming language', category: 'Programming', icon: 'code' },
  { id: 's3', name: 'React', description: 'Frontend framework', category: 'Frontend', icon: 'layout' },
  { id: 's4', name: 'Node.js', description: 'Backend runtime', category: 'Backend', icon: 'server' },
  { id: 's5', name: 'Machine Learning', description: 'AI and predictive modeling', category: 'Data Science', icon: 'cpu' },
  { id: 's6', name: 'SQL', description: 'Database querying', category: 'Database', icon: 'database' },
  { id: 's7', name: 'Git', description: 'Version control', category: 'Tools', icon: 'git-branch' },
  { id: 's8', name: 'Docker', description: 'Containerization', category: 'DevOps', icon: 'package' },
  { id: 's9', name: 'AWS', description: 'Cloud computing', category: 'Cloud', icon: 'cloud' },
  { id: 's10', name: 'Figma', description: 'Design tool', category: 'Design', icon: 'figma' }
];

export const quests: Quest[] = [
  {
    id: 'q1',
    title: 'Build Your First Website',
    description: 'Create and deploy a personal portfolio website using HTML, CSS, and JavaScript',
    type: 'tutorial',
    difficulty: 'beginner',
    xpReward: 100,
    careerClass: 'Full-Stack Developer',
    requiredLevel: 1,
    estimatedHours: 5,
    proofRequired: true,
    skillsAwarded: [{ skillId: 's2', xp: 50 }, { skillId: 's3', xp: 30 }],
    icon: 'globe'
  },
  {
    id: 'q2',
    title: 'Complete Python Basics Course',
    description: 'Finish an online Python fundamentals course and submit your certificate',
    type: 'tutorial',
    difficulty: 'beginner',
    xpReward: 150,
    careerClass: 'Data Scientist',
    requiredLevel: 1,
    estimatedHours: 10,
    proofRequired: true,
    skillsAwarded: [{ skillId: 's1', xp: 100 }],
    icon: 'book-open'
  },
  {
    id: 'q3',
    title: 'Contribute to Open Source',
    description: 'Make a meaningful contribution to an open-source project on GitHub',
    type: 'project',
    difficulty: 'intermediate',
    xpReward: 300,
    requiredLevel: 5,
    estimatedHours: 15,
    proofRequired: true,
    skillsAwarded: [{ skillId: 's7', xp: 100 }],
    icon: 'github'
  },
  {
    id: 'q4',
    title: 'Attend Tech Meetup',
    description: 'Attend a local tech meetup and write a summary of what you learned',
    type: 'community',
    difficulty: 'beginner',
    xpReward: 75,
    requiredLevel: 1,
    estimatedHours: 3,
    proofRequired: true,
    skillsAwarded: [],
    icon: 'users'
  },
  {
    id: 'q5',
    title: 'Complete 2-Month Internship',
    description: 'Secure and successfully complete a software development internship',
    type: 'epic',
    difficulty: 'advanced',
    xpReward: 1000,
    requiredLevel: 10,
    estimatedHours: 320,
    proofRequired: true,
    skillsAwarded: [],
    icon: 'trophy'
  },
  {
    id: 'q6',
    title: 'Win a Hackathon',
    description: 'Participate in and win a prize at a hackathon competition',
    type: 'raid',
    difficulty: 'expert',
    xpReward: 2000,
    requiredLevel: 15,
    estimatedHours: 48,
    proofRequired: true,
    skillsAwarded: [],
    icon: 'zap'
  },
  {
    id: 'q7',
    title: 'Build a REST API',
    description: 'Create a fully functional REST API with authentication and database integration',
    type: 'project',
    difficulty: 'intermediate',
    xpReward: 250,
    careerClass: 'Full-Stack Developer',
    requiredLevel: 5,
    estimatedHours: 12,
    proofRequired: true,
    skillsAwarded: [{ skillId: 's4', xp: 80 }, { skillId: 's6', xp: 50 }],
    icon: 'database'
  },
  {
    id: 'q8',
    title: 'Deploy with Docker',
    description: 'Containerize an application and deploy it using Docker',
    type: 'project',
    difficulty: 'intermediate',
    xpReward: 200,
    careerClass: 'DevOps Engineer',
    requiredLevel: 7,
    estimatedHours: 8,
    proofRequired: true,
    skillsAwarded: [{ skillId: 's8', xp: 100 }],
    icon: 'package'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'a1',
    name: 'First Steps',
    description: 'Complete your first quest',
    icon: 'footprints',
    rarity: 'common'
  },
  {
    id: 'a2',
    name: 'Level 10',
    description: 'Reach character level 10',
    icon: 'star',
    rarity: 'common'
  },
  {
    id: 'a3',
    name: 'Quest Master',
    description: 'Complete 50 quests',
    icon: 'scroll',
    rarity: 'rare'
  },
  {
    id: 'a4',
    name: 'Hackathon Hero',
    description: 'Win a hackathon',
    icon: 'crown',
    rarity: 'epic'
  },
  {
    id: 'a5',
    name: 'Open Source Champion',
    description: 'Make 10 open source contributions',
    icon: 'heart',
    rarity: 'rare'
  },
  {
    id: 'a6',
    name: 'Guild Master',
    description: 'Create and lead a guild to level 10',
    icon: 'shield',
    rarity: 'epic'
  },
  {
    id: 'a7',
    name: 'Legend',
    description: 'Reach level 50',
    icon: 'gem',
    rarity: 'legendary'
  }
];

export const guilds: Guild[] = [
  {
    id: 'g1',
    name: 'Code Warriors',
    description: 'A guild dedicated to mastering competitive programming and algorithms',
    logoUrl: '',
    leaderId: 'user1',
    totalXp: 15000,
    level: 12,
    maxMembers: 20,
    isRecruiting: true,
    memberCount: 15
  },
  {
    id: 'g2',
    name: 'Data Wizards',
    description: 'Exploring the magical world of data science and machine learning',
    logoUrl: '',
    leaderId: 'user2',
    totalXp: 12000,
    level: 10,
    maxMembers: 20,
    isRecruiting: true,
    memberCount: 12
  },
  {
    id: 'g3',
    name: 'DevOps Elite',
    description: 'Building and scaling infrastructure like pros',
    logoUrl: '',
    leaderId: 'user3',
    totalXp: 9000,
    level: 8,
    maxMembers: 15,
    isRecruiting: false,
    memberCount: 15
  }
];

export const bounties: Bounty[] = [
  {
    id: 'b1',
    companyId: 'comp1',
    companyName: 'TechCorp',
    title: 'Build a Chrome Extension',
    description: 'Create a productivity Chrome extension with at least 3 features',
    xpReward: 500,
    compensation: '$500 + Internship Interview',
    deadline: new Date('2025-11-01'),
    requiredSkills: ['JavaScript', 'Chrome APIs'],
    status: 'open'
  },
  {
    id: 'b2',
    companyId: 'comp2',
    companyName: 'DataFlow Inc',
    title: 'Data Analysis Challenge',
    description: 'Analyze sales data and create visualizations with insights',
    xpReward: 400,
    compensation: '$400',
    deadline: new Date('2025-10-20'),
    requiredSkills: ['Python', 'Pandas', 'Visualization'],
    status: 'open'
  }
];
