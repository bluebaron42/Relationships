import React, { useCallback, useEffect, useState } from 'react';
import {
  Heart,
  Users,
  Clock,
  CheckCircle,
  X,
  Menu,
  Layers,
  Dna,
  Eye,
  EyeOff,
  Search,
  GitMerge,
  Activity,
  ChevronRight,
  ChevronLeft,
  Projector,
  Maximize2,
  Minimize2,
  Trophy,
  Zap,
  HeartCrack,
  Star,
  AlertTriangle,
  AlertCircle,
  UserMinus,
  RefreshCcw,
  MessageCircle,
  Target,
  RefreshCw,
  MessageSquare,
  Smartphone,
  Wrench,
  Briefcase,
  Send,
  Coffee,
  Smile,
  Frown,
  Meh,
  Filter,
  ArrowDown,
  PenTool,
  Baby,
  Timer,
  DollarSign,
  Tv,
  Mic,
  TrendingUp,
  TrendingDown,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  Camera,
  Palette,
  Car,
  BookOpen,
  Music,
  Gavel,
  User,
  HelpCircle,
  Shield,
  Globe,
  Microscope,
  Swords,
  UserPlus,
  Newspaper,
  Lock,
  Unlock,
  Brain,
  ArrowRightLeft,
  Ban,
  MapPin,
  Database,
  Sliders,
  Check,
  RotateCcw,
  Calculator,
  BarChart3,
  PieChart,
  ArrowUpRight,
  LineChart,
  ArrowRight,
  FileText,
  ScrollText,
  Anchor,
  Construction,
  FolderOpen,
  Ruler,
  Wifi,
  Terminal,
  Cpu,
  Fingerprint,
  Monitor,
  Lightbulb,
  Edit3,
  Ticket,
  Radio,
} from 'lucide-react';

// ==========================================
// 1. DATA: LESSON CONTENT
// ==========================================

const lessons = [
  { id: 1, title: '01: Evolutionary Explanations', active: true, complete: true },
  { id: 2, title: '02: Physical Attractiveness', active: true, complete: true },
  { id: 3, title: '03: Self Disclosure', active: true, complete: true },
  { id: 4, title: '04: Filter Theory', active: true, complete: true },
  { id: 5, title: '05: Social Exchange Theory', active: true, complete: true },
  { id: 6, title: '06: Equity Theory', active: true, complete: true },
  { id: 7, title: "07: Rusbult's Investment Model", active: true, complete: true },
  { id: 8, title: "08: Duck's Phase Model", active: true, complete: false },
  { id: 9, title: '09: Virtual Relationships', active: true, complete: false },
  { id: 10, title: '10: Parasocial Relationships', active: true, complete: false },
];

const lesson1DoNow = [
  { id: 1, question: 'Genetics: Which term describes the genetic makeup of an individual?', options: ['Phenotype', 'Genotype', 'Karyotype'], correct: 1 },
  { id: 2, question: 'Research Methods: Which statistical test is used for a difference with nominal data (related design)?', options: ['Chi-Squared', 'Sign Test', 'Mann-Whitney'], correct: 1 },
  { id: 3, question: "Attachment: Bowlby's internal working model suggests early attachment provides a...", options: ['Blueprint for future relationships', 'Secure base only', 'Critical period'], correct: 0 },
  { id: 4, question: "Approaches: 'Anatomy is Destiny' is associated with which form of determinism?", options: ['Environmental', 'Psychic', 'Biological'], correct: 2 },
  { id: 5, question: 'Biopsychology: Which hormone is key in the Fight or Flight response?', options: ['Adrenaline', 'Serotonin', 'Dopamine'], correct: 0 },
];

const lesson2DoNow = [
  { id: 1, question: "L1 Recap: Why are females the 'choosier' sex?", options: ['More Gametes', 'Anisogamy (High Investment)', 'Better Eyesight'], correct: 1 },
  { id: 2, question: 'L1 Recap: What did Buss (1989) find males value most?', options: ['Intelligence', 'Resources', 'Youth & Fertility'], correct: 2 },
  { id: 3, question: "Methods: What is a 'Self-Fulfilling Prophecy'?", options: ['Predicting the future', 'Expectations causing reality', 'A type of sampling'], correct: 1 },
  { id: 4, question: 'Y1 Memory: What is the capacity of STM (Miller)?', options: ['7 +/- 2 items', 'Unlimited', '18-30 seconds'], correct: 0 },
  { id: 5, question: 'Issues: The Halo Effect assumes beauty = good universally. This is:', options: ['Alpha Bias', 'Beta Bias', 'Cultural Relativism'], correct: 1 },
];

const lesson3DoNow = [
  { id: 1, question: "L2 Recap: What is the 'Halo Effect'?", options: ['The belief that attractive people possess other positive traits', 'The belief that opposites attract', 'The idea that we like people who are similar to us'], correct: 0 },
  { id: 2, question: 'L2 Recap: The Matching Hypothesis states we choose partners who are...', options: ['More attractive than us', 'Of similar attractiveness to us', 'Less attractive than us'], correct: 1 },
  { id: 3, question: 'L2 Recap: Why might we compromise on attractiveness according to Walster?', options: ['To save money', 'To avoid rejection', 'Because we are biologically programmed to'], correct: 1 },
  { id: 4, question: 'L2 Recap: Which feature is an evolutionary signal of genetic fitness?', options: ['Facial Symmetry', 'Eye Colour', 'Hair Length'], correct: 0 },
  { id: 5, question: 'L2 Recap: Neoteny refers to...', options: ['Old-age features', 'Baby-face features', 'Aggressive features'], correct: 1 },
];

const lesson4DoNow = [
  { id: 1, question: 'Self-Disclosure: What metaphor did Altman & Taylor use?', options: ['The Onion', 'The Iceberg', 'The Ladder'], correct: 0 },
  { id: 2, question: 'Self-Disclosure: Reis & Shaver argued disclosure must be...', options: ['One-sided', 'Reciprocal', 'Rapid'], correct: 1 },
  { id: 3, question: 'Self-Disclosure: Revealing too much too soon violates...', options: ['Social Norms', 'Legal Laws', 'Biological Drives'], correct: 0 },
  { id: 4, question: 'Attractiveness: The Halo Effect suggests attractive people are...', options: ['Selfish', 'Kind and Successful', 'Intelligent but rude'], correct: 1 },
  { id: 5, question: 'Attractiveness: The Matching Hypothesis claims we choose partners who are...', options: ['More attractive', 'Less attractive', 'Similar attractiveness'], correct: 2 },
];

const lesson5DoNow = [
  { id: 1, question: 'Filter Theory: Which filter is the first to be applied?', options: ['Attitudes', 'Social Demography', 'Complementarity'], correct: 1 },
  { id: 2, question: "Filter Theory: 'Complementarity' is most important for...", options: ['Short term couples (<18m)', 'Long term couples (>18m)', 'Online relationships'], correct: 1 },
  { id: 3, question: 'Filter Theory: Kerckhoff & Davis found similarity was vital for...', options: ['The first 18 months', 'Marriage only', 'Friendships only'], correct: 0 },
  { id: 4, question: "Previous: Which researcher proposed the 'Onion' metaphor?", options: ['Altman & Taylor', 'Reis & Shaver', 'Walster'], correct: 0 },
  { id: 5, question: "Previous: The 'Matching Hypothesis' relates to...", options: ['Personality', 'Physical Attractiveness', 'Wealth'], correct: 1 },
];

const lesson6DoNow = [
  { id: 1, question: "SET: What is the 'Minimax Principle'?", options: ['Maximize costs, minimize rewards', 'Maximize rewards, minimize costs', 'Balance rewards and costs equally'], correct: 1 },
  { id: 2, question: 'SET: Comparison Level (CL) is based on...', options: ['Alternatives available', 'Past experiences and self-esteem', 'Genetic fitness'], correct: 1 },
  { id: 3, question: 'SET: Comparison Level for Alternatives (CLalt) asks...', options: ['Do I deserve better?', 'Could I do better elsewhere?', 'Is my partner happy?'], correct: 1 },
  { id: 4, question: 'Filter Theory: The first filter is...', options: ['Attitudes', 'Complementarity', 'Social Demography'], correct: 2 },
  { id: 5, question: 'Self-Disclosure: What must disclosure be to build a relationship?', options: ['Rapid', 'Reciprocal', 'One-sided'], correct: 1 },
];

const lesson8DoNow = [
  { id: 1, question: 'Rusbult: What is the main factor maintaining relationships?', options: ['Satisfaction', 'Commitment', 'Passion'], correct: 1 },
  { id: 2, question: 'Rusbult: Resources put directly into a relationship are...', options: ['Intrinsic Investments', 'Extrinsic Investments', 'Sunk Costs'], correct: 0 },
  { id: 3, question: 'Rusbult: What maintenance mechanism involves positive bias?', options: ['Forgiveness', 'Accommodation', 'Positive Illusions'], correct: 2 },
  { id: 4, question: 'Equity Theory: Under-benefitting leads to...', options: ['Guilt', 'Anger', 'Contentment'], correct: 1 },
  { id: 5, question: 'SET: We compare our relationship to being single using...', options: ['CL', 'CLalt', 'Profit Margin'], correct: 1 },
];

const lesson7DoNow = [
  { id: 1, question: 'Equity Theory: What causes dissatisfaction?', options: ['Inequity (Over/Under-benefit)', 'Low Profit', 'Lack of Communication'], correct: 0 },
  { id: 2, question: "Equity Theory: An 'Entitled' individual...", options: ['Prefers under-benefitting', 'Believes they deserve to over-benefit', 'Seeks perfect equality'], correct: 1 },
  { id: 3, question: 'SET: Which concept refers to comparing a partner to being single?', options: ['Comparison Level (CL)', 'Comparison Level for Alternatives (CLalt)', 'Cost-Benefit Analysis'], correct: 1 },
  { id: 4, question: 'Cultural Bias: In collectivist cultures, satisfaction is often linked to...', options: ['Equity', 'Over-benefitting', 'Under-benefitting'], correct: 1 },
  { id: 5, question: 'SET/Equity: These theories are criticized for being...', options: ['Too biological', 'Reductionist and Economic', 'Too focused on childhood'], correct: 1 },
];

const lesson9DoNow = [
  { id: 1, question: "Duck's Model: Which phase involves publicizing the breakdown?", options: ['Intra-psychic', 'Social', 'Grave-dressing'], correct: 1 },
  { id: 2, question: "Duck's Model: 'I would be justified in withdrawing' is the threshold for...", options: ['Dyadic Phase', 'Social Phase', 'Resurrection Phase'], correct: 0 },
  { id: 3, question: 'Rusbult: What factor did he ADD to Satisfaction and Alternatives?', options: ['Investment Size', 'Profit', 'Equity'], correct: 0 },
  { id: 4, question: 'Equity Theory: Over-benefitting leads to...', options: ['Anger', 'Guilt', 'Satisfaction'], correct: 1 },
  { id: 5, question: 'Filter Theory: The final filter for long-term couples is...', options: ['Social Demography', 'Attitudes', 'Complementarity'], correct: 2 },
];

const lesson10DoNow = [
  { id: 1, question: 'Virtual Relationships: Which theory suggests cues are NOT absent, just different?', options: ['Reduced Cues', 'Hyperpersonal', 'Absence of Gating'], correct: 1 },
  { id: 2, question: "Virtual Relationships: What is 'Absence of Gating'?", options: ['Lack of privacy', 'Removal of physical obstacles to attraction', 'Anonymity online'], correct: 1 },
  { id: 3, question: "Duck's Model: The 'Social Phase' involves...", options: ['Internal brooding', 'Seeking support from friends', 'Creating a story'], correct: 1 },
  { id: 4, question: 'Rusbult: Intrinsic investments are...', options: ['Put INTO the relationship', 'Created BY the relationship', 'Future plans'], correct: 0 },
  { id: 5, question: 'Equity Theory: Satisfaction comes from...', options: ['Maximizing profit', 'Fairness of ratios', 'Ignoring costs'], correct: 1 },
];

// Lesson 5 supporting data
const setCases = [
  {
    id: 1,
    title: "Client A: The 'Settled' Pair",
    profit: 60,
    cl: 50,
    clalt: 20,
    desc: 'Profit is moderate (60). Expectations (CL) are met (50). Alternatives (CLalt) are poor (20).',
    correct: 'HOLD',
    explanation: 'Correct. Profit > CL and Profit > CLalt. The relationship is satisfying and stable.',
  },
  {
    id: 2,
    title: "Client B: The 'Grass is Greener'",
    profit: 70,
    cl: 60,
    clalt: 90,
    desc: 'Profit is high (70). Expectations are met (60). BUT a new alternative offers 90.',
    correct: 'SELL',
    explanation: 'Correct. Although Profit > CL (Satisfied), Profit < CLalt. They will leave for the better alternative.',
  },
  {
    id: 3,
    title: "Client C: The 'Trapped' Partner",
    profit: 30,
    cl: 80,
    clalt: 10,
    desc: 'Profit is low (30). Expectations are high (80) - they are unhappy. Alternatives are terrible (10).',
    correct: 'HOLD',
    explanation: 'Correct. Profit < CL (Dissatisfied), but Profit > CLalt. They are dependent and will stay because the alternative (being alone/others) is worse.',
  },
];

// ==========================================
// 2. SHARED UI COMPONENTS
// ==========================================

interface PhaseHeaderProps {
  phase: string;
  title: string;
  icon: React.ElementType;
  time?: string;
  isPresentation: boolean;
}

const PhaseHeader: React.FC<PhaseHeaderProps> = ({ phase, title, icon: Icon, time, isPresentation }) => (
  <div className={`flex items-center justify-between border-b border-gray-800 transition-all ${isPresentation ? 'mb-6 pb-4' : 'mb-6 pb-4'}`}>
    <div className="flex items-center gap-4">
      <div className={`rounded-2xl border border-pink-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.15)] ${isPresentation ? 'w-20 h-20 bg-pink-900/30' : 'w-12 h-12 bg-pink-900/20'}`}>
        <Icon size={isPresentation ? 40 : 24} className="text-pink-400" />
      </div>
      <div>
        <h4 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 uppercase tracking-widest ${isPresentation ? 'text-lg mb-1' : 'text-[10px] mb-0.5'}`}>{phase}</h4>
        <h2 className={`font-bold text-white tracking-tight ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>{title}</h2>
      </div>
    </div>
    {time && (
      <div className={`flex items-center gap-2 text-gray-400 font-mono bg-gray-900/80 rounded-full border border-gray-700/50 backdrop-blur-md ${isPresentation ? 'text-xl px-6 py-3' : 'text-xs px-3 py-1.5'}`}>
        <Clock size={isPresentation ? 24 : 14} className="text-pink-500" /> {time}
      </div>
    )}
  </div>
);

interface SlideProps {
  children: React.ReactNode;
  isPresentation: boolean;
}

const Slide: React.FC<SlideProps> = ({ children, isPresentation }) => (
  <div
    className={`flex flex-col h-full animate-fadeIn text-gray-100 mx-auto w-full transition-all duration-300 relative ${
      isPresentation ? 'p-10 max-w-[98vw] text-3xl' : 'p-8 max-w-7xl text-base'
    }`}
  >
    {/* Subtle Background Elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

    <div className={`flex-grow overflow-y-auto pr-2 custom-scrollbar flex flex-col ${isPresentation ? 'gap-8' : 'gap-6'}`}>
      {children}
    </div>
  </div>
);

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

const DoNowQuiz: React.FC<{ questions: Question[]; isPresentation: boolean }> = ({ questions, isPresentation }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qId: number, optionIdx: number) => setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  const score = Object.keys(answers).reduce((acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0), 0);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 h-full content-start transition-all ${isPresentation ? 'gap-16' : 'gap-8'}`}>
      <div className="space-y-6">
        <div className={`bg-gradient-to-br from-pink-900/40 to-purple-900/20 rounded-2xl border border-pink-500/20 p-8 shadow-lg relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl rounded-full"></div>
          <h3 className={`font-bold text-white mb-4 ${isPresentation ? 'text-4xl' : 'text-xl'}`}>Task: Activation & Retrieval</h3>
          <p className={`text-gray-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
            Activate your psychological knowledge. These questions test recall from previous lessons and year 1 content.
          </p>
        </div>
        <div className={`flex flex-col ${isPresentation ? 'gap-6' : 'gap-3'}`}>
          {!showResults ? (
            <>
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length < 5}
                className={`bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:grayscale text-white rounded-xl font-bold w-full transition-all shadow-lg hover:shadow-pink-500/20 ${
                  isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-4'
                }`}
              >
                Submit Answers
              </button>
              <button
                onClick={() => setShowResults(true)}
                className={`bg-transparent hover:bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500 rounded-xl font-semibold w-full transition-all ${
                  isPresentation ? 'px-12 py-6 text-2xl' : 'px-8 py-3 text-sm'
                }`}
              >
                Reveal All Answers
              </button>
            </>
          ) : (
            <div
              className={`bg-green-900/30 border border-green-500/30 rounded-xl w-full text-center animate-fadeIn shadow-[0_0_30px_rgba(34,197,94,0.1)] ${
                isPresentation ? 'p-10' : 'p-6'
              }`}
            >
              <span
                className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 block mb-2 ${
                  isPresentation ? 'text-7xl mb-6' : 'text-3xl'
                }`}
              >
                Score: {score} / 5
              </span>
              <span className={`text-green-200/70 font-mono uppercase tracking-widest ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                Knowledge Retrieved
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-full">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors ${isPresentation ? 'p-6 mb-4' : 'p-4'}`}
          >
            <h4 className={`font-semibold text-gray-200 mb-3 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
              <span className="text-pink-500 mr-2">{q.id < 10 ? `0${q.id}` : q.id}.</span>
              {q.question}
            </h4>
            {isPresentation ? (
              <div className="min-h-[40px]">
                {showResults && (
                  <div className="text-green-400 font-bold text-3xl animate-fadeIn mt-2 flex items-center gap-3">
                    <CheckCircle size={32} className="text-green-500" /> {q.options[q.correct]}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded-lg text-left transition-all px-4 py-2 text-xs border ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/30 border-green-500 text-green-300'
                          : answers[q.id] === idx
                            ? 'bg-red-900/30 border-red-500 text-red-300'
                            : 'bg-gray-900/50 border-transparent text-gray-600 opacity-50'
                        : answers[q.id] === idx
                          ? 'bg-pink-600 border-pink-500 text-white'
                          : 'bg-gray-800 border-transparent hover:bg-gray-750 text-gray-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 3. LESSON 1 SPECIFIC COMPONENTS
// ==========================================

const MatingGameSimulation: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [phase, setPhase] = useState<'select' | 'game' | 'results'>('select');
  const [strategy, setStrategy] = useState<'male' | 'female' | null>(null);
  const [health, setHealth] = useState(100);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [targets, setTargets] = useState<any[]>([]);
  const [cooldown, setCooldown] = useState(0);
  const [exp, setExp] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (phase === 'game') {
      interval = setInterval(() => {
        setHealth((prev) => {
          let decay;
          if (strategy === 'male') {
            decay = 1.5;
          } else {
            decay = 0.5 + (100 - prev) * 0.03;
          }

          const nextHealth = prev - decay;
          if (nextHealth <= 0) {
            setPhase('results');
            return 0;
          }
          return nextHealth;
        });

        setCooldown((prev) => Math.max(0, prev - 1));

        setTargets((prev) => {
          const lifespan = Math.max(2000, 5000 - level * 500);
          const now = Date.now();
          const keep = prev.filter((t) => now - t.created < lifespan);

          if (keep.length < 3 + level) {
            if (Math.random() > 0.3) {
              keep.push({
                id: Math.random(),
                quality: Math.floor(Math.random() * 10) + 1,
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
                created: Date.now(),
              });
            }
          }
          return keep;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [phase, strategy, level]);

  const handleClick = (target: any) => {
    if (cooldown > 0) return;

    let healthChange = 0;
    let scoreChange = 0;
    let expChange = 0;

    if (strategy === 'male') {
      if (target.quality < 4) {
        healthChange = -15;
        scoreChange = 1;
        expChange = 5;
      } else {
        healthChange = 5;
        scoreChange = 1;
        expChange = 15;
      }
    } else {
      if (target.quality < 7) {
        healthChange = -30;
        scoreChange = 1;
        expChange = 5;
        setCooldown(20);
      } else {
        healthChange = 20;
        scoreChange = 1;
        expChange = 30;
        setCooldown(20);
      }
    }

    setHealth((prev) => Math.min(100, Math.max(0, prev + healthChange)));
    setScore((prev) => prev + scoreChange);
    setExp((prev) => {
      const newExp = prev + expChange;
      if (newExp >= 100) {
        setLevel((l) => l + 1);
        return newExp - 100;
      }
      return newExp;
    });

    setTargets((prev) => prev.filter((t) => t.id !== target.id));
  };

  const reset = () => {
    setPhase('select');
    setScore(0);
    setHealth(100);
    setLevel(1);
    setExp(0);
    setCooldown(0);
  };

  return (
    <div className="h-full flex flex-col bg-gray-900 border-4 border-double border-pink-500 rounded-xl overflow-hidden relative font-retro shadow-[0_0_40px_rgba(236,72,153,0.3)] select-none">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] z-20"></div>

      <div className="bg-black p-4 border-b-4 border-pink-500 flex justify-between items-center z-10">
        <span className="text-yellow-400 retro-text-shadow text-xs md:text-base">LEVEL {level}</span>

        <div className="flex-grow mx-4 max-w-md">
          <div className="flex justify-between text-[10px] mb-1">
            <span className={strategy === 'male' ? 'text-blue-400' : 'text-pink-400'}>{strategy === 'male' ? 'STAMINA' : 'FERTILITY'}</span>
            <span className="text-white">{Math.floor(health)}%</span>
          </div>
          <div className="h-4 bg-gray-800 border border-gray-600 relative">
            <div
              className={`h-full transition-all duration-200 ${health < 30 ? 'bg-red-500 animate-pulse' : strategy === 'male' ? 'bg-blue-500' : 'bg-pink-500'}`}
              style={{ width: `${health}%` }}
            ></div>
          </div>
        </div>

        <div className="text-right">
          <span className="text-green-400 block text-xs md:text-base">SCORE: {score}</span>
        </div>
      </div>

      <div className="flex-grow relative bg-gray-800 flex items-center justify-center overflow-hidden">
        {phase === 'select' && (
          <div className="text-center z-30 space-y-8 animate-fadeIn p-4">
            <h2 className="text-2xl md:text-3xl text-white retro-text-shadow mb-8">CHOOSE STRATEGY</h2>
            <div className="flex gap-4 md:gap-8 justify-center">
              <button
                onClick={() => {
                  setStrategy('male');
                  setPhase('game');
                }}
                className="bg-blue-900 border-4 border-blue-500 p-4 md:p-6 hover:scale-105 transition-transform group w-40 md:w-48"
              >
                <div className="text-4xl md:text-6xl mb-4 group-hover:animate-bounce">♂️</div>
                <h3 className="text-blue-300 text-lg md:text-xl mb-2">MALE</h3>
                <p className="text-[10px] text-blue-200 font-sans leading-tight">
                  Start: HIGH Energy
                  <br />
                  Drain: FAST
                  <br />
                  Mode: QUANTITY
                </p>
              </button>
              <button
                onClick={() => {
                  setStrategy('female');
                  setPhase('game');
                }}
                className="bg-pink-900 border-4 border-pink-500 p-4 md:p-6 hover:scale-105 transition-transform group w-40 md:w-48"
              >
                <div className="text-4xl md:text-6xl mb-4 group-hover:animate-bounce">♀️</div>
                <h3 className="text-pink-300 text-lg md:text-xl mb-2">FEMALE</h3>
                <p className="text-[10px] text-pink-200 font-sans leading-tight">
                  Start: HIGH Value
                  <br />
                  Drain: SLOW
                  <br />
                  Mode: QUALITY
                </p>
              </button>
            </div>
          </div>
        )}

        {phase === 'game' && (
          <div className="w-full h-full relative cursor-crosshair">
            <div className="absolute bottom-0 left-0 h-2 bg-yellow-600 w-full opacity-50">
              <div className="h-full bg-yellow-400 transition-all duration-300" style={{ width: `${exp}%` }}></div>
            </div>

            {cooldown > 0 && (
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-30">
                <h3 className="text-pink-500 text-xl md:text-2xl blink animate-pulse">GESTATING...</h3>
                <div className="w-48 h-4 bg-gray-700 mt-4 border-2 border-white">
                  <div
                    className="h-full bg-pink-500 transition-all duration-100 ease-linear"
                    style={{ width: `${(cooldown / 20) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {targets.map((t) => (
              <button
                key={t.id}
                onClick={() => handleClick(t)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 active:scale-90 transition-transform"
                style={{ left: `${t.x}%`, top: `${t.y}%` }}
              >
                <div
                  className={
                    'w-12 h-12 md:w-16 md:h-16 border-4 flex items-center justify-center shadow-lg transition-colors duration-300 ' +
                    (t.quality >= 7
                      ? 'bg-yellow-500 border-yellow-200 animate-pulse'
                      : t.quality <= 3
                        ? 'bg-gray-700 border-gray-600 opacity-80'
                        : 'bg-gray-600 border-gray-400')
                  }
                >
                  <span className="text-white font-bold text-lg md:text-xl">{t.quality}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {phase === 'results' && (
          <div className="text-center z-30 animate-fadeIn bg-black/90 p-8 border-4 border-white max-w-2xl">
            <h2 className="text-3xl text-red-500 mb-6 retro-text-shadow">EXTINCTION</h2>

            <div className="bg-gray-900 p-6 border border-gray-700 mb-6 text-left font-sans space-y-4">
              <div>
                <span className="block text-gray-500 text-xs uppercase">Generation Reached</span>
                <span className="block text-4xl text-yellow-400 font-retro">LEVEL {level}</span>
              </div>
              <div className="h-px bg-gray-700 w-full"></div>
              <div>
                <span className="block text-gray-500 text-xs uppercase">Total Offspring</span>
                <span className="block text-2xl text-white font-retro">{score}</span>
              </div>
            </div>

            <p className="text-white text-sm font-sans mb-8 leading-relaxed">
              {strategy === 'male'
                ? 'Your male lineage ended due to exhaustion. Intra-sexual competition (Quantity) requires immense energy. Choosing low-quality mates wasted your stamina.'
                : 'Your female lineage ended. Inter-sexual selection (Quality) is high-risk. Poor mate choices depleted your reproductive resources without ensuring survival.'}
            </p>

            <button
              onClick={reset}
              className="bg-white text-black font-retro px-8 py-4 hover:bg-gray-300 border-b-4 border-gray-500 active:border-b-0 active:translate-y-1"
            >
              TRY AGAIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const EvidenceReveal: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-3 gap-6 h-full">
      <div
        onClick={() => setRevealed(revealed === 'buss' ? null : 'buss')}
        className={`relative cursor-pointer group border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
          revealed === 'buss' ? 'border-green-500 bg-green-900/10' : 'border-gray-700 hover:border-green-500/50 bg-gray-900/50'
        }`}
      >
        <div className="absolute top-4 right-4 text-green-500 opacity-20 group-hover:opacity-100 transition-opacity">
          <Globe size={64} />
        </div>
        <div className="p-6 h-full flex flex-col">
          <h3
            className={`font-bold mb-4 ${isPresentation ? 'text-3xl' : 'text-xl'} ${
              revealed === 'buss' ? 'text-green-400' : 'text-gray-400'
            }`}
          >
            Buss (1989)
          </h3>
          {revealed === 'buss' ? (
            <div className="animate-fadeIn space-y-3">
              <div className="bg-gray-900/50 p-3 rounded-xl border-l-4 border-green-500">
                <span className={`${isPresentation ? 'text-lg' : 'text-xs'} text-green-500 font-bold uppercase block mb-1`}>
                  Methodology
                </span>
                <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                  Survey of 10,000 adults across 33 countries (Universal).
                </p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-xl border-l-4 border-green-500">
                <span className={`${isPresentation ? 'text-lg' : 'text-xs'} text-green-500 font-bold uppercase block mb-1`}>
                  Findings
                </span>
                <ul className={`text-gray-300 list-disc pl-4 space-y-1 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                  <li>
                    <strong className="text-white">Females:</strong> Valued resources, ambition, financial prospects.
                  </li>
                  <li>
                    <strong className="text-white">Males:</strong> Valued reproductive capacity (youth, physical attractiveness).
                  </li>
                </ul>
              </div>
              <p className={`text-green-400 italic mt-2 ${isPresentation ? 'text-lg' : 'text-[10px]'}`}>
                Supports sex differences in partner preferences.
              </p>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center flex-col gap-4">
              <Search size={40} className="text-green-500/50" />
              <span className={`font-mono text-green-500/50 tracking-widest uppercase text-center ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                Cross-Cultural Evidence
              </span>
            </div>
          )}
        </div>
      </div>

      <div
        onClick={() => setRevealed(revealed === 'clark' ? null : 'clark')}
        className={`relative cursor-pointer group border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
          revealed === 'clark' ? 'border-pink-500 bg-pink-900/10' : 'border-gray-700 hover:border-pink-500/50 bg-gray-900/50'
        }`}
      >
        <div className="absolute top-4 right-4 text-pink-500 opacity-20 group-hover:opacity-100 transition-opacity">
          <UserPlus size={64} />
        </div>
        <div className="p-6 h-full flex flex-col">
          <h3
            className={`font-bold mb-4 ${isPresentation ? 'text-3xl' : 'text-xl'} ${
              revealed === 'clark' ? 'text-pink-400' : 'text-gray-400'
            }`}
          >
            Clark & Hatfield (1989)
          </h3>
          {revealed === 'clark' ? (
            <div className="animate-fadeIn space-y-3">
              <div className="bg-gray-900/50 p-3 rounded-xl border-l-4 border-pink-500">
                <span className={`${isPresentation ? 'text-lg' : 'text-xs'} text-pink-500 font-bold uppercase block mb-1`}>
                  Methodology
                </span>
                <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                  Campus study. Confederates asked: "Would you go to bed with me tonight?"
                </p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-xl border-l-4 border-pink-500">
                <span className={`${isPresentation ? 'text-lg' : 'text-xs'} text-pink-500 font-bold uppercase block mb-1`}>
                  Findings
                </span>
                <div className="flex justify-between items-center text-center mt-2">
                  <div>
                    <span className={`block font-bold text-white ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>75%</span>
                    <span className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-[10px]'}`}>
                      Males Agreed
                    </span>
                  </div>
                  <div className="h-8 w-px bg-gray-700"></div>
                  <div>
                    <span className={`block font-bold text-white ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>0%</span>
                    <span className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-[10px]'}`}>
                      Females Agreed
                    </span>
                  </div>
                </div>
              </div>
              <p className={`text-pink-400 italic mt-2 ${isPresentation ? 'text-lg' : 'text-[10px]'}`}>
                Supports female choosiness.
              </p>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center flex-col gap-4">
              <Search size={40} className="text-pink-500/50" />
              <span className={`font-mono text-pink-500/50 tracking-widest uppercase text-center ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                Behavioural Evidence
              </span>
            </div>
          )}
        </div>
      </div>

      <div
        onClick={() => setRevealed(revealed === 'waynforth' ? null : 'waynforth')}
        className={`relative cursor-pointer group border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
          revealed === 'waynforth' ? 'border-blue-500 bg-blue-900/10' : 'border-gray-700 hover:border-blue-500/50 bg-gray-900/50'
        }`}
      >
        <div className="absolute top-4 right-4 text-blue-500 opacity-20 group-hover:opacity-100 transition-opacity">
          <Newspaper size={64} />
        </div>
        <div className="p-6 h-full flex flex-col">
          <h3
            className={`font-bold mb-4 ${isPresentation ? 'text-3xl' : 'text-xl'} ${
              revealed === 'waynforth' ? 'text-blue-400' : 'text-gray-400'
            }`}
          >
            Waynforth & Dunbar (1995)
          </h3>
          {revealed === 'waynforth' ? (
            <div className="animate-fadeIn space-y-3">
              <div className="bg-gray-900/50 p-3 rounded-xl border-l-4 border-blue-500">
                <span className={`${isPresentation ? 'text-lg' : 'text-xs'} text-blue-500 font-bold uppercase block mb-1`}>
                  Methodology
                </span>
                <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                  Content analysis of 'Lonely Hearts' columns in American newspapers.
                </p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-xl border-l-4 border-blue-500">
                <span className={`${isPresentation ? 'text-lg' : 'text-xs'} text-blue-500 font-bold uppercase block mb-1`}>
                  Findings
                </span>
                <ul className={`text-gray-300 list-disc pl-4 space-y-1 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                  <li>
                    <strong className="text-white">Women:</strong> Offered physical attractiveness / indicators of youth ('flirty', 'curvy').
                  </li>
                  <li>
                    <strong className="text-white">Men:</strong> Offered resources ('successful', 'fit').
                  </li>
                </ul>
              </div>
              <p className={`text-blue-400 italic mt-2 ${isPresentation ? 'text-lg' : 'text-[10px]'}`}>
                Supports evolutionary predictions in real-world data.
              </p>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center flex-col gap-4">
              <Search size={40} className="text-blue-500/50" />
              <span className={`font-mono text-blue-500/50 tracking-widest uppercase text-center ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                Lonely Hearts Data
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CritiqueGrid: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <div className="bg-gray-900/80 border border-red-500/30 p-6 rounded-xl relative hover:border-red-500 transition-all group">
        <div className="absolute top-4 right-4 text-red-500/50 group-hover:text-red-500 transition-colors">
          <AlertTriangle size={32} />
        </div>
        <h3 className={`font-bold text-red-400 mb-4 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Social Change</h3>
        <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
          <strong>Bereczkei et al (1997):</strong> Women's greater role in the workplace means they are no longer dependent on men for resources.
          <br />
          <br />
          This contradicts the evolutionary prediction that females always prioritize resources, suggesting social norms change faster than evolution.
        </p>
      </div>

      <div className="bg-gray-900/80 border border-green-500/30 p-6 rounded-xl relative hover:border-green-500 transition-all group">
        <div className="absolute top-4 right-4 text-green-500/50 group-hover:text-green-500 transition-colors">
          <Scale size={32} />
        </div>
        <h3 className={`font-bold text-green-400 mb-4 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Waist-Hip Ratio</h3>
        <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
          <strong>Singh (1993, 2002):</strong> Males consistently prefer a WHR of 0.7 across cultures.
          <br />
          <br />
          This is a key evolutionary signal of fertility (not pregnancy) and health, providing strong support for the existence of evolved intra-sexual preferences.
        </p>
      </div>

      <div className="bg-gray-900/80 border border-red-500/30 p-6 rounded-xl relative hover:border-red-500 transition-all group">
        <div className="absolute top-4 right-4 text-red-500/50 group-hover:text-red-500 transition-colors">
          <Dna size={32} />
        </div>
        <h3 className={`font-bold text-red-400 mb-4 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Nature vs Nurture</h3>
        <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
          The theory is reductionist, implying partner choice is determined solely by genes (Biological Determinism).
          <br />
          <br />
          It ignores cultural differences (e.g. arranged marriages) and the role of free will in modern relationships.
        </p>
      </div>
    </div>
  );
};

const EssayPlanRevealL1: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="bg-gray-900/80 border border-gray-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Shield size={120} />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-gray-700 pb-4">
        <h3 className={`font-bold text-gray-200 tracking-widest ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Structure Planning</h3>
        <span className="bg-pink-600 text-white px-3 py-1 text-xs font-bold rounded">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <Eye size={20} /> Reveal Plan
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO1: Concepts (6 Marks)
            </strong>
            <ul className={`text-gray-400 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li>
                Define <strong>Anisogamy</strong> (Male vs Female gametes).
              </li>
              <li>
                Explain <strong>Inter-sexual</strong> (Female choice, 'Sexy Sons').
              </li>
              <li>
                Explain <strong>Intra-sexual</strong> (Male competition, Dimorphism).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Support (Buss)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Buss (1989):</strong> 10,000 adults, 33 countries. Universal preference found. Men=Youth (Fertility), Women=Resources. Strong support for evolutionary prediction.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Support (Clark & Hatfield)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Clark & Hatfield (1989):</strong> Campus study. 75% men agreed to sex, 0% women. Supports female choosiness hypothesis.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Challenge (Social Change)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Bereczkei et al (1997):</strong> Social changes (women in workplace) have altered preferences. Women now less resource-oriented. Theory ignores cultural shifts.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. LESSON 2 SPECIFIC COMPONENTS
// ==========================================

const HaloEffectSlider: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [value, setValue] = useState(50);

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-7xl mx-auto w-full">
      <div className={`grid grid-cols-1 md:grid-cols-2 w-full items-center ${isPresentation ? 'gap-24' : 'gap-12'}`}>
        <div className="flex flex-col items-center justify-center space-y-8 relative">
          <div
            className={`absolute inset-0 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${value > 60 ? 'opacity-40' : 'opacity-0'}`}
            style={{ background: `radial-gradient(circle, rgba(250, 204, 21, ${value / 100}) 0%, rgba(0,0,0,0) 70%)` }}
          ></div>

          <div
            className={`relative transition-all duration-500 rounded-full flex items-center justify-center border-4 z-10 ${
              isPresentation ? 'w-80 h-80' : 'w-64 h-64'
            } ${value > 70 ? 'border-yellow-400 shadow-[0_0_60px_rgba(250,204,21,0.5)]' : 'border-gray-700 shadow-none'}`}
            style={{ backgroundColor: `rgba(${30 + value}, ${30 + value / 2}, ${30 + value / 4}, 0.5)` }}
          >
            {value > 80 && <Sparkles className="absolute top-4 right-8 text-yellow-200 animate-pulse" size={40} />}
            {value > 90 && <Sparkles className="absolute bottom-8 left-8 text-yellow-200 animate-pulse delay-75" size={30} />}

            <User size={isPresentation ? 140 : 100} className={`transition-all duration-300 ${value > 70 ? 'text-yellow-100' : 'text-gray-500'}`} />

            <div className="absolute -bottom-6 bg-gray-900 border border-gray-600 px-4 py-1 rounded-full text-xs font-mono text-gray-400 whitespace-nowrap shadow-xl">
              ATTRACTIVENESS: {value}%
            </div>
          </div>

          <div className="w-full max-w-xs z-10 bg-gray-900/80 p-4 rounded-xl border border-gray-700 backdrop-blur-sm">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:accent-pink-400 transition-all"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-2 uppercase">
              <span>Unattractive</span>
              <span>Average</span>
              <span>Attractive</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-8">
          <div className="bg-gray-900/60 p-8 rounded-2xl border-l-4 border-yellow-500 shadow-xl space-y-4 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BookOpen size={100} className="text-white" />
            </div>
            <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-widest text-xs mb-1">
              <Sparkles size={16} /> Key Theory
            </div>
            <h3 className={`font-bold text-white ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>"What is beautiful is good"</h3>
            <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Psychologists use the term <strong>halo effect</strong> to describe how one distinguishing feature (physical attractiveness) tends to have a disproportionate influence on our judgments of a person's other attributes, such as their personality.
            </p>
            <p className={`text-gray-400 leading-relaxed border-t border-gray-700 pt-4 mt-2 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Dion et al (1972)</strong> found that physically attractive people are consistently rated as kind, strong, sociable and successful compared to unattractive people. This belief makes them even more attractive to us, leading to a <strong>self-fulfilling prophecy</strong>.
            </p>
          </div>

          <div className={`space-y-4 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
            {[
              { label: 'Kindness', color: 'bg-green-500', icon: Heart },
              { label: 'Intelligence', color: 'bg-blue-500', icon: Layers },
              { label: 'Success', color: 'bg-yellow-500', icon: Trophy },
              { label: 'Sociability', color: 'bg-purple-500', icon: Users },
            ].map((trait, idx) => (
              <div key={trait.label} className="space-y-1 group">
                <div className="flex items-center justify-between font-bold text-gray-300 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <trait.icon size={isPresentation ? 20 : 14} className={`${value > 60 ? 'text-white' : 'text-gray-600'} transition-colors`} />
                    <span>{trait.label}</span>
                  </div>
                  <span className={`font-mono transition-colors ${value > 80 ? 'text-green-400' : 'text-gray-500'}`}>
                    {Math.min(100, Math.floor(value * (1 + idx * 0.05)))}%
                  </span>
                </div>
                <div className="h-3 bg-gray-900/50 rounded-full overflow-hidden border border-gray-800 relative">
                  <div className="absolute inset-0 flex justify-between px-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-px h-full bg-gray-800/50"></div>
                    ))}
                  </div>
                  <div
                    className={`h-full ${trait.color} transition-all duration-500 ease-out shadow-[0_0_10px_currentColor] opacity-80`}
                    style={{ width: `${Math.min(100, Math.floor(value * (1 + idx * 0.05)))}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EvaluationDragDrop: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [points, setPoints] = useState([
    { id: 'p1', text: 'The Halo Effect (Support)', matchedId: null },
    { id: 'p2', text: 'Individual Differences (Challenge)', matchedId: null },
    { id: 'p3', text: 'Cultural Consistency (Support)', matchedId: null },
  ]);

  const [evidence, setEvidence] = useState([
    { id: 'e1', text: 'Palmer & Peterson: Attractive people rated more politically knowledgeable.', correctPoint: 'p1' },
    { id: 'e2', text: "Towhey: Only high 'MACHO' scale scorers were influenced by looks.", correctPoint: 'p2' },
    { id: 'e3', text: 'Cunningham: White, Asian & Hispanic males all valued large eyes.', correctPoint: 'p3' },
  ]);

  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);

  const handlePointClick = (pointId: string) => {
    if (selectedEvidence) {
      const ev = evidence.find((e) => e.id === selectedEvidence);
      if (ev && ev.correctPoint === pointId) {
        setPoints((prev) => prev.map((p) => (p.id === pointId ? { ...p, matchedId: selectedEvidence } : p)));
        setEvidence((prev) => prev.filter((e) => e.id !== selectedEvidence));
        setSelectedEvidence(null);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 h-full gap-4 max-w-5xl mx-auto w-full">
      <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 shadow-xl">
        <h3 className={`font-bold text-center text-gray-400 mb-8 uppercase tracking-widest ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          1. Select Evidence below. 2. Tap the matching Point above.
        </h3>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {points.map((p) => (
            <div
              key={p.id}
              onClick={() => handlePointClick(p.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer min-h-[160px] flex flex-col items-center justify-center text-center relative overflow-hidden group ${
                p.matchedId
                  ? 'bg-green-900/30 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]'
                  : 'bg-gray-900 border-gray-700 hover:border-pink-500 hover:bg-gray-800'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
              <span className={`font-bold relative z-10 ${p.matchedId ? 'text-green-300' : 'text-gray-200'} ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
                {p.text}
              </span>
              {p.matchedId && (
                <div className="mt-3 text-xs font-bold text-green-400 uppercase tracking-wider bg-green-900/50 px-3 py-1 rounded-full border border-green-500/50 animate-pop">
                  <CheckCircle size={14} className="inline mr-1" /> Matched
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {evidence.map((e) => (
            <button
              key={e.id}
              onClick={() => setSelectedEvidence(selectedEvidence === e.id ? null : e.id)}
              className={`px-6 py-4 rounded-xl border-2 text-sm font-semibold transition-all shadow-lg max-w-xs text-left ${
                selectedEvidence === e.id
                  ? 'bg-pink-600 text-white border-pink-400 scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)]'
                  : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-750 hover:border-gray-500'
              } ${isPresentation ? 'text-lg px-8 py-5' : ''}`}
            >
              {e.text}
            </button>
          ))}
          {evidence.length === 0 && (
            <div className="text-green-400 font-bold text-3xl flex flex-col items-center gap-4 animate-pop p-8 bg-green-900/20 rounded-2xl border border-green-500/30 w-full">
              <Sparkles size={48} />
              <span>All Evidence Matched!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EssayPlanRevealL2: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div
      className={`bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700 shadow-2xl flex flex-col justify-center h-full relative overflow-hidden ${
        isPresentation ? 'p-16' : 'p-10'
      }`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="flex items-center justify-between mb-8 z-10 relative">
        <h3 className={`text-gray-400 font-bold uppercase tracking-widest ${isPresentation ? 'text-3xl' : 'text-base'}`}>
          Structure Planning
        </h3>
        <div className="flex items-center gap-2 bg-pink-900/50 border border-pink-500/30 px-4 py-1.5 rounded-lg">
          <Trophy size={16} className="text-pink-400" />
          <span className="text-pink-200 font-bold text-sm">8 Marks</span>
        </div>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <p className={`text-gray-400 text-center max-w-md ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
            Review the exam question on the left, then reveal the suggested paragraph structure.
          </p>
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-full font-bold transition-all shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] hover:scale-105 ${
              isPresentation ? 'px-14 py-8 text-3xl' : 'px-8 py-4'
            }`}
          >
            <Eye size={isPresentation ? 40 : 20} /> Reveal Blueprint
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative">
          <div className="flex justify-end">
            <button
              onClick={() => setRevealed(false)}
              className={`text-gray-500 hover:text-white flex items-center gap-1 uppercase font-bold text-xs tracking-widest transition-colors ${
                isPresentation ? 'text-xl' : 'text-xs'
              }`}
            >
              <EyeOff size={isPresentation ? 24 : 14} /> Hide Plan
            </button>
          </div>

          <div className="flex gap-6 items-start bg-gray-900/80 rounded-xl border border-blue-900/50 p-6 shadow-sm hover:border-blue-500/50 transition-colors group">
            <div
              className={`rounded-xl bg-blue-900/30 flex items-center justify-center font-bold text-blue-300 shrink-0 border border-blue-500/30 group-hover:bg-blue-900/50 group-hover:text-white transition-all ${
                isPresentation ? 'w-20 h-20 text-3xl' : 'w-12 h-12 text-sm'
              }`}
            >
              AO1
            </div>
            <div>
              <strong className={`text-blue-300 block mb-2 uppercase tracking-wide ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
                Outline One Theory (3 Marks)
              </strong>
              <p className={`text-gray-400 leading-relaxed ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                Focus on <strong>The Halo Effect</strong>.
                <ul className="list-disc pl-4 mt-2 space-y-1 text-gray-500">
                  <li>Define it: "What is beautiful is good".</li>
                  <li>Explain Evolutionary Root: Neoteny triggers caring.</li>
                  <li>Explain Consequence: Self-Fulfilling Prophecy.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-gray-900/80 rounded-xl border border-green-900/50 p-6 shadow-sm hover:border-green-500/50 transition-colors group">
            <div
              className={`rounded-xl bg-green-900/30 flex items-center justify-center font-bold text-green-300 shrink-0 border border-green-500/30 group-hover:bg-green-900/50 group-hover:text-white transition-all ${
                isPresentation ? 'w-20 h-20 text-3xl' : 'w-12 h-12 text-sm'
              }`}
            >
              AO3
            </div>
            <div>
              <strong className={`text-green-300 block mb-2 uppercase tracking-wide ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
                Evaluation (5 Marks)
              </strong>
              <div className={`text-gray-400 leading-relaxed space-y-4 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                <div className="flex gap-2">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>Strength:</strong> Palmer & Peterson (2012). Physically attractive people rated more politically knowledgeable. Implication for democracy.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Scale size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>Challenge (Individual Diff):</strong> Towhey (1979). Not everyone cares about looks. Only those high on MACHO scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MatchingSimulation: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [gameState, setGameState] = useState<'intro' | 'mirror' | 'playing' | 'reveal' | 'summary'>('intro');
  const [playerScore, setPlayerScore] = useState(0);
  const [partners, setPartners] = useState<any[]>([]);
  const [round, setRound] = useState(1);
  const [feedback, setFeedback] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [roundClues, setRoundClues] = useState<string[]>([]);

  const roundConfigs = [
    { id: 1, score: 9, title: 'The Supermodel', clues: ['Perfectly Symmetrical', 'Clear Glowing Skin', 'Celebrity Smile', 'Everyone stares at you'], difficulty: 'Easy' },
    { id: 2, score: 4, title: 'Reality Check', clues: ['Slightly Asymmetrical', 'Tired Eyes', 'Messy Hair', 'Average Posture'], difficulty: 'Harder' },
    { id: 3, score: 6, title: 'Mixed Signals', clues: ['Great Style', 'Funny & Charming', 'Crooked Teeth', 'Short Stature'], difficulty: 'Tricky' },
    { id: 4, score: 8, title: 'Status vs Looks', clues: ['Expensive Suit', 'Confident Walk', 'Average Face', 'Whitened Teeth'], difficulty: 'Expert' },
  ];

  const generatePartners = () => {
    return Array.from({ length: 6 }, (_, i) => ({ id: i, score: Math.floor(Math.random() * 8) + 3, status: 'available' })).sort((a, b) => b.score - a.score);
  };

  const startRound = (targetRound: number) => {
    const config = roundConfigs[targetRound - 1];
    setPlayerScore(config.score);
    setRoundClues(config.clues);
    setPartners(generatePartners());
    setFeedback(null);
    setGameState('mirror');
  };

  const enterMarket = () => {
    setGameState('playing');
  };

  const handleAction = (partner: any) => {
    let result = '';
    let status = '';

    if (partner.score > playerScore + 1) {
      result = "REJECTED! They want someone 'hotter'.";
      status = 'rejected';
    } else if (partner.score < playerScore - 1) {
      result = 'ACCEPTED... but you feel you could do better.';
      status = 'unsatisfied';
    } else {
      result = 'MATCH! Perfect chemistry.';
      status = 'matched';
    }

    setPartners((prev) => prev.map((p) => (p.id === partner.id ? { ...p, status } : p)));
    setFeedback({ type: status, text: result, partnerScore: partner.score });

    if (status === 'matched' || status === 'unsatisfied') {
      setTimeout(() => {
        setHistory((prev) => [...prev, { round, playerScore, matchScore: partner.score, result: status === 'matched' ? 'Match' : 'Settled' }]);
        setGameState('reveal');
      }, 1500);
    }
  };

  const nextLevel = () => {
    if (round < 4) {
      const nextRound = round + 1;
      setRound(nextRound);
      startRound(nextRound);
    } else {
      setGameState('summary');
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#050014] border-2 border-pink-500/50 rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(236,72,153,0.2)] font-cyber">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2e1065_0%,_#000000_100%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="relative z-10 bg-black/50 backdrop-blur-md p-4 flex justify-between items-center border-b border-pink-500/30">
        <div className="flex items-center gap-3">
          <div className="bg-pink-600/20 p-2 rounded-lg border border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            <Music size={20} className="text-pink-400" />
          </div>
          <span className="font-bold text-white tracking-widest text-sm uppercase neon-text text-pink-400">CLUB MATCHING</span>
        </div>
        <div className="flex gap-4 text-xs font-mono text-pink-300">
          <span>ROUND: {round}/4</span>
        </div>
      </div>

      <div className="flex-grow relative p-8 flex flex-col items-center justify-center z-10 min-h-0 overflow-y-auto custom-scrollbar">
        {gameState === 'intro' && (
          <div className="text-center max-w-lg animate-fadeIn my-auto">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-pink-500 blur-xl opacity-50 rounded-full animate-pulse"></div>
              <div className="bg-black p-8 rounded-full border-2 border-pink-500 relative z-10">
                <EyeOff size={64} className="text-pink-500" />
              </div>
            </div>
            <h2 className={`font-bold text-white mb-6 font-cyber neon-text ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
              THE BLIND MARKET
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed font-sans border-l-4 border-pink-500 pl-4 text-left bg-black/40 p-4 rounded-r-xl">
              You have a <strong className="text-pink-400">hidden attractiveness score</strong>.
              <br />
              <br />
              If you aim too high, you get <strong>rejected</strong>.
              <br />
              If you aim too low, you feel <strong>unsatisfied</strong>.
              <br />
              <br />
              <strong>Goal:</strong> Find a partner within your "league" (±1 point).
            </p>
            <button
              onClick={() => startRound(1)}
              className={`bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-none skew-x-[-10deg] border-2 border-white shadow-[5px_5px_0px_rgba(255,255,255,0.5)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${
                isPresentation ? 'px-12 py-6 text-2xl' : 'px-10 py-4 text-lg'
              }`}
            >
              ENTER CLUB
            </button>
          </div>
        )}

        {gameState === 'mirror' && (
          <div className="text-center w-full max-w-2xl animate-fadeIn flex flex-col h-full justify-center">
            <h3 className="text-blue-400 font-bold uppercase tracking-[0.5em] mb-4 font-cyber animate-pulse">Bathroom Mirror Check</h3>

            <div className="bg-black/60 border border-blue-500/50 p-8 rounded-xl backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.2)] flex-shrink-0">
              <div className="flex justify-center mb-6">
                <HelpCircle size={80} className="text-gray-500 opacity-50" />
              </div>
              <h4 className="text-white text-xl mb-4 font-bold border-b border-gray-700 pb-4">Your Reflection</h4>
              <ul className="space-y-3 text-left">
                {roundClues.map((clue, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-blue-200 font-mono text-lg animate-fadeIn"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <Zap size={16} className="text-yellow-400 shrink-0" />
                    {clue}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-400 mt-6 mb-6 font-sans italic">Based on these traits, estimate your score...</p>

            <div className="pb-4">
              <button
                onClick={enterMarket}
                className={`bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-none skew-x-[-10deg] border-2 border-white shadow-[5px_5px_0px_rgba(255,255,255,0.5)] transition-all ${
                  isPresentation ? 'px-12 py-6 text-2xl' : 'px-10 py-4 text-lg'
                }`}
              >
                FIND A MATE
              </button>
            </div>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="w-full h-full flex flex-col">
            <div className="grid grid-cols-3 gap-6 w-full max-w-5xl mx-auto flex-grow items-center">
              {partners.map((p) => (
                <button
                  key={p.id}
                  disabled={p.status !== 'available'}
                  onClick={() => handleAction(p)}
                  className={`
                    relative h-40 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center justify-center group overflow-hidden
                    ${p.status === 'available' ? 'bg-gray-900 border-gray-600 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] cursor-pointer' : ''}
                    ${p.status === 'rejected' ? 'bg-red-950 border-red-500 animate-shake grayscale opacity-50' : ''}
                    ${p.status === 'matched' ? 'bg-green-900/80 border-green-400 scale-110 z-20 shadow-[0_0_50px_rgba(34,197,94,0.6)]' : ''}
                    ${p.status === 'unsatisfied' ? 'bg-yellow-900/20 border-yellow-500 opacity-60' : ''}
                  `}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>

                  <div className="z-10 relative flex flex-col items-center">
                    <User
                      size={isPresentation ? 48 : 32}
                      className={`mb-2 transition-colors ${p.status === 'matched' ? 'text-green-300' : 'text-gray-400 group-hover:text-white'}`}
                    />
                    <span
                      className={`font-cyber font-black neon-text ${isPresentation ? 'text-4xl' : 'text-3xl'} ${
                        p.status === 'matched' ? 'text-green-300' : 'text-white'
                      }`}
                    >
                      {p.score}
                    </span>
                  </div>

                  {p.status === 'rejected' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
                      <X size={64} className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="h-24 mt-4 flex items-center justify-center">
              {feedback && (
                <div
                  className={`px-8 py-4 rounded-xl font-bold animate-pop flex items-center gap-4 border-2 shadow-2xl backdrop-blur-xl ${
                    feedback.type === 'rejected'
                      ? 'bg-red-900/80 text-red-100 border-red-500 shadow-red-500/20'
                      : feedback.type === 'matched'
                        ? 'bg-green-900/80 text-green-100 border-green-500 shadow-green-500/20'
                        : 'bg-yellow-900/80 text-yellow-100 border-yellow-500 shadow-yellow-500/20'
                  }`}
                >
                  {feedback.type === 'rejected' && <AlertTriangle size={32} className="animate-bounce" />}
                  {feedback.type === 'matched' && <Heart size={32} className="fill-current animate-pulse" />}
                  <span className={isPresentation ? 'text-2xl' : 'text-xl'}>{feedback.text}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {gameState === 'reveal' && (
          <div className="text-center z-10 animate-fadeIn bg-black/80 p-12 rounded-3xl border border-pink-500/30 backdrop-blur-xl my-auto">
            <h3 className="text-gray-400 font-bold uppercase tracking-widest mb-8 font-cyber">Identity Revealed</h3>

            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <div className="bg-pink-600 w-40 h-40 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(236,72,153,0.6)] border-4 border-white animate-pulse-neon">
                <span className="text-7xl font-black text-white font-cyber">{playerScore}</span>
              </div>
              <p className="text-white text-2xl font-bold mt-4">You were a {playerScore}!</p>
            </div>

            <p className="text-gray-300 max-w-md mx-auto mb-8 text-lg">
              {Math.abs(history[history.length - 1].matchScore - playerScore) <= 1
                ? 'PERFECT MATCH. You accurately assessed your value and minimized rejection.'
                : 'MISMATCH. Fear of rejection or unrealistic standards led to a poor pairing.'}
            </p>

            <button
              onClick={nextLevel}
              className={`bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-500 hover:border-white font-bold rounded-lg transition-all ${
                isPresentation ? 'px-10 py-5 text-xl' : 'px-8 py-3'
              }`}
            >
              {round < 4 ? 'Next Round' : 'See Final Analysis'}
            </button>
          </div>
        )}

        {gameState === 'summary' && (
          <div className="text-center z-10 animate-fadeIn w-full max-w-3xl my-auto">
            <div className="bg-yellow-500/20 p-6 rounded-full inline-block mb-6 border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <Scale size={64} className="text-yellow-400" />
            </div>
            <h2 className={`font-bold text-white mb-8 font-cyber ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
              The Matching Hypothesis
            </h2>

            <div className="bg-black/60 rounded-xl border border-gray-700 p-8 mb-8 text-left backdrop-blur-md">
              <h4 className="text-gray-500 font-bold uppercase text-xs mb-6 tracking-widest">Market Analysis</h4>
              <div className="space-y-4">
                {history.map((h, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-800 pb-3 last:border-0">
                    <span className="text-gray-400 font-mono">Round {h.round}</span>
                    <div className="flex gap-6 text-lg font-cyber">
                      <span className="text-pink-500">You: {h.playerScore}</span>
                      <span className="text-gray-600">vs</span>
                      <span className="text-blue-400">Partner: {h.matchScore}</span>
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded uppercase tracking-wider ${
                        h.result === 'Match'
                          ? 'bg-green-900 text-green-400 border border-green-500/30'
                          : 'bg-yellow-900 text-yellow-400 border border-yellow-500/30'
                      }`}
                    >
                      {h.result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
              Real-world couples tend to be matched in attractiveness not because they prefer it, but because the market forces a compromise between desire for the best and fear of rejection.
            </p>
            <button
              onClick={() => {
                setRound(1);
                setHistory([]);
                setGameState('intro');
              }}
              className="text-pink-500 hover:text-white underline font-bold tracking-widest uppercase text-sm"
            >
              Replay Simulation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 5. LESSON 3 SPECIFIC COMPONENTS
// ==========================================

const OnionModel: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [layer, setLayer] = useState<'superficial' | 'middle' | 'inner'>('superficial');

  const data = {
    superficial: {
      title: '1. The Superficial Layer',
      content: "Low Risk. Information is biographical and low stakes. E.g., 'What do you do for work?', 'Nice weather today'.",
      color: 'border-yellow-200 bg-yellow-100/10 text-yellow-100',
    },
    middle: {
      title: '2. The Middle Layer',
      content: "Moderate Risk. Opinions, attitudes, and preferences. E.g., 'I hate Donald Trump', 'I love Jazz music'.",
      color: 'border-orange-400 bg-orange-900/20 text-orange-200',
    },
    inner: {
      title: '3. The Inner Core',
      content: "High Risk. Deep secrets, fears, hopes, and traumas. E.g., 'I'm terrified of failure', 'I was bullied as a child'.",
      color: 'border-red-500 bg-red-900/30 text-red-200',
    },
  } as const;

  return (
    <div className={`h-full grid grid-cols-1 lg:grid-cols-2 ${isPresentation ? 'gap-12' : 'gap-8'}`}>
      <div className="flex items-center justify-center">
        <div className={`relative flex items-center justify-center ${isPresentation ? 'w-[500px] h-[500px]' : 'w-[300px] h-[300px]'}`}>
          <button
            onClick={() => setLayer('superficial')}
            className={`absolute inset-0 rounded-full border-4 border-yellow-200 bg-yellow-100/5 hover:bg-yellow-100/20 transition-all ${
              layer === 'superficial' ? 'scale-105 shadow-[0_0_30px_rgba(253,224,71,0.3)] z-10' : 'scale-100 z-0'
            }`}
          ></button>

          <button
            onClick={() => setLayer('middle')}
            className={`absolute rounded-full border-4 border-orange-400 bg-orange-500/10 hover:bg-orange-500/20 transition-all ${
              isPresentation ? 'w-[350px] h-[350px]' : 'w-[200px] h-[200px]'
            } ${layer === 'middle' ? 'scale-110 shadow-[0_0_30px_rgba(251,146,60,0.4)] z-20' : 'scale-100 z-10'}`}
          ></button>

          <button
            onClick={() => setLayer('inner')}
            className={`absolute rounded-full border-4 border-red-500 bg-red-600/20 hover:bg-red-600/40 transition-all ${
              isPresentation ? 'w-[150px] h-[150px]' : 'w-[100px] h-[100px]'
            } ${layer === 'inner' ? 'scale-125 shadow-[0_0_30px_rgba(239,68,68,0.6)] z-30' : 'scale-100 z-20'}`}
          >
            <span className="text-xs font-bold text-red-300">CORE</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className={`font-bold text-white mb-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Social Penetration Theory</h3>
        <div className={`p-8 rounded-xl border-l-4 animate-fadeIn transition-all ${data[layer].color}`}>
          <strong className={`block mb-4 text-white uppercase tracking-widest ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
            {data[layer].title}
          </strong>
          <p className={`leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>{data[layer].content}</p>
        </div>
        <div className="mt-6 flex gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-200"></div> Breadth (Quantity)
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div> Depth (Quality)
          </div>
        </div>
      </div>
    </div>
  );
};

const ReciprocityCycle: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [stage, setStage] = useState(1);
  const [breakdown, setBreakdown] = useState(false);

  const stages = [
    { id: 1, title: 'Disclosure', text: 'Partner A takes a risk by revealing something personal.', icon: MessageSquare, color: 'blue' },
    {
      id: 2,
      title: breakdown ? 'Lack of Empathy' : 'Empathy & Understanding',
      text: breakdown
        ? "Partner B responds with indifference or judgment. No 'Safety Zone' is created."
        : "Partner B responds sensitively, creating a 'Safety Zone'. This validates Partner A. Intimacy begins to form.",
      icon: breakdown ? Ban : ThumbsUp,
      color: breakdown ? 'red' : 'green',
    },
    {
      id: 3,
      title: breakdown ? 'Trust Erosion' : 'Reciprocal Disclosure',
      text: breakdown
        ? 'Partner A feels rejected and pulls back. The relationship stalls or ends.'
        : 'Partner B reveals something of similar depth. Intimacy cycle is complete.',
      icon: breakdown ? HeartCrack : RefreshCw,
      color: breakdown ? 'gray' : 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string; bgIcon: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-900/30', bgIcon: 'bg-blue-900/50', text: 'text-blue-400', border: 'border-blue-500' },
      green: { bg: 'bg-green-900/30', bgIcon: 'bg-green-900/50', text: 'text-green-400', border: 'border-green-500' },
      red: { bg: 'bg-red-900/30', bgIcon: 'bg-red-900/50', text: 'text-red-400', border: 'border-red-500' },
      purple: { bg: 'bg-purple-900/30', bgIcon: 'bg-purple-900/50', text: 'text-purple-400', border: 'border-purple-500' },
      gray: { bg: 'bg-gray-800', bgIcon: 'bg-gray-700', text: 'text-gray-400', border: 'border-gray-600' },
    };
    return map[color] || map.gray;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-center mb-8">
        <button
          onClick={() => {
            setBreakdown(!breakdown);
            setStage(1);
          }}
          className={`flex items-center gap-3 px-6 py-2 rounded-full border transition-all ${
            breakdown ? 'bg-red-900/50 border-red-500 text-red-200' : 'bg-green-900/50 border-green-500 text-green-200'
          }`}
        >
          {breakdown ? <AlertTriangle size={20} /> : <Shield size={20} />}
          <span className="font-bold uppercase text-xs tracking-widest">
            {breakdown ? 'Scenario: Breakdown' : 'Scenario: Success'}
          </span>
        </button>
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-2 flex-grow ${isPresentation ? 'gap-16' : 'gap-8'}`}>
        <div className="flex flex-col justify-center space-y-4">
          {stages.map((s) => {
            const colors = getColorClasses(s.color);
            return (
              <div
                key={s.id}
                onClick={() => setStage(s.id)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                  stage === s.id ? `${colors.bg} ${colors.border}` : 'bg-gray-800 border-gray-700 opacity-50 hover:opacity-80'
                }`}
              >
                <div className={`p-3 rounded-full ${colors.bgIcon} ${colors.text}`}>
                  <s.icon size={24} />
                </div>
                <div>
                  <h4 className={`font-bold ${colors.text} uppercase tracking-wider text-sm`}>
                    Step {s.id}: {s.title}
                  </h4>
                  {stage === s.id && <p className="text-gray-300 mt-2 text-sm animate-fadeIn">{s.text}</p>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center relative">
          <div className={`relative ${isPresentation ? 'w-[500px] h-[500px]' : 'w-[300px] h-[300px]'}`}>
            <div className={`absolute inset-0 rounded-full border-2 border-dashed animate-[spin_3s_linear_infinite] ${breakdown ? 'border-red-900/30' : 'border-gray-700'}`}></div>

            <div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-500 ${
                stage >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-50'
              } ${isPresentation ? 'w-24 h-24' : 'w-16 h-16'} ${breakdown && stage === 3 ? '-translate-y-full opacity-50 grayscale' : ''}`}
            >
              <span className="text-white font-bold">A</span>
            </div>

            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-500 ${
                breakdown && stage >= 2 ? 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.3)]' : 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
              } ${stage >= 3 || (breakdown && stage >= 2) ? 'scale-100 opacity-100' : 'scale-50 opacity-50'} ${isPresentation ? 'w-24 h-24' : 'w-16 h-16'}`}
            >
              <span className="text-white font-bold">{breakdown && stage >= 2 ? <X size={32} /> : 'B'}</span>
            </div>

            <div
              className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 rounded-full blur-lg ${
                stage === 1 ? 'w-1 h-0 opacity-0' : ''
              } ${stage === 2 && !breakdown ? 'w-2 h-32 opacity-40 bg-gradient-to-b from-blue-500 to-green-400' : ''} ${
                stage === 2 && breakdown ? 'w-2 h-32 opacity-60 bg-gradient-to-b from-blue-500 to-red-600' : ''
              } ${stage === 3 && !breakdown ? 'w-4 h-full opacity-60 bg-gradient-to-b from-blue-500 via-green-400 to-purple-500' : ''} ${
                stage === 3 && breakdown ? 'w-0 h-0 opacity-0' : ''
              }`}
            ></div>

            <div
              className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-700 ${
                stage >= 2 && !breakdown ? 'scale-100' : ''
              } ${stage === 3 && !breakdown ? 'bg-white shadow-[0_0_40px_rgba(255,255,255,0.4)]' : ''} ${stage === 3 && breakdown ? 'scale-100 bg-transparent' : ''} ${
                stage < 2 ? 'scale-0' : ''
              } ${isPresentation ? 'w-32 h-32' : 'w-20 h-20'}`}
            >
              {breakdown ? (
                <HeartCrack className="text-red-600" size={isPresentation ? 60 : 40} />
              ) : (
                <Heart
                  className={`text-pink-500 transition-all duration-700 ${stage === 3 ? 'fill-current animate-pulse scale-110' : 'opacity-40 scale-75'}`}
                  size={isPresentation ? 50 : 30}
                  fill={stage === 3 ? 'currentColor' : 'none'}
                  strokeWidth={stage === 3 ? 0 : 2}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const dialogueTree: Record<string, any> = {
  start: {
    id: 'start',
    text: "Hey! Thanks for meeting me. The coffee here is supposed to be really good. I'm a bit nervous, to be honest!",
    partnerMood: 'neutral',
    options: [
      {
        text: 'Yeah, me too. I like your jacket, by the way.',
        nextId: 'hobby',
        risk: 'LOW',
        intimacyChange: 5,
        feedback: 'Good opener. Superficial but warm (Breadth).',
      },
      {
        text: 'My last ex cheated on me at a coffee shop like this.',
        nextId: 'trauma',
        risk: 'HIGH',
        intimacyChange: -20,
        feedback: 'Too much! Negative disclosure in the first 10 seconds.',
      },
      { text: "I don't get nervous. I am superior.", nextId: 'end_awkward', risk: 'MED', intimacyChange: -10, feedback: 'Arrogance blocks connection.' },
    ],
  },
  hobby: {
    id: 'hobby',
    text: 'Oh, thank you! I found it at a vintage store. I love hunting for unique clothes. What about you? What do you do for fun?',
    partnerMood: 'happy',
    options: [
      { text: "I mostly just work. I don't have time for fun.", nextId: 'work', risk: 'LOW', intimacyChange: -5, feedback: 'Low breadth. Stops the conversation flow.' },
      {
        text: 'I love hiking! Being in nature really helps me clear my head.',
        nextId: 'vulnerability_nature',
        risk: 'MED',
        intimacyChange: 10,
        feedback: 'Good! You shared a fact (hiking) and a feeling (clears head).',
      },
      { text: 'I collect human teeth.', nextId: 'end_awkward', risk: 'HIGH', intimacyChange: -30, feedback: 'Social norm violation.' },
    ],
  },
  work: {
    id: 'work',
    text: 'Oh... okay. Work is important I guess. *Sips coffee awkwardly* So... do you have any siblings?',
    partnerMood: 'neutral',
    options: [
      { text: 'No. Just me.', nextId: 'end_awkward', risk: 'LOW', intimacyChange: 0, feedback: "Dead end. You aren't offering any information to build on." },
      {
        text: "Yeah, a sister. We used to fight, but we're close now.",
        nextId: 'vulnerability_family',
        risk: 'MED',
        intimacyChange: 10,
        feedback: 'Nice recovery. Sharing personal history builds the middle layer.',
      },
    ],
  },
  vulnerability_family: {
    id: 'vulnerability_family',
    text: "That's really sweet. I wish I had that. My brother and I drifted apart years ago. It's... kinda lonely sometimes.",
    partnerMood: 'neutral',
    options: [
      {
        text: "I'm sure he still cares. Relationships take work.",
        nextId: 'future',
        risk: 'MED',
        intimacyChange: 15,
        feedback: 'Good support. You validated him and moved to a shared view.',
      },
      { text: 'That sucks. Anyway, nice weather.', nextId: 'end_awkward', risk: 'LOW', intimacyChange: -10, feedback: 'Dismissive. You ignored the emotional bid.' },
    ],
  },
  vulnerability_nature: {
    id: 'vulnerability_nature',
    text: "That makes sense. I feel that way about painting. It's the only time I feel like I'm not... pretending to be someone else. Does that make sense?",
    partnerMood: 'neutral',
    options: [
      {
        text: 'Totally. It\'s hard to be authentic in a world that wants you to fit in.',
        nextId: 'future',
        risk: 'MED',
        intimacyChange: 15,
        feedback: 'Excellent Reciprocity. You validated his feeling and shared a shared view.',
      },
      { text: 'Painting is cool. My aunt paints.', nextId: 'missed_cue', risk: 'LOW', intimacyChange: -10, feedback: 'You missed the cue! He offered depth (feeling fake), you stayed superficial.' },
      { text: 'You feel like a fake? You should see a therapist.', nextId: 'end_failure', risk: 'HIGH', intimacyChange: -20, feedback: 'Judgmental. Immediate shutdown of intimacy.' },
    ],
  },
  missed_cue: {
    id: 'missed_cue',
    text: "Oh. That's... nice for her. *He pulls back, looking disappointed.* Anyway. Do you have any siblings?",
    partnerMood: 'neutral',
    options: [
      { text: 'No, just me.', nextId: 'end_awkward', risk: 'LOW', intimacyChange: 0, feedback: 'Dead end.' },
      { text: "Yeah, a sister. We're close.", nextId: 'vulnerability_family', risk: 'MED', intimacyChange: 5, feedback: 'Recovery attempted. Pivoting to a new topic.' },
    ],
  },
  trauma: {
    id: 'trauma',
    text: "Uh... wow. That's heavy. I'm sorry that happened to you, but... I barely know your name.",
    partnerMood: 'shocked',
    options: [
      {
        text: 'Sorry, I overshared. Let\'s start over. I\'m [Name].',
        nextId: 'start',
        risk: 'LOW',
        intimacyChange: 5,
        feedback: 'Good repair attempt. Acknowledging the breach of norms.',
      },
      { text: "It's fine. Life is pain.", nextId: 'end_failure', risk: 'HIGH', intimacyChange: -10, feedback: 'Doubling down on negativity drives people away.' },
    ],
  },
  future: {
    id: 'future',
    text: 'Exactly! I\'m glad you get it. Honestly, sometimes I dream of just quitting my job and moving to the coast. Do you ever feel like that?',
    partnerMood: 'happy',
    options: [
      {
        text: 'All the time. I want to build a cabin and write a book.',
        nextId: 'end_success',
        risk: 'HIGH',
        intimacyChange: 20,
        feedback: 'Core Layer reached! Shared hopes and dreams solidify the bond.',
      },
      { text: 'No, I like my job. Stability is important.', nextId: 'end_awkward', risk: 'MED', intimacyChange: -5, feedback: 'Honest, but creates distance in this specific moment.' },
    ],
  },
  end_success: { id: 'end_success', text: 'Wow, me too! I\'ve never told anyone that on a first date. I feel like we really clicked.', partnerMood: 'happy', options: [] },
  end_failure: { id: 'end_failure', text: 'Look, this is getting a bit uncomfortable. I think I\'m going to go.', partnerMood: 'annoyed', options: [] },
  end_awkward: { id: 'end_awkward', text: 'Right... well, nice meeting you. I should probably get going.', partnerMood: 'neutral', options: [] },
};

const FirstDateSim: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [intimacy, setIntimacy] = useState(20);
  const [history, setHistory] = useState<string[]>([]);
  const [typingText, setTypingText] = useState('');

  const currentNode = dialogueTree[currentNodeId];

  useEffect(() => {
    if (!currentNode) return;
    setTypingText('');
    const fullText = currentNode.text as string;
    let charIndex = 0;
    if (fullText.length > 0) {
      setTypingText(fullText[0]);
      charIndex = 1;
    }
    const intervalId = setInterval(() => {
      if (charIndex >= fullText.length) {
        clearInterval(intervalId);
        return;
      }
      setTypingText(fullText.slice(0, charIndex + 1));
      charIndex++;
    }, 30);
    return () => clearInterval(intervalId);
  }, [currentNodeId]);

  const handleChoice = (option: any) => {
    setIntimacy((prev) => Math.min(100, Math.max(0, prev + option.intimacyChange)));
    setHistory((prev) => [option.feedback, ...prev]);
    setTypingText('');
    setCurrentNodeId(option.nextId);
  };

  const reset = () => {
    setCurrentNodeId('start');
    setIntimacy(20);
    setHistory([]);
  };

  const getPartnerIcon = () => {
    switch (currentNode.partnerMood) {
      case 'happy':
        return <Smile size={80} className="text-green-400 animate-bounce" />;
      case 'annoyed':
        return <Frown size={80} className="text-red-500 animate-pulse" />;
      case 'shocked':
        return <AlertTriangle size={80} className="text-yellow-400 animate-[shake_0.5s_ease-in-out]" />;
      default:
        return <Meh size={80} className="text-blue-400" />;
    }
  };

  return (
    <div className="h-full flex flex-col font-retro relative overflow-hidden bg-gray-950 p-1 rounded-xl border-4 border-gray-700">
      <div className="absolute inset-0 pointer-events-none retro-scanlines z-20 opacity-10"></div>

      <div className="flex justify-between items-center p-4 bg-black border-b-4 border-gray-800 z-10">
        <div className="flex flex-col w-1/2">
          <span className="text-xs text-pink-500 mb-1 tracking-widest">INTIMACY LEVEL</span>
          <div className="w-full h-4 bg-gray-900 border-2 border-gray-700 relative">
            <div
              className={`h-full transition-all duration-500 ${intimacy > 60 ? 'bg-pink-500' : intimacy > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
              style={{ width: `${intimacy}%` }}
            ></div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-gray-500 block">TURN</span>
          <span className="text-xl text-cyan-400">{history.length + 1}</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4 relative z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
        <div className="mb-6 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{getPartnerIcon()}</div>
        <div className="w-full max-w-3xl bg-blue-900/20 border-2 border-blue-500/50 p-6 rounded-lg min-h-[100px] relative">
          <div className="absolute -top-3 left-4 bg-black px-2 text-xs text-blue-400 border border-blue-500">ALEX</div>
          <p className="text-white text-sm md:text-lg leading-relaxed font-mono whitespace-pre-wrap break-words">
            {typingText}
            <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>

      <div className="bg-black border-t-4 border-gray-800 p-4 z-10 min-h-[180px]">
        {currentNode.options.length > 0 ? (
          <div className="grid grid-cols-1 gap-2 max-w-4xl mx-auto">
            <div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Select Response Protocol:</div>
            {currentNode.options.map((opt: any, idx: number) => (
              <button
                key={idx}
                onClick={() => handleChoice(opt)}
                className="group flex items-center justify-between p-3 border-2 border-gray-700 hover:border-pink-500 hover:bg-pink-900/20 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <ChevronRight size={16} className="text-gray-600 group-hover:text-pink-500" />
                  <span className="text-gray-300 group-hover:text-white text-xs md:text-sm font-mono">"{opt.text}"</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-1 rounded border ${
                    opt.risk === 'HIGH' ? 'border-red-500 text-red-500' : opt.risk === 'MED' ? 'border-yellow-500 text-yellow-500' : 'border-green-500 text-green-500'
                  }`}
                >
                  RISK: {opt.risk}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className={`text-2xl ${currentNode.id === 'end_success' ? 'text-green-400' : 'text-red-500'}`}>
              {currentNode.id === 'end_success' ? 'RELATIONSHIP ESTABLISHED' : 'CONNECTION FAILED'}
            </div>
            <button onClick={reset} className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-500">
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>

      {!isPresentation && history.length > 0 && (
        <div className="absolute top-20 right-4 w-64 bg-black/90 border border-gray-700 p-2 text-[10px] text-gray-400 font-mono hidden lg:block pointer-events-none">
          <div className="text-pink-500 mb-1 border-b border-gray-800 pb-1">ANALYSIS LOG</div>
          {history.slice(0, 3).map((h, i) => (
            <div key={i} className="mb-1 text-green-400">
              {">>"} {h}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const EssayPlanRevealL3: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="bg-gray-900/80 border border-gray-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Shield size={120} />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-gray-700 pb-4">
        <h3 className={`font-bold text-gray-200 tracking-widest ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Structure Planning</h3>
        <span className="bg-pink-600 text-white px-3 py-1 text-xs font-bold rounded">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <Eye size={20} /> Reveal Plan
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO1: Concepts (6 Marks)
            </strong>
            <ul className={`text-gray-400 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li>Social Penetration Theory (Altman & Taylor).</li>
              <li>Onion Metaphor (Breadth & Depth).</li>
              <li>Reciprocity (Reis & Shaver).</li>
              <li>Norms of disclosure.</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Support (Sprecher & Hendrick)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Sprecher & Hendrick (2004):</strong> Found strong positive correlations between several measures of relationship satisfaction and self-disclosure in dating couples.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Support (Hass & Stafford)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Hass & Stafford (1998):</strong> 57% of gay men and lesbians said open/honest disclosure was the main way they maintained and deepened their relationships.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Challenge (Cultural Bias)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Tang et al. (2013):</strong> Men/Women in USA (individualist) disclose significantly more sexual thoughts/feelings than in China (collectivist). Theory is ethnocentric.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 6. LESSON 4 SPECIFIC COMPONENTS
// ==========================================

const FilterFunnel: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [activeFilter, setActiveFilter] = useState<'availables' | 'demography' | 'attitudes' | 'complementarity'>('availables');

  const filters = {
    availables: { title: 'Field of Availables', desc: 'The entire pool of potential partners we could realistically form a relationship with.', icon: Users },
    demography: {
      title: '1. Social Demography',
      desc: 'Factors influencing the chance of meeting. Proximity, Class, Education, Ethnicity. We filter out those who are too different or too far away.',
      icon: MapPin,
    },
    attitudes: {
      title: '2. Similarity in Attitudes',
      desc: "Crucial for first 18 months. Sharing basic values and beliefs promotes communication. 'Law of Attraction' (Byrne).",
      icon: Brain,
    },
    complementarity: {
      title: '3. Complementarity',
      desc: "Crucial for long-term (>18 months). Ability to meet each other's needs. Opposites attract (e.g. nurturing + needing care). Forms a 'whole'.",
      icon: Heart,
    },
  } as const;

  const currentData = filters[activeFilter];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center w-full max-w-md gap-2 relative z-10">
          <button
            onClick={() => setActiveFilter('availables')}
            className={`w-full p-4 rounded-t-xl border-2 transition-all ${
              activeFilter === 'availables'
                ? 'bg-pink-900/40 border-pink-400 text-pink-100 scale-105 shadow-lg shadow-pink-500/20'
                : 'bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-400'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase tracking-wider">Field of Availables</span>
              <Users size={20} />
            </div>
          </button>
          <ArrowDown size={24} className="text-gray-600" />
          <button
            onClick={() => setActiveFilter('demography')}
            className={`w-[85%] p-4 border-2 transition-all ${
              activeFilter === 'demography'
                ? 'bg-purple-900/40 border-purple-400 text-purple-100 scale-105 shadow-lg shadow-purple-500/20'
                : 'bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-400'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold">1. Social Demography</span>
              <MapPin size={20} />
            </div>
          </button>
          <ArrowDown size={24} className="text-gray-600" />
          <button
            onClick={() => setActiveFilter('attitudes')}
            className={`w-[65%] p-4 border-2 transition-all ${
              activeFilter === 'attitudes'
                ? 'bg-purple-900/40 border-purple-400 text-purple-100 scale-105 shadow-lg shadow-purple-500/20'
                : 'bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-400'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold">2. Attitudes</span>
              <Brain size={20} />
            </div>
          </button>
          <ArrowDown size={24} className="text-gray-600" />
          <button
            onClick={() => setActiveFilter('complementarity')}
            className={`w-[45%] p-4 rounded-b-xl border-2 transition-all ${
              activeFilter === 'complementarity'
                ? 'bg-pink-900/40 border-pink-400 text-pink-100 scale-105 shadow-lg shadow-pink-500/20'
                : 'bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-400'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold">3. Complementarity</span>
              <Heart size={20} />
            </div>
          </button>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-drop" style={{ animationDuration: '3s', left: '20%' }}></div>
          <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-drop" style={{ animationDuration: '4s', left: '70%' }}></div>
          <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-drop" style={{ animationDuration: '2.5s', left: '40%' }}></div>
        </div>
      </div>

      <div className={`flex flex-col justify-center space-y-6 ${isPresentation ? 'px-8' : 'px-4'}`}>
        <div className="bg-gray-900/50 border border-gray-700 p-8 rounded-2xl h-full relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-2 h-full ${
              activeFilter === 'availables'
                ? 'bg-pink-500'
                : activeFilter === 'demography'
                  ? 'bg-purple-500'
                  : activeFilter === 'attitudes'
                    ? 'bg-purple-500'
                    : 'bg-pink-500'
            } transition-colors duration-500`}
          ></div>
          <div className="mb-6 flex justify-between items-start animate-fadeIn">
            <div>
              <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>{currentData.title}</h3>
              <span className="text-gray-400 text-sm font-mono uppercase tracking-widest">Filter Theory (Kerckhoff & Davis 1962)</span>
            </div>
            <currentData.icon size={isPresentation ? 48 : 32} className="text-gray-500" />
          </div>
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
              <strong className="block text-gray-300 text-xs uppercase mb-2">Description</strong>
              <p className={`text-gray-100 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>{currentData.desc}</p>
            </div>
            {activeFilter === 'demography' && (
              <div className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                <strong className="block text-purple-400 text-xs uppercase mb-1">Key Term: Homogamy</strong>
                <p className="text-purple-100 text-sm">The tendency to form relationships with people who are socially and culturally similar.</p>
              </div>
            )}
            {activeFilter === 'attitudes' && (
              <div className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                <strong className="block text-purple-400 text-xs uppercase mb-1">Timeframe</strong>
                <p className="text-purple-100 text-sm">Critical for the first 18 months. If attitudes diverge, the relationship often ends here.</p>
              </div>
            )}
            {activeFilter === 'complementarity' && (
              <div className="bg-pink-900/20 p-4 rounded-xl border border-pink-500/30">
                <strong className="block text-pink-400 text-xs uppercase mb-1">Long Term</strong>
                <p className="text-pink-100 text-sm">After 18 months, similarity becomes less important. Needs fulfilment takes priority.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const subjects = [
  { id: 1, name: 'ARCHITECT-894', desc: '28. High Ambition.', values: 'Ambition', needs: 'Nurturing', maxDist: 30 },
  { id: 2, name: 'ARTIST-202', desc: '24. Free Spirit.', values: 'Creativity', needs: 'Practical', maxDist: 20 },
  { id: 3, name: 'CEO-550', desc: '45. Workaholic.', values: 'Success', needs: 'Supportive', maxDist: 50 },
  { id: 4, name: 'INTROVERT-101', desc: '30. Quiet Life.', values: 'Privacy', needs: 'Social', maxDist: 15 },
  { id: 5, name: 'HIKER-777', desc: '33. Outdoorsy.', values: 'Nature', needs: 'Homebody', maxDist: 100 },
];

const generateCandidates = (subject: (typeof subjects)[number]) => {
  const candidates: any[] = [];
  candidates.push({ id: 1, name: 'C-01', dist: 5, values: subject.values, trait: subject.needs, status: 'match' });
  for (let i = 0; i < 4; i++) {
    candidates.push({ id: 2 + i, name: `C-0${2 + i}`, dist: subject.maxDist + Math.floor(Math.random() * 100 + 20), values: subject.values, trait: subject.needs, status: 'fail_demo' });
  }
  const badValues = ['Lazy', 'Chaos', 'Apathy', 'Drama', 'Boring'];
  for (let i = 0; i < 4; i++) {
    candidates.push({ id: 6 + i, name: `C-0${6 + i}`, dist: 10, values: badValues[i], trait: subject.needs, status: 'fail_att' });
  }
  const badTraits = ['Clingy', 'Distant', 'Selfish', 'Rude'];
  for (let i = 0; i < 3; i++) {
    candidates.push({ id: 10 + i, name: `C-${10 + i}`, dist: 12, values: subject.values, trait: badTraits[i], status: 'fail_comp' });
  }
  return candidates.sort(() => Math.random() - 0.5);
};

const MatchmakerSim: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [subjectIdx, setSubjectIdx] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [candidates, setCandidates] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [feedback, setFeedback] = useState('AWAITING INPUT...');
  const [feedbackType, setFeedbackType] = useState<'neutral' | 'success' | 'error'>('neutral');
  const [phase, setPhase] = useState<'briefing' | 'game' | 'subject_complete'>('briefing');

  const currentSubject = subjects[subjectIdx];

  useEffect(() => {
    if (phase === 'game' && currentLevel === 1) {
      setCandidates(generateCandidates(currentSubject));
    }
  }, [subjectIdx, phase, currentLevel, currentSubject]);

  const toggleSelection = (id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const checkFilters = () => {
    let correctIds: number[] = [];
    let errorMsg = '';

    if (currentLevel === 1) {
      correctIds = candidates.filter((c) => c.dist > currentSubject.maxDist).map((c) => c.id);
      errorMsg = 'Identify all candidates outside the geographical limit.';
    } else if (currentLevel === 2) {
      correctIds = candidates.filter((c) => c.values !== currentSubject.values).map((c) => c.id);
      errorMsg = 'Identify all candidates with incompatible attitudes.';
    } else if (currentLevel === 3) {
      correctIds = candidates.filter((c) => c.trait !== currentSubject.needs).map((c) => c.id);
      errorMsg = 'Identify candidates who fail to meet emotional needs.';
    }

    const allCorrectSelected = correctIds.every((id) => selectedIds.includes(id));
    const noExtrasSelected = selectedIds.every((id) => correctIds.includes(id));

    if (allCorrectSelected && noExtrasSelected) {
      setFeedback('FILTER APPLIED SUCCESSFULLY.');
      setFeedbackType('success');

      setTimeout(() => {
        setCandidates((prev) => prev.filter((c) => !selectedIds.includes(c.id)));
        setSelectedIds([]);

        if (currentLevel < 3) {
          setCurrentLevel((prevLevel) => prevLevel + 1);
        } else {
          setPhase('subject_complete');
        }
      }, 1000);
    } else {
      setFeedback(`ERROR: INCORRECT SELECTION. ${errorMsg}`);
      setFeedbackType('error');
    }
  };

  const nextSubject = () => {
    if (subjectIdx < subjects.length - 1) {
      setSubjectIdx((prev) => prev + 1);
      setCurrentLevel(1);
      setPhase('game');
      setFeedback('SYSTEM READY');
      setFeedbackType('neutral');
    } else {
      setFeedback('ALL SUBJECTS PROCESSED. DATABASE OPTIMIZED.');
      setFeedbackType('success');
    }
  };

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-gray-900 border-4 border-gray-700 rounded-xl relative overflow-hidden grid-bg shadow-2xl">
      <div className="flex justify-between items-center p-4 border-b-2 border-gray-700 bg-gray-950 z-10">
        <div className="flex items-center gap-2">
          <Database size={16} className="text-pink-500" />
          <span className="text-pink-500 font-bold tracking-widest">MATCHMAKER_ENGINE_V2.0</span>
        </div>
        <div className={`font-bold ${feedbackType === 'error' ? 'text-red-500 animate-pulse' : feedbackType === 'success' ? 'text-green-500' : 'text-gray-400'}`}>
          {feedback}
        </div>
      </div>
      <div className="flex-grow flex relative z-10">
        <div className="w-1/4 border-r-2 border-gray-700 bg-gray-900/90 p-4 flex flex-col gap-6">
          <div>
            <span className="text-gray-500 block text-[10px] uppercase mb-1">Target Subject {subjectIdx + 1}/5</span>
            <div className="bg-gray-800 p-3 rounded border border-gray-600 shadow-inner">
              <span className="block text-white font-bold text-lg mb-1">{currentSubject.name}</span>
              <span className="block text-gray-300 text-xs mb-2">{currentSubject.desc}</span>
              <div className="space-y-1 border-t border-gray-700 pt-2">
                <div className="flex justify-between text-[10px]">
                  <span className="text-purple-400">Max Radius:</span> <span className="text-white">{currentSubject.maxDist}mi</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-purple-400">Values:</span> <span className="text-white">{currentSubject.values}</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-pink-400">Needs:</span> <span className="text-white">{currentSubject.needs}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <span className="text-gray-500 block text-[10px] uppercase mb-2">Active Filter Level</span>
            <div className={`p-3 border mb-2 rounded transition-all ${currentLevel === 1 ? 'border-purple-500 bg-purple-900/20 text-purple-300' : 'border-gray-700 text-gray-600'}`}>
              1. DEMOGRAPHY <span className="block text-[9px] mt-1 opacity-70">Select candidates {" > "}{currentSubject.maxDist}mi</span>
            </div>
            <div className={`p-3 border mb-2 rounded transition-all ${currentLevel === 2 ? 'border-purple-500 bg-purple-900/20 text-purple-300' : 'border-gray-700 text-gray-600'}`}>
              2. ATTITUDES <span className="block text-[9px] mt-1 opacity-70">Select different values</span>
            </div>
            <div className={`p-3 border rounded transition-all ${currentLevel === 3 ? 'border-pink-500 bg-pink-900/20 text-pink-300' : 'border-gray-700 text-gray-600'}`}>
              3. COMPLEMENTARITY <span className="block text-[9px] mt-1 opacity-70">Select unmet needs</span>
            </div>
          </div>
          <button
            onClick={checkFilters}
            disabled={phase !== 'game'}
            className="w-full py-3 bg-pink-700 hover:bg-pink-600 text-white font-bold rounded shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            APPLY FILTER
          </button>
        </div>
        <div className="flex-grow p-6 relative bg-gray-900">
          {phase === 'briefing' && (
            <div className="absolute inset-0 bg-gray-950/95 z-30 flex flex-col items-center justify-center text-center p-12">
              <Target size={80} className="text-pink-500 mb-6" />
              <h3 className="text-3xl text-white font-bold mb-4 tracking-wider">MISSION BRIEFING</h3>
              <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
                You are the algorithm. Filter the pool of candidates for 5 different subjects.
                <br />
                <br />
                <strong>INSTRUCTION:</strong> At each level, manually select (click) the candidates that <span className="text-red-400">DO NOT MATCH</span> the criteria to filter them out.
              </p>
              <button onClick={() => setPhase('game')} className="bg-pink-600 text-white px-10 py-4 rounded font-bold hover:bg-pink-500 transition-all text-xl shadow-pink-500/20 shadow-lg">
                INITIALIZE
              </button>
            </div>
          )}
          {phase === 'subject_complete' && (
            <div className="absolute inset-0 bg-green-900/95 z-30 flex flex-col items-center justify-center text-center p-12 backdrop-blur-md">
              <CheckCircle size={80} className="text-green-400 mb-6 animate-bounce" />
              <h3 className="text-3xl text-white font-bold mb-2">MATCH SUCCESS</h3>
              <div className="bg-gray-900 p-4 rounded-xl border border-green-500 mb-8">
                <span className="block text-gray-400 text-xs uppercase">Perfect Match Found</span>
                <span className="block text-white text-2xl font-bold">{candidates[0]?.name}</span>
              </div>
              {subjectIdx < subjects.length - 1 ? (
                <button onClick={nextSubject} className="bg-white text-green-900 px-10 py-4 rounded font-bold hover:bg-gray-200 transition-all text-xl">
                  NEXT SUBJECT
                </button>
              ) : (
                <div className="text-green-300 text-xl font-bold border-t border-green-500 pt-4">ALL SUBJECTS COMPLETED</div>
              )}
            </div>
          )}
          <div className="grid grid-cols-4 gap-4 h-full content-start">
            {candidates.map((c) => (
              <button
                key={c.id}
                onClick={() => toggleSelection(c.id)}
                className={`relative border-2 p-3 rounded flex flex-col gap-1 items-center text-center transition-all group ${
                  selectedIds.includes(c.id)
                    ? 'bg-red-900/40 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                    : 'bg-gray-800 border-gray-600 hover:border-pink-400 hover:bg-gray-700'
                }`}
              >
                {selectedIds.includes(c.id) && (
                  <div className="absolute top-2 right-2 text-red-500">
                    <X size={16} />
                  </div>
                )}
                <div className="w-10 h-10 rounded-full bg-gray-700 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UserPlus size={20} className={selectedIds.includes(c.id) ? 'text-red-400' : 'text-gray-400'} />
                </div>
                <span className="text-white font-bold">{c.name}</span>
                <div className="text-[10px] w-full border-t border-gray-700 pt-2 mt-1 space-y-1 font-mono">
                  <div className={`flex justify-between ${currentLevel === 1 ? 'text-pink-300 font-bold' : 'text-gray-600'}`}>
                    <span>DIST:</span> <span>{c.dist}mi</span>
                  </div>
                  <div className={`flex justify-between ${currentLevel === 2 ? 'text-pink-300 font-bold' : 'text-gray-600'}`}>
                    <span>VAL:</span> <span>{c.values}</span>
                  </div>
                  <div className={`flex justify-between ${currentLevel === 3 ? 'text-pink-300 font-bold' : 'text-gray-600'}`}>
                    <span>NEED:</span> <span>{c.trait}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EssayPlanRevealL4: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="bg-gray-900/80 border border-gray-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Shield size={120} />
      </div>
      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-gray-700 pb-4">
        <h3 className={`font-bold text-gray-200 tracking-widest ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Structure Planning</h3>
        <span className="bg-pink-600 text-white px-3 py-1 text-xs font-bold rounded">16 MARKS</span>
      </div>
      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <Search size={20} /> Reveal Plan
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <strong className={`text-purple-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO1: Concepts (6 Marks)
            </strong>
            <ul className={`text-gray-400 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li>Filter Theory (Kerckhoff & Davis, 1962).</li>
              <li>Filter 1: Social Demography (Proximity, Class, Homogamy).</li>
              <li>Filter 2: Similarity in Attitudes (&lt;18 Months).</li>
              <li>Filter 3: Complementarity (&gt;18 Months).</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Support (Original Study)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Kerckhoff & Davis (1962):</strong> Longitudinal study of student couples. Similarity crucial for short-term, Complementarity for long-term.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Challenge (Replicability)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Levinger (1974):</strong> Failed to replicate. Social changes & difficulty defining "relationship depth" by time (18 months cut-off).
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Challenge (Causality)
            </strong>
            <p className={`text-gray-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Anderson et al. (2003):</strong> "Attitude Alignment". We don't select for similarity; we become similar over time (Emotional Convergence).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 7A. LESSON 5 SPECIFIC COMPONENTS
// ==========================================

const StockMarketLedger: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
    <div className="flex flex-col h-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden relative shadow-2xl">
      <div className="bg-black border-b border-slate-700 h-10 overflow-hidden flex items-center whitespace-nowrap relative z-10">
        <div className="animate-ticker flex gap-8 text-xs font-mono">
          <span className="text-green-400">INTIMACY ▲ 5.2%</span>
          <span className="text-green-400">SUPPORT ▲ 3.1%</span>
          <span className="text-red-400">ARGUMENTS ▼ 1.2%</span>
          <span className="text-red-400">STRESS ▼ 4.5%</span>
          <span className="text-green-400">SEX ▲ 2.8%</span>
          <span className="text-yellow-400">COMPROMISE ▬ 0.0%</span>
          <span className="text-green-400">GIFTS ▲ 1.2%</span>
          <span className="text-red-400">NAGGING ▼ 0.8%</span>
        </div>
      </div>

      <div className="flex-grow p-6 grid grid-rows-2 gap-4 bg-ledger">
        <div className="glass-panel p-4 rounded-lg flex flex-col justify-between group hover:bg-emerald-900/40 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                <TrendingUp size={16} /> Rewards (Gains)
              </h4>
              <span className="text-[10px] text-emerald-400/60 font-mono">ASSET CLASS A</span>
            </div>
            <span className="text-2xl font-mono text-green-300 font-bold">+84.20</span>
          </div>
          <div className="flex gap-2 mt-4">
            {[70, 40, 90, 60].map((h, idx) => (
              <div key={idx} className="h-16 w-4 bg-green-500/20 rounded-sm relative">
                <div className="absolute bottom-0 w-full" style={{ height: `${h}%`, backgroundColor: '#22c55e', borderRadius: '0.125rem' }} />
              </div>
            ))}
            <div className="flex-grow flex items-end justify-end text-xs text-green-400 text-right">
              <ul className="space-y-1">
                <li>Companionship</li>
                <li>Sex</li>
                <li>Emotional Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-lg flex flex-col justify-between group hover:bg-red-900/20 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                <TrendingDown size={16} /> Costs (Losses)
              </h4>
              <span className="text-[10px] text-red-400/60 font-mono">LIABILITIES</span>
            </div>
            <span className="text-2xl font-mono text-red-300 font-bold">-32.50</span>
          </div>
          <div className="flex gap-2 mt-4">
            {[30, 50, 20].map((h, idx) => (
              <div key={idx} className="h-16 w-4 bg-red-500/20 rounded-sm relative">
                <div className="absolute bottom-0 w-full" style={{ height: `${h}%`, backgroundColor: '#ef4444', borderRadius: '0.125rem' }} />
              </div>
            ))}
            <div className="flex-grow flex items-end justify-end text-xs text-red-400 text-right">
              <ul className="space-y-1">
                <li>Stress / Energy</li>
                <li>Compromise</li>
                <li>Opportunity Cost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black p-4 border-t border-slate-700 flex justify-between items-center">
        <span className="text-slate-400 text-xs font-mono uppercase">Market Sentiment</span>
        <div className="text-right">
          <span className="block text-[10px] text-slate-500 uppercase">Net Profit</span>
          <span className="text-xl font-mono font-bold text-green-400 animate-pulse">+51.70 (PROFITABLE)</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col h-full bg-emerald-950/50 border border-emerald-800 rounded-2xl p-8 overflow-y-auto custom-scrollbar">
      <div className="mb-6 border-b border-emerald-800 pb-4">
        <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Thibaut & Kelley (1959)</h3>
        <span className="text-emerald-400 font-mono text-sm">The Economic Theory of Relationships</span>
      </div>

      <div className="space-y-6">
        <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <h4 className="text-green-300 font-bold text-lg mb-2 flex items-center gap-2">
            <Briefcase size={20} /> The Minimax Principle
          </h4>
          <p className={`text-emerald-100/90 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            Social Exchange Theory (SET) posits that we act out of self-interest. We subconsciously attempt to <strong>minimize losses</strong> and <strong>maximize gains</strong>.
            <br />
            <br />
            We judge our satisfaction with a relationship in terms of the <strong>profit</strong> it yields.
          </p>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h4 className="text-green-300 font-bold text-lg mb-2 flex items-center gap-2">
            <Scale size={20} /> Opportunity Cost
          </h4>
          <p className={`text-emerald-100/90 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            A crucial, often overlooked cost is <strong>Opportunity Cost</strong>.
            <br />
            <br />
            It's not just about the stress of the current relationship, but the recognition that being in <em>this</em> relationship means you cannot be with someone else. Your investment of time and energy here is a resource you cannot spend elsewhere.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const InteractiveThresholdGraph: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [scenario, setScenario] = useState<'standard' | 'high_esteem' | 'alternatives'>('standard');
  const scenarios = {
    standard: { cl: 40, clalt: 20, desc: 'Standard: Satisfied. Profit > CL. No attractive alternatives.' },
    high_esteem: { cl: 70, clalt: 20, desc: 'High Self-Esteem: Higher CL. Harder to satisfy. Requires high profit.' },
    alternatives: { cl: 40, clalt: 60, desc: 'Alternatives Present: CLalt rises (e.g. attractive coworker). Current profit < CLalt = Risk of leaving.' },
  } as const;

  const currentData = scenarios[scenario];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 flex flex-col h-80 lg:h-auto overflow-hidden relative shadow-inner">
        <div className="flex gap-2 mb-4 z-10 relative">
          {(
            [
              { id: 'standard', label: 'Standard' },
              { id: 'high_esteem', label: 'High Self-Esteem' },
              { id: 'alternatives', label: 'Alternatives' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => setScenario(item.id)}
              className={`px-3 py-1 rounded text-[10px] uppercase font-bold border transition-all ${
                scenario === item.id ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-slate-800 border-slate-600 text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative flex-grow border-l-2 border-b-2 border-slate-500 mt-2">
          <span className="absolute -left-6 top-1/2 -rotate-90 text-[10px] text-slate-400 tracking-widest">PROFIT</span>
          <div className="absolute inset-0 bg-ledger opacity-10"></div>
          <div className="absolute inset-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="profitGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <path d="M0,100 L0,55 C30,55 40,20 100,45 L100,100 Z" fill="url(#profitGradient)" />
              <path d="M0,55 C30,55 40,20 100,45" fill="none" stroke="white" strokeWidth="1" className="drop-shadow-md" />
            </svg>
            <span className="absolute right-2 top-[35%] text-white text-xs font-bold bg-slate-900/50 px-2 rounded backdrop-blur-sm">Current Profit</span>
          </div>

          <div
            className="absolute w-full border-t-2 border-dashed border-emerald-500 transition-all duration-700"
            style={{ bottom: `${currentData.cl}%` }}
          >
            <span className="absolute right-0 -top-5 text-xs text-emerald-400 bg-slate-900 px-1 font-bold">CL (Expectation)</span>
          </div>

          <div
            className="absolute w-full border-t-2 border-dashed border-yellow-500 transition-all duration-700"
            style={{ bottom: `${currentData.clalt}%` }}
          >
            <span className="absolute right-0 -top-5 text-xs text-yellow-400 bg-slate-900 px-1 font-bold">CLalt (Alternatives)</span>
          </div>

          <div className="absolute left-2 top-2 text-[10px] text-slate-500 font-mono">
            PROFIT &gt; CL = SATISFIED
            <br />
            PROFIT &gt; CLalt = DEPENDENT
            <br />
            PROFIT &lt; CLalt = EXIT
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full bg-emerald-950/50 border border-emerald-800 rounded-2xl p-8 overflow-y-auto custom-scrollbar">
        <div className="mb-6 border-b border-emerald-800 pb-4">
          <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Measuring Profit</h3>
          <span className="text-emerald-400 font-mono text-sm">The Two Comparison Levels</span>
        </div>

        <div className="bg-emerald-900/30 p-4 rounded-lg border-l-4 border-emerald-500 mb-6">
          <p className="text-emerald-100 font-bold">{currentData.desc}</p>
        </div>

        <div className="space-y-8">
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-emerald-300 font-bold text-lg mb-2">1. Comparison Level (CL)</h4>
            <p className={`text-emerald-100/90 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              The amount of reward you believe you <strong>deserve</strong> to get.
              <br />
              <br />
              This develops from our experiences of previous relationships which feed into our expectations of the current one. It is also influenced by social norms (books, films, TV) that determine what is widely considered a reasonable level of reward.
              <br />
              <br />
              <span className="text-emerald-400 italic">Link to Self-Esteem:</span> Someone with low self-esteem will have a low CL and will be satisfied with gaining just a small profit (or even a loss).
            </p>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-yellow-400 font-bold text-lg mb-2">2. Comparison Level for Alternatives (CLalt)</h4>
            <p className={`text-emerald-100/90 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              "Could I do better elsewhere?"
              <br />
              <br />
              We compare our current relationship to other potential partners <em>or</em> to having no relationship at all.
              <br />
              <br />
              <strong>Duck (1994)</strong> suggests that the CLalt we adopt depends on the state of our current relationship. If the current relationship is satisfying, we don't even notice that alternatives exist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelationshipAccountantSim: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [phase, setPhase] = useState<'briefing' | 'game' | 'complete'>('briefing');
  const [caseIdx, setCaseIdx] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
  const [score, setScore] = useState(0);

  const handleDecision = (decision: 'HOLD' | 'SELL') => {
    const currentCase = setCases[caseIdx];
    if (decision === currentCase.correct) {
      setFeedback({ type: 'success', msg: currentCase.explanation });
      setScore((prev) => prev + 1);
    } else {
      setFeedback({ type: 'error', msg: `Incorrect. ${currentCase.explanation}` });
    }
  };

  const nextCase = () => {
    if (caseIdx < setCases.length - 1) {
      setCaseIdx((prev) => prev + 1);
      setFeedback(null);
    } else {
      setPhase('complete');
    }
  };

  const reset = () => {
    setPhase('briefing');
    setCaseIdx(0);
    setScore(0);
    setFeedback(null);
  };

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-slate-900 border-4 border-slate-700 rounded-xl relative overflow-hidden bg-ledger shadow-2xl">
      <div className="flex justify-between items-center p-4 border-b-2 border-slate-700 bg-slate-950 z-10">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-emerald-500" />
          <span className="text-emerald-500 font-bold tracking-widest">RELATIONSHIP_ACCOUNTANT_V1</span>
        </div>
        <div className="text-emerald-400">CREDIBILITY: {score}/{setCases.length}</div>
      </div>

      <div className="flex-grow relative z-10 p-8 flex flex-col items-center justify-center">
        {phase === 'briefing' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <PieChart size={80} className="text-emerald-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4">PORTFOLIO REVIEW</h3>
            <p className="text-slate-400 mb-8 text-lg">
              Review 3 client portfolios. Analyze their <strong>Profit</strong>, <strong>CL</strong>, and <strong>CLalt</strong>.
              <br />
              <br />
              Decide whether to <strong>HOLD</strong> (Stay) or <strong>SELL</strong> (Leave) based on Social Exchange Theory logic.
            </p>
            <button
              onClick={() => setPhase('game')}
              className="bg-emerald-600 text-white px-8 py-3 rounded font-bold hover:bg-emerald-500 transition-all text-xl shadow-lg"
            >
              START TRADING
            </button>
          </div>
        )}

        {phase === 'game' && (
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-700 p-6 rounded-xl shadow-lg">
              <h4 className="text-emerald-400 font-bold text-xl mb-4 border-b border-slate-800 pb-2">{setCases[caseIdx].title}</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Current Profit</span>
                  <div className="w-48 h-4 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${setCases[caseIdx].profit}%` }}></div>
                  </div>
                  <span className="text-blue-400 font-bold">{setCases[caseIdx].profit}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">CL (Expectation)</span>
                  <div className="w-48 h-4 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: `${setCases[caseIdx].cl}%` }}></div>
                  </div>
                  <span className="text-emerald-400 font-bold">{setCases[caseIdx].cl}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">CLalt (Alternative)</span>
                  <div className="w-48 h-4 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: `${setCases[caseIdx].clalt}%` }}></div>
                  </div>
                  <span className="text-yellow-400 font-bold">{setCases[caseIdx].clalt}</span>
                </div>
              </div>
              <p className="mt-6 text-slate-300 italic border-l-4 border-slate-600 pl-4">"{setCases[caseIdx].desc}"</p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              {!feedback ? (
                <>
                  <button
                    onClick={() => handleDecision('HOLD')}
                    className="bg-emerald-900/50 border-2 border-emerald-600 text-emerald-400 p-6 rounded-xl hover:bg-emerald-900 hover:scale-105 transition-all flex items-center justify-center gap-4 group"
                  >
                    <Shield size={32} className="group-hover:animate-pulse" />
                    <span className="text-2xl font-bold">HOLD (STAY)</span>
                  </button>
                  <button
                    onClick={() => handleDecision('SELL')}
                    className="bg-red-900/50 border-2 border-red-600 text-red-400 p-6 rounded-xl hover:bg-red-900 hover:scale-105 transition-all flex items-center justify-center gap-4 group"
                  >
                    <TrendingDown size={32} className="group-hover:animate-bounce" />
                    <span className="text-2xl font-bold">SELL (LEAVE)</span>
                  </button>
                </>
              ) : (
                <div
                  className={`p-6 rounded-xl border-2 animate-fadeIn ${
                    feedback.type === 'success' ? 'bg-green-900/50 border-green-500' : 'bg-red-900/50 border-red-500'
                  }`}
                >
                  <h4
                    className={`text-xl font-bold mb-2 ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {feedback.type === 'success' ? 'TRADE SUCCESSFUL' : 'BAD INVESTMENT'}
                  </h4>
                  <p className="text-white mb-6">{feedback.msg}</p>
                  <button
                    onClick={nextCase}
                    className="bg-white text-slate-900 px-6 py-2 rounded font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
                  >
                    NEXT CLIENT <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {phase === 'complete' && (
          <div className="text-center max-w-xl animate-fadeIn">
            <h3 className="text-4xl text-white font-bold mb-6">REVIEW COMPLETE</h3>
            <div className="text-6xl font-bold text-emerald-400 mb-8">{Math.round((score / setCases.length) * 100)}% YIELD</div>
            <p className="text-slate-400 mb-8 text-lg">
              You have successfully applied the Minimax Principle.
              <br />
              Remember: Humans are not always rational actors.
            </p>
            <button onClick={reset} className="text-slate-500 hover:text-white underline">
              RESET SIMULATION
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const EssayPlanRevealL5: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="bg-emerald-900/80 border border-emerald-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Shield size={120} />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-emerald-700 pb-4">
        <h3 className={`font-bold text-emerald-200 tracking-widest ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Structure Planning</h3>
        <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-bold rounded">8 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <Search size={20} /> Reveal Plan
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Research Support
            </strong>
            <p className={`text-emerald-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Kurdek (1995):</strong> Surveyed diverse couples (gay, lesbian, hetero). Found that those with the most rewards/fewest costs were most committed, supporting the theory's universal validity.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Cause & Effect
            </strong>
            <p className={`text-emerald-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Argyle (1987):</strong> Argues we don't monitor costs/rewards until we are already dissatisfied. The theory gets the direction of causality wrong; dissatisfaction leads to accounting.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Ignorance of Equity
            </strong>
            <p className={`text-emerald-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              SET ignores fairness. Research shows partners strive for <strong>Equity</strong>, not just profit. Over-benefitting creates guilt, under-benefitting creates anger.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <strong className={`text-yellow-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Artificiality
            </strong>
            <p className={`text-emerald-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Much supporting research uses artificial tasks (Game Theory) with strangers. These lack <strong>mundane realism</strong> and don't reflect the complexity of real long-term relationships.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 7C. LESSON 8 SPECIFIC COMPONENTS
// ==========================================

const RoadToRuin: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [activePhase, setActivePhase] = useState<number>(1);

  const phases = [
    { id: 1, title: '1. Intra-psychic', focus: 'Internal Dissatisfaction', quote: "I can't stand this anymore.", desc: 'Focus is on private thoughts. Brooding on partner\'s faults. May share with a diary or one close friend. Weighing up pros and cons.' },
    { id: 2, title: '2. Dyadic', focus: 'Interpersonal Confrontation', quote: 'I would be justified in withdrawing.', desc: 'Dissatisfaction is discussed with partner. Anxiety, hostility, complaints. Can lead to repair or determination to break up.' },
    { id: 3, title: '3. Social', focus: 'Public Action', quote: 'I mean it.', desc: 'The breakup is made public. Seeking support from mutual friends. Factions formed. Gossip. Harder to deny once public.' },
    { id: 4, title: '4. Grave-dressing', focus: 'Aftermath', quote: 'It\'s now inevitable.', desc: 'Spinning the story. Creating a favourable narrative to save face (\'Social Credit\'). Blaming the partner or circumstances.' },
  ];

  const active = phases.find(p => p.id === activePhase);

  return (
    <div className="flex flex-col h-full gap-8">
      {/* Timeline Visual */}
      <div className="relative flex items-center justify-between px-12 py-8 bg-slate-900/50 rounded-2xl border border-slate-800">
        <div className="absolute left-12 right-12 top-1/2 h-1 bg-slate-700 -z-10"></div>
        <div className="absolute left-12 top-1/2 h-1 bg-rose-500 -z-10 transition-all duration-500" style={{ width: `${(activePhase - 1) * 33}%` }}></div>

        {phases.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePhase(p.id)}
            className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 relative group ${activePhase >= p.id ? 'bg-rose-900 border-rose-500 text-white' : 'bg-slate-800 border-slate-600 text-slate-500'}`}
          >
            <span className="font-bold text-xl">{p.id}</span>
            {activePhase === p.id && <div className="absolute inset-0 rounded-full border-4 border-rose-500 animate-ping opacity-50"></div>}
            <span className={`absolute -bottom-8 w-32 text-center text-xs font-bold transition-colors ${activePhase >= p.id ? 'text-rose-400' : 'text-slate-600'}`}>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-900 border border-slate-700 rounded-2xl p-8 relative overflow-hidden">
        <div className="flex flex-col justify-center gap-4 z-10">
          <h3 className={`font-serif text-white mb-2 ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>{active?.title}</h3>
          <div className="bg-rose-900/30 border-l-4 border-rose-500 p-4">
            <span className="text-rose-400 text-xs uppercase tracking-widest block mb-1">Focus</span>
            <span className="text-white font-bold">{active?.focus}</span>
          </div>
          <div className="bg-slate-800/50 p-4 border border-slate-700 rounded-lg">
            <span className="text-slate-400 text-xs uppercase tracking-widest block mb-2">Threshold</span>
            <p className="text-rose-300 font-serif italic text-lg">"{active?.quote}"</p>
          </div>
        </div>

        <div className="flex items-center z-10">
          <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-lg'}`}>{active?.desc}</p>
        </div>
      </div>
    </div>
  );
};

const RollieDuckUpdate: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <div className="text-center max-w-3xl">
        <h3 className={`font-serif text-white mb-4 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>The 2006 Update</h3>
        <p className={`text-slate-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          Duck's original model was criticized for being too simple and linear. Rollie & Duck (2006) added a final phase and emphasized that breakdown is not a straight line.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="bg-slate-900/50 border border-emerald-500/30 p-8 rounded-xl flex flex-col items-center text-center hover:border-emerald-500 transition-colors group">
          <div className="bg-emerald-900/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
            <RotateCcw size={40} className="text-emerald-400" />
          </div>
          <h4 className={`text-emerald-400 font-bold mb-2 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>5. Resurrection Phase</h4>
          <p className={`text-slate-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
            Moving beyond the pain. Recreating a sense of self value. Learning from the mistakes of the past relationship to prepare for a future one.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-blue-500/30 p-8 rounded-xl flex flex-col items-center text-center hover:border-blue-500 transition-colors group">
          <div className="bg-blue-900/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
            <GitMerge size={40} className="text-blue-400" />
          </div>
          <h4 className={`text-blue-400 font-bold mb-2 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>Non-Linearity</h4>
          <p className={`text-slate-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
            Progression is not inevitable. Partners can return to earlier phases. Repair is possible at any stage (e.g. moving from Social back to Dyadic to fix issues).
          </p>
        </div>
      </div>
    </div>
  );
};

const BreakupNavigatorSim: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [feedback, setFeedback] = useState<{ type: string; msg: string; next: number; isComplete: boolean } | null>(null);

  type PhaseChoice = {
    id: string;
    text: string;
    next: number;
    type: 'advance' | 'loop' | 'repair' | 'complete';
    feedback: string;
  };

  type PhaseData = {
    id: number;
    name: string;
    threshold: string;
    scenario: string;
    task: string;
    choices: PhaseChoice[];
  };

  const phases: PhaseData[] = [
    {
      id: 1,
      name: 'Intra-psychic Phase',
      threshold: "I can't stand this anymore.",
      scenario: "Sam feels frustrated. Alex's habits are becoming unbearable. Sam starts to resent the time spent together.",
      task: 'Choose the path forward.',
      choices: [
        { id: 'a', text: 'Confront Alex immediately', next: 2, type: 'advance', feedback: 'Advanced to Dyadic. Confrontation breaches the threshold of privacy.' },
        { id: 'b', text: "Brood privately & weigh pros/cons", next: 1, type: 'loop', feedback: 'Correct behavior, but no progression. Sam remains in the Intra-psychic phase.' },
      ],
    },
    {
      id: 2,
      name: 'Dyadic Phase',
      threshold: 'I would be justified in withdrawing.',
      scenario: 'Sam has confronted Alex. They are discussing the dissatisfaction. The air is tense.',
      task: 'Select the outcome of this phase.',
      choices: [
        { id: 'a', text: "Fail to resolve & withdraw", next: 3, type: 'advance', feedback: 'Breakdown continues. Moving to Social Phase to seek external support.' },
        { id: 'b', text: 'Commit to communication therapy', next: 1, type: 'repair', feedback: 'Non-Linearity (Rollie & Duck): Repair attempt successful! Returning to Intra-psychic to re-evaluate.' },
      ],
    },
    {
      id: 3,
      name: 'Social Phase',
      threshold: 'I mean it.',
      scenario: 'The breakup is public. Friends are picking sides. Gossip is spreading.',
      task: 'Determine the next step.',
      choices: [
        { id: 'a', text: 'Create a face-saving story', next: 4, type: 'advance', feedback: 'Advanced to Grave-dressing. The relationship is dead; time to spin the narrative.' },
        { id: 'b', text: 'Ask mutual friends to mediate', next: 2, type: 'repair', feedback: 'Non-Linearity: Social intervention pushes the couple back to the Dyadic phase for one last negotiation.' },
      ],
    },
    {
      id: 4,
      name: 'Grave-dressing Phase',
      threshold: "It's inevitable.",
      scenario: "The relationship is over. Sam needs to maintain 'Social Credit' for the future.",
      task: 'Choose the Grave-dressing strategy.',
      choices: [
        { id: 'a', text: "Blame circumstances ('We grew apart')", next: 5, type: 'advance', feedback: 'Correct. Creating a tidy narrative allows Sam to move on to the final stage.' },
        { id: 'b', text: 'Stalk Alex on social media', next: 4, type: 'loop', feedback: 'Maladaptive. This prevents moving on. Sam is stuck in the aftermath.' },
      ],
    },
    {
      id: 5,
      name: 'Resurrection Phase',
      threshold: 'Time to get a new life.',
      scenario: "Rollie & Duck (2006) added this final phase. Sam is single again.",
      task: 'Complete the cycle.',
      choices: [
        { id: 'a', text: "Reflect on mistakes & define future needs", next: 6, type: 'complete', feedback: 'Cycle Complete. Resurrection involves personal growth and preparation for a new relationship.' },
        { id: 'b', text: 'Jump straight into a rebound', next: 5, type: 'loop', feedback: 'Skipping Resurrection means repeating old patterns. Sam needs to learn first.' },
      ],
    },
  ];

  const handleChoice = (choice: PhaseChoice) => {
    setFeedback({
      type: choice.type === 'repair' ? 'warning' : 'success',
      msg: choice.feedback,
      next: choice.next,
      isComplete: choice.type === 'complete',
    });
  };

  const executeNext = () => {
    if (feedback?.isComplete) {
      setCurrentPhase(6);
    } else if (feedback?.next) {
      setCurrentPhase(feedback.next);
    }
    setFeedback(null);
  };

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-slate-900 border-4 border-slate-700 rounded-xl relative overflow-hidden bg-scratched shadow-2xl">
      <div className="flex justify-between items-center p-4 border-b-2 border-slate-700 bg-slate-950 z-10">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-rose-500" />
          <span className="text-rose-500 font-bold tracking-widest">BREAKUP_NAVIGATOR_V2.0</span>
        </div>
        <div className="text-slate-400">
          {currentPhase > 0 && currentPhase <= 5 ? `PHASE ${currentPhase}: ${phases[currentPhase - 1].name.toUpperCase()}` : 'STATUS: PENDING'}
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-8 relative z-10">
        {currentPhase === 0 && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <HeartCrack size={80} className="text-rose-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4 font-serif">OBSERVATION STARTED</h3>
            <p className="text-slate-400 mb-8 text-lg">
              Guide "Sam & Alex" through the breakdown.
              <br />
              <br />
              <span className="text-emerald-400">New Feature:</span> Use <strong>Non-Linear Mechanics</strong> (Rollie & Duck) to attempt repair or regression between phases.
            </p>
            <button onClick={() => setCurrentPhase(1)} className="bg-rose-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-rose-800 transition-all text-xl border border-rose-700">
              BEGIN SEQUENCE
            </button>
          </div>
        )}

        {currentPhase >= 1 && currentPhase <= 5 && (
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            {/* Scenario Panel */}
            <div className="bg-slate-950 border border-slate-700 p-8 rounded-xl shadow-lg flex flex-col justify-center">
              <span className="text-rose-500 uppercase tracking-widest text-xs mb-2 font-bold block">Current State</span>
              <h4 className="text-white font-serif text-3xl mb-4">{phases[currentPhase - 1].name}</h4>
              <div className="mb-6">
                <span className="text-slate-500 text-xs uppercase">Threshold</span>
                <p className="text-rose-300 italic font-serif text-lg">"{phases[currentPhase - 1].threshold}"</p>
              </div>
              <p className="text-slate-300 mb-6">{phases[currentPhase - 1].scenario}</p>
              <div className="bg-slate-900 p-4 rounded border-l-4 border-rose-500">
                <strong className="text-slate-200 block mb-1">Task:</strong>
                <p className="text-slate-400 text-sm">{phases[currentPhase - 1].task}</p>
              </div>
            </div>

            {/* Interaction Panel */}
            <div className="flex flex-col justify-center gap-4">
              {!feedback ? (
                phases[currentPhase - 1].choices.map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => handleChoice(choice)}
                    className={`w-full p-6 border-2 rounded-xl text-left transition-all group relative overflow-hidden ${choice.type === 'repair' ? 'bg-emerald-900/20 border-emerald-800 hover:border-emerald-500' : 'bg-slate-800 border-slate-700 hover:border-rose-500'}`}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-white font-bold group-hover:text-white">{choice.text}</span>
                      {choice.type === 'repair' ? <RotateCcw className="text-emerald-500" /> : <ArrowRight className="text-slate-600 group-hover:text-rose-500" />}
                    </div>
                    {choice.type === 'repair' && <span className="text-[10px] text-emerald-500 uppercase tracking-widest mt-2 block">Non-Linear Option</span>}
                  </button>
                ))
              ) : (
                <div className={`p-6 rounded-xl border-2 animate-fadeIn ${feedback.type === 'warning' ? 'bg-yellow-900/20 border-yellow-500' : 'bg-green-900/30 border-green-500'}`}>
                  <h4 className={`text-xl font-bold mb-2 ${feedback.type === 'warning' ? 'text-yellow-400' : 'text-green-400'}`}>
                    {feedback.type === 'warning' ? 'NON-LINEAR MOVEMENT' : 'PHASE PROGRESSION'}
                  </h4>
                  <p className="text-white mb-6 text-sm leading-relaxed">{feedback.msg}</p>
                  <button onClick={executeNext} className="w-full py-3 bg-white text-slate-900 font-bold rounded hover:bg-gray-200 transition-all">
                    CONTINUE
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {currentPhase === 6 && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <GitMerge size={80} className="text-emerald-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4 font-serif">MODEL COMPLETE</h3>
            <p className="text-slate-400 mb-8 text-lg">
              You have successfully navigated the entire breakdown process, including the <strong>Resurrection Phase</strong>.
              <br />
              <br />
              You demonstrated understanding that breakdown is dynamic and non-linear.
            </p>
            <button
              onClick={() => {
                setCurrentPhase(0);
                setFeedback(null);
              }}
              className="text-slate-500 underline hover:text-white"
            >
              RESET SIMULATION
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const EssayPlanRevealL8: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="bg-slate-900/90 border border-slate-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Shield size={120} />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-slate-700 pb-4">
        <h3 className={`font-mono font-bold text-slate-200 tracking-widest ${isPresentation ? 'text-3xl' : 'text-xl'}`}>ESSAY PLANNING</h3>
        <span className="bg-rose-600 text-white px-3 py-1 text-xs font-bold rounded font-mono">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold transition-all shadow-[0_0_15px_rgba(225,29,72,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <Search size={20} /> REVEAL PLAN
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-slate-800/50 p-4 border-l-4 border-rose-500 mb-4">
            <p className="text-slate-400 text-sm font-mono italic">Question: "Discuss Duck's Phase Model of relationship breakdown." (16 Marks)</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-slate-300 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li>Breakdown is a process, not an event (Duck, 2007).</li>
              <li>Distinct phases marked by thresholds.</li>
              <li><strong>Intra-psychic:</strong> Private dissatisfaction ("I can't stand this").</li>
              <li><strong>Dyadic:</strong> Confronting partner ("I'm justified in withdrawing").</li>
              <li><strong>Social:</strong> Going public/seeking support ("I mean it").</li>
              <li><strong>Grave-dressing:</strong> Post-relationship narrative ("It's inevitable").</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Real World Application</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Useful for relationship counselling. Identifies the stage to tailor strategies. <em>Example:</em> In Dyadic phase, focus on communication. In Social phase, avoid criticism to prevent entrenchment.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Incomplete Model</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Original model was too simple. Rollie & Duck (2006) added the <strong>Resurrection Phase</strong> and clarified that the process is not linear (dynamic). The original model failed to account for growth after breakup.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Methodological Issues</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Relies on <strong>retrospective data</strong>. Participants recall the breakup after it happened. Memories are distorted by the grave-dressing process itself. Early stages are hard to study ethically (might hasten breakup).
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Cultural Bias</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Moghaddam et al (1993):</strong> Applies mostly to <strong>Individualist</strong> cultures (voluntary divorce). In <strong>Collectivist</strong> cultures, family involvement happens much earlier (Social phase), changing the process.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 7D. LESSON 7 SPECIFIC COMPONENTS
// ==========================================

const FormulaBuilder: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [activePart, setActivePart] = useState<'investment' | 'satisfaction' | 'alternatives' | 'commitment'>('investment');

  const parts = {
    satisfaction: {
      title: 'Satisfaction Level',
      formula: 'Rewards - Costs',
      desc: 'Similar to SET. The extent to which partners feel the rewards of the relationship exceed the costs.',
    },
    alternatives: {
      title: 'CLalt (Alternatives)',
      formula: 'Comparison Level',
      desc: 'A judgement that a partner would be better off in a different relationship or being single.',
    },
    investment: {
      title: 'Investment Size',
      formula: 'Intrinsic + Extrinsic',
      desc: 'The crucial addition. Resources associated with a relationship that would be lost if the relationship ended.',
    },
    commitment: {
      title: 'Commitment Level',
      formula: 'The Result',
      desc: 'The main factor in stability. It explains why dissatisfied partners (e.g. in abusive relationships) stay—because they have invested too much to leave.',
    },
  };

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="bg-glass rounded-2xl p-8 flex items-center justify-center gap-4 flex-wrap shadow-xl">
        <button
          onClick={() => setActivePart('satisfaction')}
          className={`px-6 py-4 rounded-xl font-bold transition-all ${
            activePart === 'satisfaction'
              ? 'bg-green-600 text-white scale-110 shadow-lg'
              : 'bg-slate-800 text-slate-400 border border-slate-700'
          }`}
        >
          SATISFACTION
        </button>
        <span className="text-2xl text-blue-500 font-bold">-</span>
        <button
          onClick={() => setActivePart('alternatives')}
          className={`px-6 py-4 rounded-xl font-bold transition-all ${
            activePart === 'alternatives' ? 'bg-red-600 text-white scale-110 shadow-lg' : 'bg-slate-800 text-slate-400 border border-slate-700'
          }`}
        >
          ALTERNATIVES
        </button>
        <span className="text-2xl text-blue-500 font-bold">+</span>
        <button
          onClick={() => setActivePart('investment')}
          className={`px-6 py-4 rounded-xl font-bold transition-all ${
            activePart === 'investment' ? 'bg-blue-600 text-white scale-110 shadow-lg' : 'bg-slate-800 text-slate-400 border border-slate-700'
          }`}
        >
          INVESTMENT
        </button>
        <span className="text-2xl text-white font-bold">=</span>
        <button
          onClick={() => setActivePart('commitment')}
          className={`px-6 py-4 rounded-xl font-bold transition-all ${
            activePart === 'commitment' ? 'bg-amber-500 text-white scale-110 shadow-lg' : 'bg-slate-800 text-slate-400 border border-slate-700'
          }`}
        >
          COMMITMENT
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
        <div className="bg-slate-900/50 border border-slate-700 p-8 rounded-2xl relative">
          <h3 className={`font-serif text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>{parts[activePart].title}</h3>
          <span className="text-blue-400 font-mono text-xs block mb-6">{parts[activePart].formula}</span>
          <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>{parts[activePart].desc}</p>
        </div>

        {activePart === 'investment' ? (
          <div className="bg-slate-900/50 border border-slate-700 p-8 rounded-2xl flex flex-col gap-4">
            <h4 className="font-bold text-blue-300 text-sm uppercase border-b border-slate-700 pb-2">Types of Investment</h4>
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30 flex flex-col items-center text-center">
                <Anchor size={32} className="text-blue-400 mb-2" />
                <span className="font-bold text-blue-200 block mb-2">Intrinsic</span>
                <p className="text-xs text-slate-400">
                  Put DIRECTLY into the relationship.
                  <br />
                  <br />
                  <em>Money, Energy, Emotion, Self-Disclosure.</em>
                </p>
              </div>
              <div className="bg-cyan-900/20 p-4 rounded-xl border border-cyan-500/30 flex flex-col items-center text-center">
                <Layers size={32} className="text-cyan-400 mb-2" />
                <span className="font-bold text-cyan-200 block mb-2">Extrinsic</span>
                <p className="text-xs text-slate-400">
                  Created BY the relationship.
                  <br />
                  <br />
                  <em>Children, Mutual Friends, Shared Memories, House.</em>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-600">
            <span className="text-xs uppercase tracking-widest">Select 'Investment' for details</span>
          </div>
        )}
      </div>
    </div>
  );
};

const MaintenanceToolbox: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [activeTool, setActiveTool] = useState<{ id: string; label: string; icon: any; desc: string } | null>(null);

  const tools = [
    { id: 'acc', label: 'Accommodation', icon: Wrench, desc: 'Acting constructively rather than destructively during conflict. Putting the relationship first.' },
    { id: 'sac', label: 'Sacrifice', icon: Heart, desc: "Putting partner's interests first. Willingness to give up something for the sake of the relationship." },
    {
      id: 'forg',
      label: 'Forgiveness',
      icon: CheckCircle,
      desc: "Willingness to forgive partner's transgressions (mistakes).",
    },
    {
      id: 'pos',
      label: 'Positive Illusions',
      icon: Search,
      desc: 'Being unrealistically positive about your partner (rose-tinted glasses).',
    },
    { id: 'rid', label: 'Ridiculing Alternatives', icon: Frown, desc: 'Viewing potential alternatives in a negative light compared to your partner.' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
      <div className="lg:col-span-1 grid grid-cols-1 gap-3">
        {tools.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTool(t)}
              className={`p-4 rounded-xl border-l-4 text-left transition-all flex items-center gap-4 ${
                activeTool?.id === t.id
                  ? 'bg-blue-900/40 border-blue-500 text-white shadow-lg'
                  : 'bg-slate-800 border-slate-600 text-slate-400 hover:bg-slate-700'
              }`}
            >
              <Icon size={20} />
              <span className="font-bold uppercase text-sm">{t.label}</span>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-2 bg-slate-900/50 border border-slate-700 rounded-2xl relative p-8 flex flex-col items-center justify-center text-center">
        {activeTool ? (
          <div className="relative z-10 animate-fadeIn p-8 max-w-lg">
            <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center">
              <activeTool.icon size={48} className="text-blue-400" />
            </div>
            <h3 className={`font-serif text-white mb-4 ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>{activeTool.label}</h3>
            <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>{activeTool.desc}</p>
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <span className="text-xs text-blue-500 uppercase tracking-widest font-bold">Maintenance Mechanism</span>
            </div>
          </div>
        ) : (
          <div className="text-slate-600 font-mono text-sm uppercase tracking-widest">Select a mechanism to view details</div>
        )}
      </div>
    </div>
  );
};

const CommitmentArchitectSim: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [phase, setPhase] = useState<'briefing' | 'game' | 'complete'>('briefing');
  const [level, setLevel] = useState(1);
  const [stats, setStats] = useState({ sat: 50, alt: 50, inv: 50 });
  const [feedback, setFeedback] = useState<{ success: boolean; msg: string; type: string } | null>(null);

  const commitment = Math.max(0, Math.min(100, stats.sat - stats.alt + stats.inv));

  const scenarios = [
    {
      id: 1,
      title: 'Level 1: The Stagnation',
      desc: 'The relationship has lost its spark. Satisfaction is critically low, but you need them to stay together. Reinforce the structure.',
      start: { sat: 30, alt: 40, inv: 20 },
      target: 50,
      choices: [
        {
          id: 'a',
          label: 'Share deep personal secrets',
          type: 'Intrinsic Investment',
          effect: { sat: 10, alt: 0, inv: 30 },
          explanation:
            'Correct. Investing "Intrinsic" resources like self-disclosure increases Investment Size AND Satisfaction. (30 - 40 + 50 = 40? No wait, new total = 50).',
        },
        {
          id: 'b',
          label: 'Wait for things to improve',
          type: 'No Action',
          effect: { sat: -10, alt: 10, inv: 0 },
          explanation: 'Passive failure. Without active maintenance, satisfaction degrades further.',
        },
      ],
    },
    {
      id: 2,
      title: 'Level 2: The Rival',
      desc: 'A highly attractive alternative (new co-worker) has appeared. "Alternatives" are spiking dangerously high.',
      start: { sat: 50, alt: 70, inv: 30 },
      target: 60,
      choices: [
        {
          id: 'a',
          label: "Mock the co-worker's fashion",
          type: 'Ridicule Alternatives',
          effect: { sat: 0, alt: -50, inv: 0 },
          explanation:
            'Correct. "Ridiculing Alternatives" devalues the threat, dropping "Alt" levels significantly to restore commitment.',
        },
        {
          id: 'b',
          label: 'Try to dress better to compete',
          type: 'Increase Cost',
          effect: { sat: -10, alt: 0, inv: 5 },
          explanation:
            'Incorrect. Increasing effort (Cost) lowers your own Satisfaction without effectively reducing the Alternative\'s appeal.',
        },
      ],
    },
    {
      id: 3,
      title: 'Level 3: The Crisis',
      desc: 'A betrayal occurred. Satisfaction is 0. The relationship is collapsing. Only massive structural reinforcement can save it.',
      start: { sat: 0, alt: 50, inv: 20 },
      target: 60,
      choices: [
        {
          id: 'a',
          label: 'Get a Joint Mortgage & Dog',
          type: 'Extrinsic Investment',
          effect: { sat: 0, alt: -10, inv: 80 },
          explanation: 'Correct. Massive "Extrinsic Investment" creates a barrier to leaving. High Investment overrides low Satisfaction.',
        },
        {
          id: 'b',
          label: 'Take a break to think',
          type: 'Separation',
          effect: { sat: -10, alt: 20, inv: 0 },
          explanation: 'Failure. Separation increases Alternatives and lowers Satisfaction. The structure collapses.',
        },
      ],
    },
  ];

  const currentScenario = scenarios[level - 1];

  useEffect(() => {
    if (phase === 'game') {
      setStats(currentScenario.start);
      setFeedback(null);
    }
  }, [level, phase]);

  const handleChoice = (choice: any) => {
    const newStats = {
      sat: stats.sat + choice.effect.sat,
      alt: stats.alt + choice.effect.alt,
      inv: stats.inv + choice.effect.inv,
    };
    setStats(newStats);

    const newCommitment = Math.max(0, Math.min(100, newStats.sat - newStats.alt + newStats.inv));
    const success = newCommitment >= currentScenario.target;

    setFeedback({
      success,
      msg: choice.explanation,
      type: choice.type,
    });
  };

  const nextLevel = () => {
    if (level < 3) {
      setLevel((l) => l + 1);
      setPhase('game');
    } else {
      setPhase('complete');
    }
  };

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-slate-900 border-4 border-slate-700 rounded-xl relative overflow-hidden blueprint-grid shadow-2xl">
      <div className="flex justify-between items-center p-4 border-b-2 border-slate-700 bg-slate-950 z-10">
        <div className="flex items-center gap-2">
          <Construction size={16} className="text-blue-500" />
          <span className="text-blue-500 font-bold tracking-widest">COMMITMENT_ARCHITECT_V4.0</span>
        </div>
        <div className={`font-bold ${commitment < currentScenario?.target ? 'text-red-500' : 'text-green-500'}`}>
          STRUCTURAL INTEGRITY: {commitment}% (TARGET: {currentScenario?.target}%)
        </div>
      </div>

      <div className="flex-grow flex relative z-10">
        <div className="w-1/2 p-8 flex flex-col items-center justify-end relative border-r-2 border-slate-700 bg-slate-900/50">
          <div className="absolute top-4 left-4 text-xs text-slate-500">
            SAT: {stats.sat} <br /> ALT: {stats.alt} <br /> INV: {stats.inv}
          </div>

          <div className="w-48 relative flex flex-col items-center transition-all duration-700">
            <div className="mb-2 text-center w-full transition-all duration-500" style={{ transform: `translateY(${Math.min(50, stats.alt)}px)` }}>
              <div className="bg-red-900/80 border border-red-500 text-red-200 p-2 rounded shadow-lg mb-1">ALTERNATIVES</div>
              <ArrowRight className="rotate-90 text-red-500 mx-auto animate-bounce" />
            </div>

            <div className="flex gap-2 w-full items-end h-64 border-b-4 border-slate-500 pb-1">
              <div
                className="w-1/2 bg-green-600/80 border-2 border-green-400 rounded-t transition-all duration-1000 flex items-end justify-center pb-2 text-white font-bold"
                style={{ height: `${Math.max(10, stats.sat)}%` }}
              >
                SAT
              </div>
              <div
                className="w-1/2 bg-blue-600/80 border-2 border-blue-400 rounded-t transition-all duration-1000 flex items-end justify-center pb-2 text-white font-bold"
                style={{ height: `${Math.max(10, stats.inv)}%` }}
              >
                INV
              </div>
            </div>
            <div className="text-slate-500 text-[10px] mt-1 uppercase tracking-widest">Foundation</div>
          </div>
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center bg-slate-950/80">
          {phase === 'briefing' && (
            <div className="text-center animate-fadeIn">
              <Construction size={64} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl text-white font-bold mb-4 font-serif">PROJECT BRIEF</h3>
              <p className="text-slate-400 mb-6">
                The equation is simple: <br />
                <span className="text-blue-300 font-mono block my-2">Commitment = Satisfaction - Alternatives + Investment</span>
                Keep Commitment above the target to prevent collapse.
              </p>
              <button
                onClick={() => setPhase('game')}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg"
              >
                START BUILDING
              </button>
            </div>
          )}

          {phase === 'game' && !feedback && (
            <div className="animate-fadeIn w-full">
              <div className="mb-6 border-b border-slate-800 pb-4">
                <h4 className="text-xl text-blue-400 font-bold mb-1">{currentScenario.title}</h4>
                <p className="text-slate-300 text-sm">{currentScenario.desc}</p>
              </div>
              <div className="space-y-4">
                {currentScenario.choices.map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => handleChoice(choice)}
                    className="w-full p-4 bg-slate-800 border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-700 rounded-xl text-left transition-all group"
                  >
                    <span className="block text-white font-bold group-hover:text-blue-300">{choice.label}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-widest">{choice.type}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {phase === 'game' && feedback && (
            <div className={`p-6 rounded-xl border-2 animate-fadeIn ${feedback.success ? 'bg-green-900/30 border-green-500' : 'bg-red-900/30 border-red-500'}`}>
              <h4 className={`text-lg font-bold mb-2 ${feedback.success ? 'text-green-400' : 'text-red-400'}`}>
                {feedback.success ? 'STRUCTURAL INTEGRITY STABILIZED' : 'CRITICAL FAILURE'}
              </h4>
              <div className="mb-4">
                <span className="text-xs uppercase opacity-70 block">Theoretical Analysis:</span>
                <p className="text-white text-sm">{feedback.msg}</p>
              </div>
              {feedback.success ? (
                <button onClick={nextLevel} className="w-full py-3 bg-white text-slate-900 font-bold rounded hover:bg-gray-200">
                  NEXT LEVEL
                </button>
              ) : (
                <button onClick={() => { setStats(currentScenario.start); setFeedback(null); }} className="w-full py-3 border border-white/20 text-white font-bold rounded hover:bg-white/10">
                  RETRY LEVEL
                </button>
              )}
            </div>
          )}

          {phase === 'complete' && (
            <div className="text-center animate-fadeIn">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl text-white font-bold mb-2">ARCHITECT CERTIFIED</h3>
              <p className="text-slate-400 mb-6">
                You have mastered the Investment Model. You understand that Commitment is not just love (Satisfaction), but the glue of Investment and lack of
                Alternatives.
              </p>
              <button
                onClick={() => {
                  setLevel(1);
                  setPhase('briefing');
                }}
                className="text-slate-500 underline hover:text-white"
              >
                RESET SIMULATION
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EssayPlanRevealL7: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="bg-slate-900/90 border border-slate-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Shield size={120} />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-slate-700 pb-4">
        <h3 className={`font-mono font-bold text-slate-200 tracking-widest ${isPresentation ? 'text-3xl' : 'text-xl'}`}>BLUEPRINT: EVALUATION</h3>
        <span className="bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded font-mono">8 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <FolderOpen size={20} /> UNROLL BLUEPRINT
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-slate-800/50 p-4 border-l-4 border-blue-500 mb-4">
            <p className="text-slate-400 text-sm font-mono italic">Question: "Evaluate Rusbult's Investment Model of relationships." (8 Marks = AO3 Only)</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Research Support</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Le & Agnew (2003):</strong> Meta-analysis of 52 studies (11,000+ participants). Found that Satisfaction, CLalt, and Investment Size all predicted Commitment. True across gender, culture, and sexuality (Universal validity).
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Explains Abusive Relationships</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Rusbult & Martz (1995):</strong> Studied women in shelters. Found those most likely to return to abusive partners had the greatest investments and fewest alternatives. Explains why people stay when <em>unsatisfied</em>.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Oversimplification</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Goodfriend & Agnew (2008):</strong> The model is too simple. We also invest in <strong>Future Plans</strong>. Partners may stay together to see these plans realized, not just because of past investments.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <strong className={`text-yellow-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Methodological Issues</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Relies on <strong>Self-Report</strong> techniques. However, this may be a strength here—it is the partner's <em>perception</em> of investment that matters for commitment, not the objective reality. Limitation: Correlational nature.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 7C. LESSON 6 SPECIFIC COMPONENTS
// ==========================================

const ScalesOfJustice: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [state, setState] = useState<'equitable' | 'over' | 'under'>('equitable');

  const states = {
    equitable: {
      title: 'Equitable Relationship',
      desc: "Both partners' profit (Rewards - Costs) is roughly equal. They don't need to put in the SAME amount, but the RATIO must be fair.",
      emotionA: 'Satisfied',
      emotionB: 'Satisfied',
      angle: 0,
    },
    over: {
      title: 'Partner A Over-benefits',
      desc: 'Partner A puts in little but gets a lot. The ratio is skewed in their favor.',
      emotionA: 'Guilt / Shame',
      emotionB: 'Anger / Resentment',
      angle: 15,
    },
    under: {
      title: 'Partner A Under-benefits',
      desc: 'Partner A puts in a lot but gets little back. The ratio works against them.',
      emotionA: 'Anger / Resentment',
      emotionB: 'Guilt / Shame',
      angle: -15,
    },
  };

  const current = states[state];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center relative shadow-2xl bg-marble">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <button
            onClick={() => setState('equitable')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase border transition-all ${
              state === 'equitable' ? 'bg-green-600 border-green-400 text-white' : 'bg-slate-800 border-slate-600 text-slate-400'
            }`}
          >
            Equitable
          </button>
          <button
            onClick={() => setState('over')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase border transition-all ${
              state === 'over' ? 'bg-amber-600 border-amber-400 text-white' : 'bg-slate-800 border-slate-600 text-slate-400'
            }`}
          >
            A Over-benefits
          </button>
          <button
            onClick={() => setState('under')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase border transition-all ${
              state === 'under' ? 'bg-red-600 border-red-400 text-white' : 'bg-slate-800 border-slate-600 text-slate-400'
            }`}
          >
            A Under-benefits
          </button>
        </div>

        <div className="relative w-full max-w-md h-64 flex items-center justify-center mt-8">
          <div
            className="w-64 h-2 bg-amber-500 rounded absolute top-10 transition-transform duration-700 ease-in-out z-10"
            style={{ transform: `rotate(${current.angle}deg)` }}
          >
            <div className="absolute left-0 top-1 h-24 w-[1px] bg-amber-400/50">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-600 rounded-b-full shadow-[0_0_20px_rgba(245,158,11,0.4)] flex justify-center items-end pb-6">
                <span
                  className={`absolute -bottom-8 font-bold text-sm ${
                    state === 'over' ? 'text-green-400' : state === 'under' ? 'text-red-400' : 'text-slate-300'
                  }`}
                >
                  Partner A
                </span>
              </div>
            </div>
            <div className="absolute right-0 top-1 h-24 w-[1px] bg-amber-400/50">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-600 rounded-b-full shadow-[0_0_20px_rgba(245,158,11,0.4)] flex justify-center items-end pb-6">
                <span
                  className={`absolute -bottom-8 font-bold text-sm ${
                    state === 'over' ? 'text-red-400' : state === 'under' ? 'text-green-400' : 'text-slate-300'
                  }`}
                >
                  Partner B
                </span>
              </div>
            </div>
          </div>
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-slate-600 absolute top-10"></div>
          <div className="w-2 h-32 bg-slate-700 absolute top-16"></div>
          <div className="w-32 h-4 bg-slate-800 rounded absolute bottom-10"></div>
        </div>

        <div className="w-full flex justify-between px-12 mt-8">
          <div className="text-center">
            <span className="block text-[10px] text-slate-500 uppercase tracking-widest">Partner A Feels</span>
            <div
              className={`text-xl font-serif font-bold ${
                state === 'equitable' ? 'text-green-400' : state === 'over' ? 'text-amber-400' : 'text-red-400'
              } animate-fadeIn`}
            >
              {current.emotionA}
            </div>
          </div>
          <div className="text-center">
            <span className="block text-[10px] text-slate-500 uppercase tracking-widest">Partner B Feels</span>
            <div
              className={`text-xl font-serif font-bold ${
                state === 'equitable' ? 'text-green-400' : state === 'over' ? 'text-red-400' : 'text-amber-400'
              } animate-fadeIn`}
            >
              {current.emotionB}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full bg-slate-900/50 border border-slate-700 rounded-2xl p-8 overflow-y-auto custom-scrollbar">
        <div className="mb-6 border-b border-slate-800 pb-4">
          <h3 className={`font-serif text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Walster et al. (1978)</h3>
          <span className="text-amber-500 font-mono text-sm uppercase">Equity vs Equality</span>
        </div>

        <div className="space-y-6">
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-amber-200 font-bold text-lg mb-2 flex items-center gap-2">
              <Scale size={20} /> The Concept
            </h4>
            <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Developed in response to the criticism that SET is too selfish. It argues that people strive for <strong>fairness</strong> (Equity), not just
              maximum profit.
              <br />
              <br />
              <strong>Crucial Distinction:</strong> It is not about the <em>amount</em> of rewards/costs being equal (Equality), but the <strong>ratio</strong>.
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded border-l-4 border-amber-500 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <p className="text-slate-200 italic font-serif">
              "If one partner puts in a lot, they should get a lot out. If one puts in little, they should get little out."
            </p>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-amber-200 font-bold text-lg mb-2 flex items-center gap-2">
              <AlertTriangle size={20} /> Inequity
            </h4>
            <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              The greater the perceived inequity, the greater the dissatisfaction.
              <br />
              <strong>Over-benefitting:</strong> Guilt, shame, discomfort.
              <br />
              <strong>Under-benefitting:</strong> Anger, hostility, resentment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RestorationDiagram: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [flipped, setFlipped] = useState({ behavioral: false, cognitive: false });

  const toggleFlip = (card: 'behavioral' | 'cognitive') => {
    setFlipped((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className={`font-serif text-white mb-8 text-center ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Dealing with Inequity</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl perspective-1000">
        <div
          onClick={() => toggleFlip('behavioral')}
          className={`relative w-full h-96 transition-transform duration-700 transform-style-3d cursor-pointer ${flipped.behavioral ? 'rotate-y-180' : ''}`}
        >
          <div className="absolute inset-0 backface-hidden bg-slate-900 border border-slate-700 p-8 rounded-xl flex flex-col items-center text-center hover:border-blue-500 transition-colors group">
            <div className="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <RefreshCw size={40} className="text-blue-400" />
            </div>
            <h4 className="text-blue-400 font-bold text-xl uppercase tracking-widest mb-4">Behavioral</h4>
            <p className={`text-slate-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Change your input or output levels physically.
              <br />
              <br />
              <span className="text-slate-500">Examples:</span>
              <br />
              Put in less effort.
              <br />
              Demand more affection.
              <br />
              Do fewer chores.
            </p>
            <span className="mt-auto text-xs text-blue-500/50 uppercase tracking-widest animate-pulse">Click to Flip</span>
          </div>

          <div className="absolute inset-0 backface-hidden bg-slate-900 border border-blue-500 p-8 rounded-xl flex flex-col items-center text-center rotate-y-180">
            <h4 className="text-blue-400 font-bold text-xl uppercase tracking-widest mb-6">Evaluation</h4>
            <div className="text-left space-y-4 w-full">
              <div>
                <span className="text-green-400 font-bold block text-sm mb-1">
                  <Smile size={16} className="inline mr-2" /> Positives
                </span>
                <p className="text-slate-300 text-xs">Directly addresses the imbalance. Restores actual fairness rather than just perceived fairness.</p>
              </div>
              <div>
                <span className="text-red-400 font-bold block text-sm mb-1">
                  <Frown size={16} className="inline mr-2" /> Negatives
                </span>
                <p className="text-slate-300 text-xs">
                  Can feel transactional. If the partner refuses to change, it leads to further conflict or dissolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => toggleFlip('cognitive')}
          className={`relative w-full h-96 transition-transform duration-700 transform-style-3d cursor-pointer ${flipped.cognitive ? 'rotate-y-180' : ''}`}
        >
          <div className="absolute inset-0 backface-hidden bg-slate-900 border border-slate-700 p-8 rounded-xl flex flex-col items-center text-center hover:border-purple-500 transition-colors group">
            <div className="w-20 h-20 bg-purple-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain size={40} className="text-purple-400" />
            </div>
            <h4 className="text-purple-400 font-bold text-xl uppercase tracking-widest mb-4">Cognitive</h4>
            <p className={`text-slate-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Change your <em>perception</em> of inputs and outputs.
              <br />
              <br />
              <span className="text-slate-500">Examples:</span>
              <br />
              Accepting untidiness as a "quirk".
              <br />
              Convincing yourself you don't deserve more.
            </p>
            <span className="mt-auto text-xs text-purple-500/50 uppercase tracking-widest animate-pulse">Click to Flip</span>
          </div>

          <div className="absolute inset-0 backface-hidden bg-slate-900 border border-purple-500 p-8 rounded-xl flex flex-col items-center text-center rotate-y-180">
            <h4 className="text-purple-400 font-bold text-xl uppercase tracking-widest mb-6">Evaluation</h4>
            <div className="text-left space-y-4 w-full">
              <div>
                <span className="text-green-400 font-bold block text-sm mb-1">
                  <Smile size={16} className="inline mr-2" /> Positives
                </span>
                <p className="text-slate-300 text-xs">
                  Reduces psychological distress immediately without requiring the partner to change. Preserves stability.
                </p>
              </div>
              <div>
                <span className="text-red-400 font-bold block text-sm mb-1">
                  <Frown size={16} className="inline mr-2" /> Negatives
                </span>
                <p className="text-slate-300 text-xs">Can be delusional. Dangerous if it leads to accepting abuse (cost) as a norm (love).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TheMediator: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [caseId, setCaseId] = useState(0);
  const [phase, setPhase] = useState<'review' | 'diagnose' | 'rule' | 'result' | 'complete'>('review');
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string | null>(null);
  const [selectedRuling, setSelectedRuling] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
  const [score, setScore] = useState(0);

  const cases = [
    {
      id: 1,
      title: 'Case #104: The Domestic Divide',
      inputsA: 'Works 40hrs/week. Does 90% of Housework.',
      outcomesA: 'Stress. Fatigue. Clean House.',
      inputsB: 'Works 40hrs/week. Plays Video Games.',
      outcomesB: 'Relaxation. Fun. Clean House.',
      diagnosis: 'under_a',
      ruling: 'behavioral',
      feedback: 'Correct. Partner A is under-benefitting significantly. B needs to increase Input (Chores).',
    },
    {
      id: 2,
      title: "Case #205: The 'Messy' Partner",
      inputsA: 'Loyal. Loving. Tidy.',
      outcomesA: "Annoyance at Partner's untidiness.",
      inputsB: 'Loyal. Loving. Untidy.',
      outcomesB: 'Nagging from Partner.',
      diagnosis: 'equitable',
      ruling: 'cognitive',
      feedback: "Correct. The relationship is fundamentally equitable (Love/Loyalty match). A needs to reframe the 'cost' of untidiness.",
    },
    {
      id: 3,
      title: 'Case #309: The Breadwinner',
      inputsA: 'Earns $150k. Pays all bills.',
      outcomesA: 'Status. Nice Home. No chores.',
      inputsB: 'Earns $0. Manages Home & Kids.',
      outcomesB: 'Financial Security. Nice Home.',
      diagnosis: 'equitable',
      ruling: 'cognitive',
      feedback: 'Correct. Inputs differ in kind but are complementary in ratio. It is equitable. No behavioral change needed.',
    },
  ];

  const handleDiagnose = (d: string) => {
    setSelectedDiagnosis(d);
    setPhase('rule');
  };

  const handleRuling = (r: string) => {
    setSelectedRuling(r);
    const currentCase = cases[caseId];

    if (selectedDiagnosis === currentCase.diagnosis && r === currentCase.ruling) {
      setFeedback({ type: 'success', msg: currentCase.feedback });
      setScore((s) => s + 1);
    } else {
      setFeedback({ type: 'error', msg: 'Incorrect Judgement. Case Dismissed.' });
    }
    setPhase('result');
  };

  const nextCase = () => {
    if (caseId < cases.length - 1) {
      setCaseId((prev) => prev + 1);
      setPhase('review');
      setFeedback(null);
      setSelectedDiagnosis(null);
      setSelectedRuling(null);
    } else {
      setPhase('complete');
    }
  };

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-slate-900 border-4 border-slate-700 rounded-xl relative overflow-hidden bg-marble shadow-2xl">
      <div className="flex justify-between items-center p-4 border-b-2 border-slate-700 bg-slate-950 z-10">
        <div className="flex items-center gap-2">
          <Gavel size={16} className="text-amber-500" />
          <span className="text-amber-500 font-bold tracking-widest font-serif">FAMILY COURT: MEDIATION</span>
        </div>
        <div className="text-amber-400">
          CASES CLOSED: {score}/{cases.length}
        </div>
      </div>

      <div className="flex-grow relative z-10 p-8 flex flex-col items-center justify-center">
        {phase === 'complete' ? (
          <div className="text-center max-w-xl animate-fadeIn">
            <Scale size={80} className="text-amber-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-6 font-serif">DOCKET CLEARED</h3>
            <div className="text-6xl font-bold text-amber-400 mb-8 font-serif">{score === 3 ? 'JUSTICE SERVED' : 'MISTRIAL DECLARED'}</div>
            <button
              onClick={() => {
                setCaseId(0);
                setPhase('review');
                setScore(0);
                setFeedback(null);
                setSelectedDiagnosis(null);
                setSelectedRuling(null);
              }}
              className="text-slate-500 hover:text-white underline"
            >
              RESET COURT
            </button>
          </div>
        ) : (
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <div className="bg-slate-950 border-2 border-slate-700 p-6 rounded-xl shadow-lg relative">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <FileText size={100} />
              </div>
              <h4 className="text-amber-400 font-bold text-xl mb-6 font-serif border-b border-slate-800 pb-2">{cases[caseId].title}</h4>

              <div className="space-y-6">
                <div className="bg-slate-900 p-4 rounded border-l-4 border-blue-500">
                  <h5 className="text-blue-400 font-bold mb-2">PARTNER A</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Inputs</span>
                      <p className="text-slate-300">{cases[caseId].inputsA}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Outcomes</span>
                      <p className="text-slate-300">{cases[caseId].outcomesA}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded border-l-4 border-purple-500">
                  <h5 className="text-purple-400 font-bold mb-2">PARTNER B</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Inputs</span>
                      <p className="text-slate-300">{cases[caseId].inputsB}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Outcomes</span>
                      <p className="text-slate-300">{cases[caseId].outcomesB}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              {phase === 'review' && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-white font-serif text-xl mb-4">Step 1: Diagnosis</h4>
                  <p className="text-slate-400 mb-4">Analyze the Input/Outcome ratios. Is the relationship fair?</p>
                  <button
                    onClick={() => handleDiagnose('equitable')}
                    className="w-full p-4 bg-slate-800 border hover:border-green-500 rounded text-left transition-all group"
                  >
                    <span className="font-bold text-green-400 block group-hover:text-green-300">EQUITABLE</span>
                    <span className="text-xs text-slate-500">Ratios are similar.</span>
                  </button>
                  <button
                    onClick={() => handleDiagnose('under_a')}
                    className="w-full p-4 bg-slate-800 border hover:border-blue-500 rounded text-left transition-all group"
                  >
                    <span className="font-bold text-blue-400 block group-hover:text-blue-300">A IS UNDER-BENEFITTING</span>
                    <span className="text-xs text-slate-500">A puts in more/gets less than B.</span>
                  </button>
                  <button
                    onClick={() => handleDiagnose('under_b')}
                    className="w-full p-4 bg-slate-800 border hover:border-purple-500 rounded text-left transition-all group"
                  >
                    <span className="font-bold text-purple-400 block group-hover:text-purple-300">B IS UNDER-BENEFITTING</span>
                    <span className="text-xs text-slate-500">B puts in more/gets less than A.</span>
                  </button>
                </div>
              )}

              {phase === 'rule' && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-white font-serif text-xl mb-4">Step 2: The Ruling</h4>
                  <p className="text-slate-400 mb-4">Prescribe a solution to restore Equity.</p>
                  <button
                    onClick={() => handleRuling('behavioral')}
                    className="w-full p-4 bg-slate-800 border hover:border-amber-500 rounded text-left transition-all flex items-center gap-4"
                  >
                    <RefreshCw size={24} className="text-amber-500" />
                    <div>
                      <span className="font-bold text-amber-400 block">BEHAVIORAL CHANGE</span>
                      <span className="text-xs text-slate-500">Order changes in chores/effort.</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleRuling('cognitive')}
                    className="w-full p-4 bg-slate-800 border hover:border-amber-500 rounded text-left transition-all flex items-center gap-4"
                  >
                    <Brain size={24} className="text-amber-500" />
                    <div>
                      <span className="font-bold text-amber-400 block">COGNITIVE CHANGE</span>
                      <span className="text-xs text-slate-500">Order change in perception/expectations.</span>
                    </div>
                  </button>
                </div>
              )}

              {phase === 'result' && feedback && (
                <div
                  className={`p-6 rounded-xl border-2 animate-fadeIn text-center ${
                    feedback.type === 'success' ? 'bg-green-900/50 border-green-500' : 'bg-red-900/50 border-red-500'
                  }`}
                >
                  <Gavel size={40} className={`mx-auto mb-4 ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`} />
                  <h4 className={`text-xl font-bold mb-2 ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {feedback.type === 'success' ? 'EQUITY RESTORED' : 'APPEAL DENIED'}
                  </h4>
                  <p className="text-white mb-6">{feedback.msg}</p>
                  <button
                    onClick={nextCase}
                    className="bg-white text-slate-900 px-6 py-2 rounded font-bold hover:bg-gray-200 transition-all flex items-center gap-2 mx-auto"
                  >
                    NEXT CASE <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EssayPlanRevealL6: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="bg-slate-900/80 border border-slate-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Shield size={120} />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-slate-700 pb-4">
        <h3 className={`font-bold text-slate-200 tracking-widest ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Structure Planning</h3>
        <span className="bg-amber-600 text-white px-3 py-1 text-xs font-bold rounded">8 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <Search size={20} /> Reveal Plan
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-slate-800/50 p-4 rounded border-l-4 border-amber-500 mb-4">
            <p className="text-slate-400 text-sm italic">Question: "Evaluate Equity Theory as an explanation for romantic relationships." (8 Marks = AO3 Only)</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Research Support</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Utne et al. (1984):</strong> Surveyed 118 newly married couples. Found that couples who considered their relationship <strong>equitable</strong> were
              significantly more satisfied than those who were over- or under-benefitting.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Cultural Bias</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Aumer-Ryan et al. (2007):</strong> Found cultural differences. Individualist cultures (USA) preferred equity. Collectivist cultures (Jamaica) were most
              satisfied when <strong>over-benefitting</strong>. The theory is not universal.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Individual Differences</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Huseman et al. (1987):</strong> Not everyone cares about equity.
              <br />- <em>Benevolents:</em> Happy to under-benefit.
              <br />- <em>Entitleds:</em> Belief they deserve to over-benefit without guilt.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Contradictory Evidence</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Berg & McQuinn (1986):</strong> Longitudinal study. Found that equity did not increase over time in dating couples, nor did it predict which relationships
              ended. Other factors (like self-disclosure) were more important.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 6H. LESSON 9 SPECIFIC COMPONENTS
// ==========================================

const VirtualSlide: React.FC<{ children: React.ReactNode; isPresentation: boolean }> = ({ children, isPresentation }) => (
  <div
    className={`flex flex-col h-full animate-fadeIn text-green-500 mx-auto w-full transition-all duration-300 relative ${
      isPresentation ? 'p-10 max-w-[98vw] text-3xl' : 'p-8 max-w-7xl text-base'
    }`}
  >
    <div className="absolute inset-0 bg-matrix -z-20 opacity-40"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black -z-10"></div>

    <div className={`flex-grow overflow-y-auto pr-2 custom-scrollbar-green flex flex-col ${isPresentation ? 'gap-8' : 'gap-6'}`}>{children}</div>
  </div>
);

const DoNowQuizL9: React.FC<{ questions: Question[]; isPresentation: boolean }> = ({ questions, isPresentation }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const score = Object.keys(answers).reduce((acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0), 0);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 h-full content-start transition-all ${isPresentation ? 'gap-16' : 'gap-8'}`}>
      <div className="space-y-6">
        <div className="bg-green-900/10 border border-green-700/70 p-8 shadow-[0_0_20px_rgba(34,197,94,0.15)] relative overflow-hidden rounded-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Terminal size={64} />
          </div>
          <h3 className={`font-bold text-white mb-4 uppercase ${isPresentation ? 'text-4xl' : 'text-xl'}`}>System Check</h3>
          <p className={`text-green-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>Verify retrieval from previous modules.</p>
        </div>
        <div className={`flex flex-col ${isPresentation ? 'gap-6' : 'gap-3'}`}>
          {!showResults ? (
            <>
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length < questions.length}
                className={`bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:grayscale text-black font-bold w-full transition-all shadow-lg uppercase ${
                  isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-4'
                }`}
              >
                Execute
              </button>
              <button
                onClick={() => setShowResults(true)}
                className={`bg-transparent hover:bg-green-900/30 text-green-400 border border-green-700 font-bold w-full transition-all uppercase ${
                  isPresentation ? 'px-12 py-6 text-2xl' : 'px-8 py-3 text-sm'
                }`}
              >
                Decrypt Answers
              </button>
            </>
          ) : (
            <div className={`bg-green-900/20 border border-green-600 w-full text-center animate-fadeIn rounded-xl ${isPresentation ? 'p-10' : 'p-6'}`}>
              <span className={`font-black text-white block mb-2 ${isPresentation ? 'text-6xl mb-6' : 'text-3xl'}`}>Data Integrity: {score}/{questions.length}</span>
              <span className={`text-green-400 uppercase tracking-widest ${isPresentation ? 'text-xl' : 'text-xs'}`}>Retrieval Complete</span>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar-green max-h-full">
        {questions.map((q) => (
          <div key={q.id} className={`bg-black border border-green-900 hover:border-green-500 transition-colors ${isPresentation ? 'p-6 mb-4' : 'p-4'}`}>
            <h4 className={`font-bold text-green-200 mb-3 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
              <span className="text-green-600 mr-2">0{q.id} //</span>
              {q.question}
            </h4>
            {isPresentation ? (
              <div className="min-h-[40px]">
                {showResults && (
                  <div className="text-white font-bold text-3xl animate-fadeIn mt-2 flex items-center gap-3">
                    <span className="text-green-500">&gt;&gt;&gt;</span> {q.options[q.correct]}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => {
                  const isSelected = answers[q.id] === idx;
                  const isCorrect = q.correct === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => !showResults && setAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                      className={`text-left transition-all px-4 py-2 text-xs border ${
                        showResults
                          ? isCorrect
                            ? 'bg-green-900/50 border-green-500 text-white'
                            : isSelected
                              ? 'bg-red-900/40 border-red-500 text-red-300'
                              : 'bg-black border-green-900 text-green-800'
                          : isSelected
                            ? 'bg-green-600 text-black border-green-600'
                            : 'bg-black border-green-900 hover:border-green-500 text-green-400 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const TheoryConflictL9: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [activeTheory, setActiveTheory] = useState<'reduced' | 'hyper'>('reduced');

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="bg-green-900/10 border border-green-500/30 p-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
        <span className="text-green-600 font-bold uppercase text-xs tracking-widest block mb-1">Key Definition</span>
        <p className={`text-slate-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          <strong className="text-white">Computer-Mediated Communication (CMC):</strong> Any communication via two or more electronic devices (social media, text, email) as opposed to
          face-to-face interaction.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTheory('reduced')}
          className={`px-6 py-3 border-2 uppercase font-bold transition-all ${activeTheory === 'reduced' ? 'bg-red-900/40 border-red-500 text-red-400' : 'border-green-900 text-green-800'}`}
        >
          Reduced Cues
        </button>
        <button
          onClick={() => setActiveTheory('hyper')}
          className={`px-6 py-3 border-2 uppercase font-bold transition-all ${activeTheory === 'hyper' ? 'bg-blue-900/40 border-blue-500 text-blue-400' : 'border-green-900 text-green-800'}`}
        >
          Hyperpersonal
        </button>
      </div>

      <div className="flex-grow relative border-2 border-green-900 bg-black p-8 overflow-hidden">
        {activeTheory === 'reduced' ? (
          <div className="animate-fadeIn space-y-6">
            <div className="flex items-center gap-4 text-red-500 border-b border-red-900/50 pb-4">
              <AlertTriangle size={isPresentation ? 48 : 32} />
              <h3 className={`font-bold uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Sproull & Kiesler (1986)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-red-400 uppercase tracking-widest text-sm mb-2">Core Concept</h4>
                <p className={`text-slate-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  CMC relationships are less effective than FtF because they lack <strong>non-verbal cues</strong> (tone, expression).
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-red-900/20 p-4 border-l-2 border-red-500">
                  <strong className="text-red-400 block text-xs uppercase">Deindividuation</strong>
                  <p className="text-slate-400 text-sm">Loss of individual identity. We feel anonymous.</p>
                </div>
                <div className="bg-red-900/20 p-4 border-l-2 border-red-500">
                  <strong className="text-red-400 block text-xs uppercase">Disinhibition</strong>
                  <p className="text-slate-400 text-sm">Freedom to be blunt/aggressive. Leads to <strong>Flaming</strong>.</p>
                </div>
              </div>
            </div>
            <div className="text-center text-red-500/50 font-mono text-xs mt-4">Result: Intimacy Blocked</div>
          </div>
        ) : (
          <div className="animate-fadeIn space-y-6">
            <div className="flex items-center gap-4 text-blue-500 border-b border-blue-900/50 pb-4">
              <Monitor size={isPresentation ? 48 : 32} />
              <h3 className={`font-bold uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Walther (1996)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-blue-400 uppercase tracking-widest text-sm mb-2">Core Concept</h4>
                <p className={`text-slate-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                  CMC relationships can be <strong>more personal</strong> than FtF. Online, self-disclosure happens earlier and is more intense.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-900/20 p-4 border-l-2 border-blue-500">
                  <strong className="text-blue-400 block text-xs uppercase">Selective Self-Presentation</strong>
                  <p className="text-slate-400 text-sm">Sender manipulates image. Can be hyper-honest or hyper-dishonest.</p>
                </div>
                <div className="bg-blue-900/20 p-4 border-l-2 border-blue-500">
                  <strong className="text-blue-400 block text-xs uppercase">Anonymity</strong>
                  <p className="text-slate-400 text-sm">"Strangers on a Train" effect. Less accountability = more disclosure.</p>
                </div>
              </div>
            </div>
            <div className="text-center text-blue-500/50 font-mono text-xs mt-4">Result: Accelerated Intimacy</div>
          </div>
        )}
      </div>
    </div>
  );
};

const GatingVisualL9: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [mode, setMode] = useState<'ftf' | 'cmc'>('ftf');

  return (
    <div className="h-full flex flex-col items-center justify-center gap-8">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setMode('ftf')}
          className={`px-6 py-2 border uppercase font-bold transition-all ${mode === 'ftf' ? 'bg-red-600 text-black border-red-600' : 'border-green-800 text-green-800'}`}
        >
          Offline (FtF)
        </button>
        <button
          onClick={() => setMode('cmc')}
          className={`px-6 py-2 border uppercase font-bold transition-all ${mode === 'cmc' ? 'bg-green-600 text-black border-green-600' : 'border-green-800 text-green-800'}`}
        >
          Online (CMC)
        </button>
      </div>

      <div className="relative w-full max-w-4xl h-64 bg-black border border-green-900 flex items-center justify-between px-12 overflow-hidden">
        <div className="absolute inset-0 bg-matrix opacity-20 pointer-events-none"></div>

        <div className="flex flex-col items-center z-10">
          <User size={48} className="text-white" />
          <span className="text-xs text-green-500 mt-2">You</span>
        </div>

        <div className="flex-grow h-2 bg-green-900 relative mx-4">
          <div className={`absolute top-0 left-0 h-full bg-green-500 transition-all duration-1000 ${mode === 'cmc' ? 'w-full' : 'w-1/3'}`}></div>
        </div>

        <div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 delay-[750ms] ${mode === 'cmc' ? 'opacity-20 scale-110 blur-sm' : 'opacity-100 scale-100'}`}
        >
          <div className={`border-4 p-4 bg-black ${mode === 'ftf' ? 'border-red-500' : 'border-green-500 border-dashed'}`}>
            <div className="flex flex-col items-center gap-2 text-center w-32">
              {mode === 'ftf' ? <Lock className="text-red-500" /> : <Unlock className="text-green-500" />}
              <span className={`font-bold text-xs uppercase ${mode === 'ftf' ? 'text-red-500' : 'text-green-500'}`}>
                {mode === 'ftf' ? 'Gates Active' : 'Absence of Gating'}
              </span>
              {mode === 'ftf' && (
                <div className="text-[10px] text-red-400 mt-2">
                  - Appearance
                  <br />- Anxiety
                  <br />- Stammer
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center z-10">
          <User size={48} className={`transition-colors duration-1000 ${mode === 'cmc' ? 'text-white' : 'text-green-900'}`} />
          <span className="text-xs text-green-500 mt-2">Partner</span>
        </div>
      </div>

      <div className="text-center max-w-2xl bg-black border border-green-500/50 p-4">
        <h4 className="text-white uppercase font-bold mb-2">McKenna &amp; Bargh (1999)</h4>
        <p className="text-green-400 text-sm">
          {mode === 'ftf'
            ? "In face-to-face interactions, 'GATES' (obstacles) are active. Physical unattractiveness or social anxiety can block attraction before self-disclosure begins."
            : "In CMC, gates are absent. Attention is refocused on what is said (self-disclosure) rather than superficial features. Relationships can get off the ground."}
        </p>
      </div>
    </div>
  );
};

type L9Phase = 'briefing' | 'select' | 'gate1' | 'review1' | 'gate2' | 'review2' | 'gate3' | 'review3' | 'result';
type L9CharacterKey = 'alex' | 'matthew' | 'harriett';

type L9Choice = {
  id: string;
  label: string;
  type: string;
  effect: { auth: number; app: number };
  text: string;
  hint: string;
};

type L9Scenario = {
  title: string;
  desc: string;
  choices: L9Choice[];
};

type L9Feedback = {
  msg: string;
  type: string;
  effect: { auth: number; app: number };
  prevStats: { authenticity: number; appeal: number };
  newStats: { authenticity: number; appeal: number };
  status: string;
  statusColor: string;
};

const AvatarArchitectSimL9: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [phase, setPhase] = useState<L9Phase>('briefing');
  const [stats, setStats] = useState({ authenticity: 50, appeal: 50 });
  const [feedback, setFeedback] = useState<L9Feedback | null>(null);
  const [selectedChar, setSelectedChar] = useState<L9CharacterKey | null>(null);
  const [showHint, setShowHint] = useState(false);
  const gatePhase: 'gate1' | 'gate2' | 'gate3' | null = phase === 'gate1' || phase === 'gate2' || phase === 'gate3' ? phase : null;

  const characters: Record<L9CharacterKey, { name: string; gate: string; desc: string }> = {
    alex: { name: 'ALEX', gate: 'SOCIAL ANXIETY', desc: 'Freezes in FtF situations. Needs to build trust online.' },
    matthew: { name: 'MATTHEW', gate: 'PHYSICAL APPEARANCE', desc: 'Has facial scarring. Often rejected on sight before speaking.' },
    harriett: { name: 'HARRIETT', gate: 'SEVERE STAMMER', desc: 'Struggles to speak fluently FtF. Highly articulate in text.' },
  };

  const scenarios: Record<L9CharacterKey, Record<'gate1' | 'gate2' | 'gate3', L9Scenario>> = {
    alex: {
      gate1: {
        title: 'GATE 1: VISUAL (ANXIETY)',
        desc: 'Alex fears judgement of their appearance. Strategy?',
        choices: [
          { id: 'a', label: "Apply 'Glow' filter and smooth skin", type: 'Hyper-Dishonest', effect: { auth: -30, app: +40 }, text: 'Bypassed gate, but created false expectation.', hint: 'High appeal, but risks setting false expectations.' },
          { id: 'b', label: 'Upload a standard ID-style photo', type: 'Reduced Cues', effect: { auth: +10, app: -20 }, text: 'Too honest. Anxiety shows. Gate remains closed.', hint: 'Honest, but lacks non-verbal warmth.' },
          { id: 'c', label: 'Use a photo of a hobby (e.g. painting)', type: 'Selective', effect: { auth: -5, app: +25 }, text: 'OPTIMAL. Uses anonymity to hide anxiety while maintaining intrigue.', hint: 'Selective presentation. Focuses on interests.' },
        ],
      },
      gate2: {
        title: "GATE 2: IDENTITY (ANXIETY)",
        desc: "How to describe Alex's personality without revealing the crippling anxiety?",
        choices: [
          { id: 'a', label: "Describe self as 'Life of the Party'", type: 'Hyper-Dishonest', effect: { auth: -40, app: +15 }, text: 'A lie. FtF will fail immediately.', hint: 'Sets up immediate failure FtF.' },
          { id: 'b', label: 'Mention preferring deep talks over crowds', type: 'Hyper-Honest', effect: { auth: +30, app: +10 }, text: 'OPTIMAL. Self-disclosing the trait proactively builds trust.', hint: 'Honest disclosure builds trust.' },
          { id: 'c', label: "Write 'Just ask me'", type: 'Low Effort', effect: { auth: -10, app: -25 }, text: 'Provides no hooks. Gate stays shut.', hint: 'Minimal effort gives no reason to connect.' },
        ],
      },
      gate3: {
        title: 'GATE 3: INTERACTION (ANXIETY)',
        desc: 'A match! Navigating the social skills gate.',
        choices: [
          { id: 'a', label: 'Suggest meeting for coffee tomorrow', type: 'Rush FtF', effect: { auth: 0, app: -30 }, text: 'Too fast! Reactivates anxiety gate before intimacy forms.', hint: 'Rushing re-introduces the gate too early.' },
          { id: 'b', label: 'Share a personal story about painting', type: 'Hyperpersonal', effect: { auth: +20, app: +30 }, text: 'OPTIMAL. Rapid intimacy via text bypasses the anxiety barrier.', hint: 'Deep disclosure establishes bond.' },
          { id: 'c', label: "Reply with 'Cool'", type: 'Reduced Cues', effect: { auth: -5, app: -15 }, text: 'Boring. Connection stalls.', hint: 'Lack of cues signals disinterest.' },
        ],
      },
    },
    matthew: {
      gate1: {
        title: 'GATE 1: VISUAL (SCARRING)',
        desc: 'Matthew has visible scarring. How to present his photo?',
        choices: [
          { id: 'a', label: 'Use a photo from 5 years ago', type: 'Hyper-Dishonest', effect: { auth: -50, app: +30 }, text: 'Catfishing. Meeting will be awkward/hostile.', hint: 'Deceptive. Will cause issues later.' },
          { id: 'b', label: 'Upload a high-res portrait', type: 'Hyper-Honest', effect: { auth: +20, app: -30 }, text: 'Honest, but the gate (appearance) blocks attraction immediately.', hint: 'Honesty here activates the gate immediately.' },
          { id: 'c', label: 'Use a distant action shot', type: 'Selective', effect: { auth: 0, app: +20 }, text: 'OPTIMAL. Shows lifestyle/value, minimizes the gate without lying.', hint: 'Highlights value while minimizing the gate.' },
        ],
      },
      gate2: {
        title: 'GATE 2: IDENTITY (SCARRING)',
        desc: 'Addressing the elephant in the room?',
        choices: [
          { id: 'a', label: "Don't mention appearance", type: 'Neutral', effect: { auth: 0, app: 0 }, text: 'Standard approach. Gate remains a risk at meeting.', hint: 'Leaves the gate as a potential shock.' },
          { id: 'b', label: "Put 'Not here for shallow people' in bio", type: 'Defensive', effect: { auth: +10, app: -20 }, text: 'Comes across as bitter. Lowers appeal.', hint: 'Defensiveness is unattractive.' },
          { id: 'c', label: "Make a joke about 'rugged looks'", type: 'Personality Focus', effect: { auth: +10, app: +20 }, text: 'OPTIMAL. Shifts focus from appearance to wit.', hint: 'Humor softens the impact of the gate.' },
        ],
      },
      gate3: {
        title: 'GATE 3: INTERACTION (SCARRING)',
        desc: 'Building a bond before they see the scar closely.',
        choices: [
          { id: 'a', label: 'Request a video call', type: 'Rush FtF', effect: { auth: +10, app: -10 }, text: 'Re-introduces the visual gate too early.', hint: 'Video brings back visual gates.' },
          { id: 'b', label: 'Discuss shared love of music', type: 'Hyperpersonal', effect: { auth: +10, app: +30 }, text: 'OPTIMAL. Establishing emotional intimacy makes physical flaws matter less.', hint: 'Emotional bond overrides physical flaws.' },
          { id: 'c', label: 'Send a photo of the scar', type: 'Blunt', effect: { auth: +10, app: -20 }, text: 'Too intense too soon.', hint: 'Over-sharing too early.' },
        ],
      },
    },
    harriett: {
      gate1: {
        title: 'GATE 1: VISUAL (STAMMER)',
        desc: "Harriett's gate is auditory, not visual. Visuals are her strength.",
        choices: [
          { id: 'a', label: 'Use a generic landscape', type: 'Reduced Cues', effect: { auth: -10, app: -20 }, text: 'Wasted opportunity. Hiding face reduces trust.', hint: 'Hiding face reduces trust unnecessarily.' },
          { id: 'b', label: 'Upload a clear, smiling photo', type: 'Standard', effect: { auth: +10, app: +20 }, text: "OPTIMAL. Visuals aren't the gate here, so play to strengths.", hint: "Play to strengths; visuals aren't the gate." },
          { id: 'c', label: 'Use a fake model photo', type: 'Hyper-Dishonest', effect: { auth: -30, app: +10 }, text: 'Unnecessary lie.', hint: 'Lying when not needed.' },
        ],
      },
      gate2: {
        title: 'GATE 2: IDENTITY (STAMMER)',
        desc: 'Does she disclose the impediment?',
        choices: [
          { id: 'a', label: "Claim 'I never shut up!'", type: 'Misleading', effect: { auth: -20, app: +10 }, text: 'Sets up a false expectation for FtF.', hint: 'Creates false expectations.' },
          { id: 'b', label: 'Write a witty, articulate bio', type: 'Hyperpersonal', effect: { auth: +20, app: +30 }, text: 'OPTIMAL. Using text to show the intelligence that the stammer hides FtF.', hint: 'Showcase intelligence via text.' },
          { id: 'c', label: "State 'I have a stammer'", type: 'Honest', effect: { auth: +10, app: 0 }, text: 'Neutral. Honest, but defines her by the gate.', hint: 'Honest but defines by the gate.' },
        ],
      },
      gate3: {
        title: 'GATE 3: INTERACTION (STAMMER)',
        desc: 'The critical phase. How to communicate?',
        choices: [
          { id: 'a', label: 'Send voice notes', type: 'Gate Active', effect: { auth: +10, app: -30 }, text: 'Bad strategy. Re-activates the gate immediately.', hint: 'Activates the auditory gate.' },
          { id: 'b', label: 'Engage in long text chats', type: 'Hyperpersonal', effect: { auth: +20, app: +20 }, text: 'OPTIMAL. Builds deep connection where she is fluent.', hint: 'Plays to the strength of CMC.' },
          { id: 'c', label: "Reply 'k'", type: 'Low Effort', effect: { auth: -10, app: -10 }, text: "Doesn't use the medium's advantage.", hint: 'Low effort fails to connect.' },
        ],
      },
    },
  };

  const handleChoice = (choice: L9Choice) => {
    const nextStats = {
      authenticity: Math.min(100, Math.max(0, stats.authenticity + choice.effect.auth)),
      appeal: Math.min(100, Math.max(0, stats.appeal + choice.effect.app)),
    };

    let status = 'PASSED';
    let color = 'text-green-500';
    if (choice.type.match(/Dishonest|Rush|Low|Reduced|Gate|Blunt|Defensive|Misleading/)) {
      if (choice.type.match(/Dishonest|Misleading/)) {
        status = 'PASSED (HIGH RISK)';
        color = 'text-yellow-500';
      } else {
        status = 'BLOCKED';
        color = 'text-red-500';
      }
    }

    setFeedback({
      msg: choice.text,
      type: choice.type,
      effect: choice.effect,
      prevStats: stats,
      newStats: nextStats,
      status,
      statusColor: color,
    });

    if (phase === 'gate1') setPhase('review1');
    else if (phase === 'gate2') setPhase('review2');
    else if (phase === 'gate3') setPhase('review3');
  };

  const advance = () => {
    if (!feedback) return;
    setStats(feedback.newStats);
    setFeedback(null);
    setShowHint(false);

    if (phase === 'review1') setPhase('gate2');
    else if (phase === 'review2') setPhase('gate3');
    else if (phase === 'review3') setPhase('result');
  };

  const reset = () => {
    setPhase('briefing');
    setStats({ authenticity: 50, appeal: 50 });
    setSelectedChar(null);
    setFeedback(null);
    setShowHint(false);
  };

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-black border-2 border-green-900 relative overflow-hidden neon-border scanline">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-green-900 bg-black z-10">
        <div className="flex items-center gap-2">
          <User size={16} className="text-green-500" />
          <span className="text-green-500 font-bold tracking-widest">AVATAR_ARCHITECT_V2.0</span>
        </div>
        <div className="text-green-700">AUTH: {stats.authenticity}% // APPEAL: {stats.appeal}%</div>
      </div>

      <div className="flex-grow p-8 relative z-10 flex flex-col items-center justify-center">
        {phase === 'briefing' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <Cpu size={80} className="text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4 uppercase">Profile Optimization</h3>
            <p className="text-green-400 mb-8 text-lg">Select a client profile. Your goal is to use selective self-presentation to bypass their specific gate and establish a connection.</p>
            <button onClick={() => setPhase('select')} className="bg-green-700 text-black px-8 py-3 font-bold hover:bg-green-600 transition-all text-xl uppercase">
              Select Client
            </button>
          </div>
        )}

        {phase === 'select' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl animate-fadeIn">
            {Object.entries(characters).map(([key, char]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedChar(key as L9CharacterKey);
                  setPhase('gate1');
                }}
                className="border-2 border-green-800 p-6 hover:bg-green-900/20 hover:border-green-500 transition-all group text-left"
              >
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400">{char.name}</h4>
                <span className="text-xs text-red-500 font-bold block mb-2">GATE: {char.gate}</span>
                <p className="text-slate-400 text-sm">{char.desc}</p>
              </button>
            ))}
          </div>
        )}

        {selectedChar && gatePhase && (
          <div className="w-full max-w-4xl animate-fadeIn relative">
            <div className="text-center mb-8">
              <span className="text-green-600 font-bold block mb-1">CLIENT: {characters[selectedChar].name}</span>
              <h4 className="text-white text-2xl font-bold mb-2">{scenarios[selectedChar][gatePhase].title}</h4>
              <p className="text-green-400">{scenarios[selectedChar][gatePhase].desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {scenarios[selectedChar][gatePhase].choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                  className="p-6 border border-green-800 hover:border-green-500 hover:bg-green-900/20 transition-all text-left group relative"
                >
                  <div className="mb-4 text-green-600 group-hover:text-green-400">
                    {phase === 'gate1' && <Camera size={32} />}
                    {phase === 'gate2' && <Edit3 size={32} />}
                    {phase === 'gate3' && <Send size={32} />}
                  </div>
                  <span className="block text-white font-bold text-lg mb-2">{choice.label}</span>
                  {showHint && (
                    <div className="mt-2 text-xs text-yellow-500 border-t border-green-900 pt-2 animate-fadeIn">
                      <span className="block font-bold uppercase mb-1">{choice.type}</span>
                      {choice.hint}
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="absolute -bottom-16 right-0">
              <button
                onClick={() => setShowHint(!showHint)}
                className={`flex items-center gap-2 px-4 py-2 border rounded font-bold uppercase transition-all ${
                  showHint ? 'bg-yellow-900/40 border-yellow-500 text-yellow-400' : 'bg-black border-green-900 text-green-700 hover:text-green-500'
                }`}
              >
                <Lightbulb size={16} />
                {showHint ? 'Hints Active' : 'Enable Hints'}
              </button>
            </div>
          </div>
        )}

        {['review1', 'review2', 'review3'].includes(phase) && feedback && (
          <div className="max-w-2xl bg-green-900/10 border border-green-500 p-8 text-center animate-fadeIn w-full">
            <h4 className={`text-2xl font-bold mb-4 uppercase ${feedback.statusColor}`}>Gate Status: {feedback.status}</h4>

            <div className="grid grid-cols-2 gap-8 mb-6 border-b border-green-900 pb-6">
              <div>
                <span className="text-xs text-green-700 uppercase block">Authenticity</span>
                <span className="text-xl text-white">{feedback.prevStats.authenticity} → {feedback.newStats.authenticity}</span>
                <span className={`text-xs block ${feedback.effect.auth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ({feedback.effect.auth > 0 ? '+' : ''}{feedback.effect.auth})
                </span>
              </div>
              <div>
                <span className="text-xs text-green-700 uppercase block">Appeal</span>
                <span className="text-xl text-white">{feedback.prevStats.appeal} → {feedback.newStats.appeal}</span>
                <span className={`text-xs block ${feedback.effect.app >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ({feedback.effect.app > 0 ? '+' : ''}{feedback.effect.app})
                </span>
              </div>
            </div>

            <div className="bg-black/50 p-4 border border-green-900 mb-6">
              <span className="text-xs text-green-600 uppercase block mb-1">Theoretical Analysis</span>
              <span className="text-xs text-green-400 uppercase block mb-2 font-bold">{feedback.type}</span>
              <p className="text-white text-sm">"{feedback.msg}"</p>
            </div>

            <button onClick={advance} className="bg-green-600 text-black px-8 py-2 font-bold hover:bg-green-500 uppercase w-full">
              Continue Sequence
            </button>
          </div>
        )}

        {phase === 'result' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <div className="mb-6">
              {stats.authenticity > 40 && stats.appeal > 40 ? <Unlock size={80} className="text-green-500 mx-auto" /> : <Lock size={80} className="text-red-500 mx-auto" />}
            </div>
            <h3 className="text-3xl text-white font-bold mb-4 uppercase">
              {stats.authenticity > 40 && stats.appeal > 40 ? 'Connection Established' : 'Connection Failed'}
            </h3>
            <p className="text-green-400 mb-8 text-lg">
              {stats.authenticity > 40 && stats.appeal > 40
                ? `${selectedChar ? characters[selectedChar].name : 'Client'} established intimacy online. The gate was bypassed.`
                : 'Failure. The profile was either too dishonest (gate re-activated at meeting) or too impersonal (Reduced Cues blocked intimacy).'}
            </p>
            <button onClick={reset} className="text-green-600 underline hover:text-green-400 uppercase">
              Reset System
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const EssayPlanRevealL9: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="bg-black border border-green-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Terminal size={120} className="text-green-500" />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-green-900 pb-4">
        <h3 className={`font-bold text-white tracking-widest uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Data Log: Essay Plan</h3>
        <span className="bg-green-600 text-black px-3 py-1 text-xs font-bold font-mono rounded">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-green-700 hover:bg-green-600 text-black font-bold uppercase transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <Unlock size={20} /> Decrypt File
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar-green pr-2 z-10 relative h-full">
          <div className="bg-green-900/10 p-4 border-l-4 border-green-500 mb-4">
            <p className="text-green-400 text-sm font-mono italic">Question: "Discuss virtual relationships in social media." (16 Marks)</p>
          </div>

          <div className={`border-l-4 border-blue-500 pl-4 py-2`}>
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-slate-300 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li>
                <strong>Reduced Cues (Sproull &amp; Kiesler):</strong> Lack of cues = deindividuation + disinhibition (flaming). Less effective.
              </li>
              <li>
                <strong>Hyperpersonal Model (Walther):</strong> CMC can be more intimate. Selective self-presentation + anonymity.
              </li>
              <li>
                <strong>Absence of Gating (McKenna &amp; Bargh):</strong> Obstacles removed. Focus on disclosure. "True Self" shown.
              </li>
            </ul>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Lack of Support for Reduced Cues</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Walther &amp; Tidwell (1995):</strong> Cues aren't absent, just different. We use style, timing (chronemics), and emojis. The theory is wrong to say CMC is inevitably less effective.
            </p>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Support for Hyperpersonal</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Whitty &amp; Joinson (2009):</strong> Found evidence of "Hyper-honesty" and "Hyper-dishonesty" in online forums. Questions are direct/probing, unlike FtF small talk.
            </p>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Support for Absence of Gating</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>McKenna &amp; Bargh (2000):</strong> Studied lonely/anxious people. 70% of relationships formed online lasted &gt;2 years (higher than offline). Shows value of bypassing gates.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Multimodal Relationships</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Walther (2011):</strong> Theories are reductionist if they treat CMC/FtF as separate. Modern relationships are multimodal; online interactions influence offline ones and vice versa.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 6I. LESSON 10 SPECIFIC COMPONENTS (Magazine style)
// ==========================================

const PhaseHeaderL10: React.FC<{ phase: string; title: string; icon: React.ElementType; time?: string; isPresentation: boolean }> = ({ phase, title, icon: Icon, time, isPresentation }) => (
  <div className={`flex items-center justify-between border-b border-zinc-800 transition-all ${isPresentation ? 'mb-6 pb-4' : 'mb-6 pb-4'}`}>
    <div className="flex items-center gap-4">
      <div className={`border-2 border-fuchsia-600 flex items-center justify-center -rotate-2 shadow-[4px_4px_0px_#c026d3] ${isPresentation ? 'w-20 h-20 bg-zinc-900' : 'w-12 h-12 bg-zinc-900'}`}>
        <Icon size={isPresentation ? 40 : 24} className="text-fuchsia-500" />
      </div>
      <div>
        <h4 className={`font-marker text-fuchsia-500 uppercase tracking-widest ${isPresentation ? 'text-2xl mb-1' : 'text-xs mb-0.5'}`}>{phase}</h4>
        <h2 className={`font-headline uppercase text-white tracking-wide ${isPresentation ? 'text-6xl' : 'text-4xl'}`}>{title}</h2>
      </div>
    </div>
    {time && (
      <div className={`flex items-center gap-2 text-zinc-400 font-mono bg-zinc-900 border border-zinc-800 ${isPresentation ? 'text-xl px-6 py-3' : 'text-xs px-3 py-1.5'}`}>
        <Clock size={isPresentation ? 24 : 14} className="text-fuchsia-500" /> {time}
      </div>
    )}
  </div>
);

const SlideL10: React.FC<{ children: React.ReactNode; isPresentation: boolean; enableFlash?: boolean }> = ({ children, isPresentation, enableFlash = false }) => (
  <div
    className={`flex flex-col h-full animate-fadeIn text-zinc-200 mx-auto w-full transition-all duration-300 relative ${
      isPresentation ? 'p-10 max-w-[98vw] text-4xl' : 'p-8 max-w-7xl text-base'
    }`}
  >
    {enableFlash && <div className="absolute inset-0 bg-white pointer-events-none animate-flash z-50 mix-blend-overlay opacity-5"></div>}
    <div className={`flex-grow overflow-y-auto pr-2 custom-scrollbar flex flex-col ${isPresentation ? 'gap-8' : 'gap-6'}`}>{children}</div>
  </div>
);

const DoNowQuizL10: React.FC<{ questions: Question[]; isPresentation: boolean }> = ({ questions, isPresentation }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const handleSelect = (qId: number, optionIdx: number) => setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  const score = Object.keys(answers).reduce((acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0), 0);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 h-full content-start transition-all ${isPresentation ? 'gap-16' : 'gap-8'}`}>
      <div className="space-y-6">
        <div className={`bg-zinc-900 border-2 border-fuchsia-600 p-8 shadow-[8px_8px_0px_#db2777] relative overflow-hidden rotate-1`}>
          <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-marker p-4 rotate-12 text-sm border-2 border-black">POP QUIZ!</div>
          <h3 className={`font-headline text-white mb-4 uppercase ${isPresentation ? 'text-6xl' : 'text-2xl'}`}>Celebrity Trivia?</h3>
          <p className={`text-zinc-400 ${isPresentation ? 'text-4xl' : 'text-sm'}`}>Actually, let's test your recall of Virtual Relationships.</p>
        </div>
        <div className={`flex flex-col ${isPresentation ? 'gap-6' : 'gap-3'}`}>
          {!showResults ? (
            <>
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length < 5}
                className={`bg-fuchsia-700 hover:bg-fuchsia-600 disabled:opacity-50 disabled:grayscale text-white font-headline tracking-wider uppercase w-full transition-all shadow-lg ${
                  isPresentation ? 'px-12 py-8 text-4xl' : 'px-8 py-4'
                }`}
              >
                Reveal Truth
              </button>
              <button
                onClick={() => setShowResults(true)}
                className={`bg-transparent hover:bg-zinc-800 text-fuchsia-500 border-2 border-fuchsia-700 font-bold w-full transition-all uppercase ${
                  isPresentation ? 'px-12 py-6 text-3xl' : 'px-8 py-3 text-sm'
                }`}
              >
                Cheat Sheet
              </button>
            </>
          ) : (
            <div className={`bg-zinc-900 border-2 border-green-500 w-full text-center animate-fadeIn ${isPresentation ? 'p-10' : 'p-6'}`}>
              <span className={`font-headline text-white block mb-2 ${isPresentation ? 'text-7xl mb-6' : 'text-3xl'}`}>RATING: {score}/5</span>
              <span className={`text-green-500 uppercase tracking-widest ${isPresentation ? 'text-3xl' : 'text-xs'}`}>Fan Level Verified</span>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-full">
        {questions.map((q) => (
          <div key={q.id} className={`bg-black border border-zinc-800 hover:border-fuchsia-500 transition-colors ${isPresentation ? 'p-8 mb-6' : 'p-4'}`}>
            <h4 className={`font-bold text-zinc-300 mb-3 ${isPresentation ? 'text-4xl' : 'text-sm'}`}>
              <span className="text-fuchsia-500 mr-2">#{q.id}</span>
              {q.question}
            </h4>
            {isPresentation ? (
              <div className="min-h-[40px]">
                {showResults && (
                  <div className="text-white font-bold text-4xl animate-fadeIn mt-4 flex items-center gap-3">
                    <CheckCircle size={40} className="text-green-500" /> {q.options[q.correct]}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`text-left transition-all px-4 py-2 text-xs border ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/50 border-green-500 text-white'
                          : answers[q.id] === idx
                            ? 'bg-red-900/50 border-red-500 text-red-300'
                            : 'bg-black border-transparent text-zinc-500 opacity-50'
                        : answers[q.id] === idx
                          ? 'bg-fuchsia-700 text-white border-fuchsia-600'
                          : 'bg-zinc-900 border-zinc-800 hover:border-fuchsia-500 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const LevelsOfParasocial: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [items, setItems] = useState([
    { id: 1, text: 'I keep up with my favourite celebrity for fun.', level: 1 },
    { id: 2, text: 'I would spend £5000 on a napkin they used.', level: 3 },
    { id: 3, text: 'I consider my favourite celebrity to be my soulmate.', level: 2 },
    { id: 4, text: 'I discuss what my favourite celebrity has done with my friends.', level: 1 },
    { id: 5, text: 'If I walked into their house uninvited, they would be happy to see me.', level: 3 },
    { id: 6, text: 'I have frequent intrusive thoughts about them.', level: 2 },
  ]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [placements, setPlacements] = useState<{ [k: number]: any[] }>({ 1: [], 2: [], 3: [] });
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handlePlace = (level: number) => {
    if (!selectedItem) return;
    if (selectedItem.level === level) {
      setPlacements((prev) => ({ ...prev, [level]: [...prev[level], selectedItem] }));
      setItems((prev) => prev.filter((i) => i.id !== selectedItem.id));
      setSelectedItem(null);
      setFeedback({ type: 'success', msg: 'Correct!' });
    } else {
      setFeedback({ type: 'error', msg: 'Incorrect level.' });
    }
    setTimeout(() => setFeedback(null), 1000);
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="bg-zinc-900 border border-zinc-700 p-4 text-center">
        <h3 className={`font-headline text-white uppercase mb-2 ${isPresentation ? 'text-5xl' : 'text-xl'}`}>Celebrity Attitude Scale (CAS)</h3>
        <p className={`text-zinc-400 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>
          McCutcheon et al. (2002) identified three levels of parasocial relationships. Categorize the statements below.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-grow">
        <div
          onClick={() => handlePlace(1)}
          className="bg-green-900/10 border-2 border-green-500/50 rounded-xl p-4 flex flex-col items-center hover:bg-green-900/20 cursor-pointer transition-all relative"
        >
          <div className={`bg-green-500 text-black font-bold px-3 py-1 rounded-full mb-4 ${isPresentation ? 'text-xl' : 'text-xs'}`}>LEVEL 1</div>
          <h4 className={`text-green-400 font-headline uppercase text-center mb-2 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Entertainment-Social</h4>
          <p className={`text-zinc-500 text-center mb-4 ${isPresentation ? 'text-xl' : 'text-xs'}`}>Source of fun and gossip.</p>
          <div className="w-full space-y-2">
            {placements[1].map((i) => (
              <div key={i.id} className={`bg-green-900/50 p-2 rounded text-green-200 border border-green-700 animate-fadeIn ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                {i.text}
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={() => handlePlace(2)}
          className="bg-yellow-900/10 border-2 border-yellow-500/50 rounded-xl p-4 flex flex-col items-center hover:bg-yellow-900/20 cursor-pointer transition-all relative"
        >
          <div className={`bg-yellow-500 text-black font-bold px-3 py-1 rounded-full mb-4 ${isPresentation ? 'text-xl' : 'text-xs'}`}>LEVEL 2</div>
          <h4 className={`text-yellow-400 font-headline uppercase text-center mb-2 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Intense-Personal</h4>
          <p className={`text-zinc-500 text-center mb-4 ${isPresentation ? 'text-xl' : 'text-xs'}`}>Obsessive thoughts & feelings.</p>
          <div className="w-full space-y-2">
            {placements[2].map((i) => (
              <div key={i.id} className={`bg-yellow-900/50 p-2 rounded text-yellow-200 border border-yellow-700 animate-fadeIn ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                {i.text}
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={() => handlePlace(3)}
          className="bg-red-900/10 border-2 border-red-500/50 rounded-xl p-4 flex flex-col items-center hover:bg-red-900/20 cursor-pointer transition-all relative"
        >
          <div className={`bg-red-500 text-black font-bold px-3 py-1 rounded-full mb-4 ${isPresentation ? 'text-xl' : 'text-xs'}`}>LEVEL 3</div>
          <h4 className={`text-red-400 font-headline uppercase text-center mb-2 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Borderline Pathological</h4>
          <p className={`text-zinc-500 text-center mb-4 ${isPresentation ? 'text-xl' : 'text-xs'}`}>Uncontrollable fantasies & extreme acts.</p>
          <div className="w-full space-y-2">
            {placements[3].map((i) => (
              <div key={i.id} className={`bg-red-900/50 p-2 rounded text-red-200 border border-red-700 animate-fadeIn ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                {i.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-48 border-t border-zinc-800 pt-4 flex flex-col items-center justify-center">
        {items.length > 0 ? (
          <>
            <p className={`text-zinc-400 mb-4 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>Select a statement to categorize:</p>
            <div className="flex gap-4 flex-wrap justify-center">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`px-6 py-3 border rounded transition-all ${
                    isPresentation ? 'text-2xl' : 'text-sm'
                  } ${selectedItem?.id === item.id ? 'bg-fuchsia-600 text-white border-fuchsia-500 scale-105' : 'bg-zinc-800 text-zinc-300 border-zinc-600 hover:bg-zinc-700'}`}
                >
                  {item.text}
                </button>
              ))}
            </div>
            {feedback && (
              <div className={`mt-4 font-bold ${isPresentation ? 'text-3xl' : 'text-base'} ${feedback.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {feedback.msg}
              </div>
            )}
          </>
        ) : (
          <div className="text-green-500 font-headline text-4xl animate-pulse">ANALYSIS COMPLETE</div>
        )}
      </div>
    </div>
  );
};

const ExplanationsComparison: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [model, setModel] = useState<'absorption' | 'attachment'>('absorption');
  const [aaStage, setAaStage] = useState(0);
  const [attType, setAttType] = useState<'resistant' | 'avoidant' | 'secure'>('resistant');

  const aaContent = [
    { title: '1. Deficiencies', text: "The model suggests people form parasocial relationships due to deficits in their own life (e.g. weak self-identity, lack of fulfillment). The celebrity offers an 'escape' from reality.", visualClass: 'opacity-30 scale-90', label: 'Weak Identity' },
    { title: '2. Absorption', text: 'Seeking total pre-occupation with the celebrity. Identifying with them to fill the void. This effortless focusing of attention creates a sense of companionship.', visualClass: 'opacity-100 scale-100 animate-pulse', label: 'Pre-occupation' },
    { title: '3. Addiction', text: "To sustain the satisfaction, the individual needs a stronger dose. This leads to extreme behaviors and delusional thinking to feel connected.", visualClass: 'opacity-100 scale-110 animate-glitch border-4 border-red-500', label: 'Extreme Behavior' },
  ];

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex gap-4">
        <button
          onClick={() => setModel('absorption')}
          className={`flex-1 py-4 font-headline uppercase border-b-4 transition-all ${
            isPresentation ? 'text-3xl' : 'text-xl'
          } ${model === 'absorption' ? 'border-fuchsia-500 text-fuchsia-500 bg-fuchsia-900/10' : 'border-zinc-800 text-zinc-600 hover:text-zinc-400'}`}
        >
          Absorption-Addiction
        </button>
        <button
          onClick={() => setModel('attachment')}
          className={`flex-1 py-4 font-headline uppercase border-b-4 transition-all ${
            isPresentation ? 'text-3xl' : 'text-xl'
          } ${model === 'attachment' ? 'border-blue-500 text-blue-500 bg-blue-900/10' : 'border-zinc-800 text-zinc-600 hover:text-zinc-400'}`}
        >
          Attachment Theory
        </button>
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 relative overflow-hidden">
        {model === 'absorption' && (
          <>
            <div className="flex flex-col items-center justify-center relative">
              <div
                className={`relative rounded-full border-4 border-fuchsia-600 flex items-center justify-center transition-all duration-700 ${
                  aaContent[aaStage].visualClass
                } ${isPresentation ? 'w-80 h-80' : 'w-48 h-48'}`}
              >
                <div className="absolute inset-0 bg-fuchsia-500/20 rounded-full blur-xl"></div>
                <span className={`font-headline uppercase text-center ${isPresentation ? 'text-2xl' : 'text-sm'} text-fuchsia-100`}>
                  {aaContent[aaStage].label}
                </span>
              </div>
              <div className="flex gap-2 mt-8">
                {[0, 1, 2].map((step) => (
                  <div key={step} className={`h-2 w-16 rounded-full transition-all ${step <= aaStage ? 'bg-fuchsia-500' : 'bg-zinc-700'}`}></div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-black/50 p-6 border-l-4 border-fuchsia-600 mb-6 animate-fadeIn">
                <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>{aaContent[aaStage].title}</h3>
                <p className={`text-zinc-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>{aaContent[aaStage].text}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setAaStage(0)}
                  className={`p-3 border rounded text-center transition-all ${aaStage === 0 ? 'bg-fuchsia-900/50 border-fuchsia-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                >
                  Stage 1
                </button>
                <button
                  onClick={() => setAaStage(1)}
                  className={`p-3 border rounded text-center transition-all ${aaStage === 1 ? 'bg-fuchsia-900/50 border-fuchsia-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                >
                  Stage 2
                </button>
                <button
                  onClick={() => setAaStage(2)}
                  className={`p-3 border rounded text-center transition-all ${aaStage === 2 ? 'bg-fuchsia-900/50 border-fuchsia-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                >
                  Stage 3
                </button>
              </div>
            </div>
          </>
        )}

        {model === 'attachment' && (
          <>
            <div className="flex flex-col items-center justify-center gap-6">
              <div
                className={`relative p-8 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                  attType === 'resistant'
                    ? 'border-green-500 bg-green-900/20'
                    : attType === 'avoidant'
                      ? 'border-red-500 bg-red-900/20'
                      : 'border-yellow-500 bg-yellow-900/20'
                } ${isPresentation ? 'w-80 h-80' : 'w-48 h-48'}`}
              >
                {attType === 'resistant' && <Heart className="text-green-500 animate-pulse" size={isPresentation ? 100 : 60} />}
                {attType === 'avoidant' && <Shield className="text-red-500" size={isPresentation ? 100 : 60} />}
                {attType === 'secure' && <Users className="text-yellow-500" size={isPresentation ? 100 : 60} />}
              </div>
              <div className="text-center">
                <span className="text-zinc-500 uppercase text-xs tracking-widest block mb-1">Likelihood of Parasocial Bond</span>
                <div className="w-64 h-4 bg-zinc-800 rounded-full overflow-hidden relative mx-auto">
                  <div
                    className={`h-full transition-all duration-500 ${
                      attType === 'resistant' ? 'w-full bg-green-500' : attType === 'avoidant' ? 'w-1/4 bg-red-500' : 'w-1/2 bg-yellow-500'
                    }`}
                  ></div>
                </div>
                <span
                  className={`font-bold mt-2 block ${attType === 'resistant' ? 'text-green-500' : attType === 'avoidant' ? 'text-red-500' : 'text-yellow-500'}`}
                >
                  {attType === 'resistant' ? 'VERY HIGH' : attType === 'avoidant' ? 'VERY LOW' : 'MODERATE'}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setAttType('resistant')}
                  className={`flex-1 p-2 text-xs font-bold uppercase border ${
                    attType === 'resistant' ? 'bg-green-900/40 border-green-500 text-green-400' : 'border-zinc-700 text-zinc-500'
                  }`}
                >
                  Insecure-Resistant
                </button>
                <button
                  onClick={() => setAttType('avoidant')}
                  className={`flex-1 p-2 text-xs font-bold uppercase border ${
                    attType === 'avoidant' ? 'bg-red-900/40 border-red-500 text-red-400' : 'border-zinc-700 text-zinc-500'
                  }`}
                >
                  Insecure-Avoidant
                </button>
                <button
                  onClick={() => setAttType('secure')}
                  className={`flex-1 p-2 text-xs font-bold uppercase border ${
                    attType === 'secure' ? 'bg-yellow-900/40 border-yellow-500 text-yellow-400' : 'border-zinc-700 text-zinc-500'
                  }`}
                >
                  Secure
                </button>
              </div>

              <div className="bg-black/50 p-6 border-l-4 border-blue-500 animate-fadeIn min-h-[200px]">
                <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  {attType === 'resistant' ? 'Seeker of Intimacy' : attType === 'avoidant' ? 'Avoider of Intimacy' : 'Healthy Interaction'}
                </h3>
                <p className={`text-zinc-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                  {attType === 'resistant' && 'Most likely to form parasocial bonds. They crave intimacy but fear rejection. A celebrity offers intimacy at a distance with zero risk of rejection.'}
                  {attType === 'avoidant' && 'Least likely to form parasocial bonds. They avoid intimacy and emotional closeness in all forms, whether real or imagined, to protect themselves.'}
                  {attType === 'secure' && 'Moderate likelihood. They have healthy real-life relationships and use parasocial interaction primarily for entertainment (Level 1), not to fill an emotional void.'}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const StanSimulator: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [phase, setPhase] = useState<'intro' | 'event1' | 'event2' | 'event3' | 'result'>('intro');
  const [stats, setStats] = useState({ obsession: 30, happiness: 50 });
  const [feedback, setFeedback] = useState<{ msg: string; next: 'event1' | 'event2' | 'event3' | 'result'; type: string } | null>(null);

  const scenarios = {
    event1: {
      title: 'EVENT 1: THE BAD DAY',
      desc: 'Sam failed a driving test and feels worthless. Reality is painful right now.',
      choices: [
        { id: 'a', text: "Watch favorite celebrity's comedy clips to cheer up.", type: 'Level 1: Entertainment', effect: { obs: 5, hap: 10 }, feedback: 'Healthy coping. Uses celebrity for entertainment and mood regulation.' },
        { id: 'b', text: "Spend 6 hours editing a fan-cam to feel 'close' to them.", type: 'Level 2: Intense-Personal', effect: { obs: 20, hap: 5 }, feedback: 'Absorption. Withdrawing from reality to identify with the celebrity.' },
      ],
    },
    event2: {
      title: 'EVENT 2: THE RUMOUR',
      desc: 'News breaks that the celebrity is dating someone new.',
      choices: [
        { id: 'a', text: 'Gossip about it with friends on Twitter.', type: 'Level 1: Social', effect: { obs: 5, hap: 5 }, feedback: 'Social interaction. Using the celebrity as social fuel.' },
        { id: 'b', text: 'Send hate mail to the new partner.', type: 'Level 3: Borderline Pathological', effect: { obs: 30, hap: -10 }, feedback: 'Pathological behavior. Delusional belief that the celebrity belongs to Sam.' },
      ],
    },
    event3: {
      title: 'EVENT 3: THE OPPORTUNITY',
      desc: 'Sam wins a backstage pass to meet the celebrity.',
      choices: [
        { id: 'a', text: 'Plan a fun outfit and questions.', type: 'Healthy Fan', effect: { obs: 0, hap: 20 }, feedback: 'Normal excitement. Reality connection maintained.' },
        { id: 'b', text: 'Believe this is destiny and they will fall in love.', type: 'Delusional', effect: { obs: 40, hap: -20 }, feedback: 'Addiction. Needing a stronger dose (a real relationship) to sustain satisfaction.' },
      ],
    },
  } as const;

  const handleChoice = (choice: (typeof scenarios)['event1']['choices'][0], nextPhase: 'event1' | 'event2' | 'event3' | 'result') => {
    setStats((prev) => ({
      obsession: Math.min(100, prev.obsession + choice.effect.obs),
      happiness: Math.min(100, Math.max(0, prev.happiness + choice.effect.hap)),
    }));
    setFeedback({ msg: choice.feedback, next: nextPhase, type: choice.type });
  };

  const nextStep = () => {
    if (feedback) setPhase(feedback.next);
    setFeedback(null);
  };

  return (
    <div
      className="h-full flex flex-col font-mono text-xs md:text-sm bg-zinc-900 border-4 border-fuchsia-900 relative overflow-hidden shadow-2xl"
      style={{
        backgroundColor: '#09090b',
        backgroundImage:
          'radial-gradient(circle at 10% 20%, rgba(192, 38, 211, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 20%)',
      }}
    >
      <div className="flex justify-between items-center p-4 border-b border-fuchsia-900 bg-black z-10">
        <div className="flex items-center gap-2">
          <Heart size={16} className="text-fuchsia-500" />
          <span className="text-fuchsia-500 font-bold tracking-widest uppercase">FANDOM_MANAGER_V1</span>
        </div>
        <div className="flex gap-4">
          <span className="text-fuchsia-300">OBSESSION: {stats.obsession}%</span>
          <span className="text-blue-300">HAPPINESS: {stats.happiness}%</span>
        </div>
      </div>

      <div className="flex-grow p-8 relative z-10 flex flex-col items-center justify-center">
        {phase === 'intro' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <Star size={80} className="text-fuchsia-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4 font-headline uppercase">MANAGE THE STAN</h3>
            <p className="text-zinc-400 mb-8 text-lg">
              You are managing "Sam". Life is hard, and Sam uses a celebrity to cope.
              <br />
              <br />
              <strong>Goal:</strong> Keep Sam happy without letting Obsession reach dangerous levels (Absorption-Addiction).
            </p>
            <button onClick={() => setPhase('event1')} className="bg-fuchsia-700 text-white px-8 py-3 font-bold hover:bg-fuchsia-600 transition-all text-xl uppercase">
              Start Simulation
            </button>
          </div>
        )}

        {['event1', 'event2', 'event3'].includes(phase) && !feedback && (
          <div className="w-full max-w-4xl animate-fadeIn">
            <div className="text-center mb-8">
              <h4 className="text-fuchsia-400 text-2xl font-bold mb-2 font-headline uppercase">{scenarios[phase as 'event1' | 'event2' | 'event3'].title}</h4>
              <p className="text-white text-xl">{scenarios[phase as 'event1' | 'event2' | 'event3'].desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scenarios[phase as 'event1' | 'event2' | 'event3'].choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => handleChoice(choice, phase === 'event1' ? 'event2' : phase === 'event2' ? 'event3' : 'result')}
                  className="p-6 border-2 border-zinc-700 hover:border-fuchsia-500 bg-black/50 hover:bg-fuchsia-900/20 transition-all text-left group"
                >
                  <span className="block text-white font-bold text-lg mb-2 group-hover:text-fuchsia-300">{choice.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {feedback && (
          <div className="max-w-2xl bg-zinc-900 border border-fuchsia-500 p-8 text-center animate-fadeIn w-full shadow-[0_0_30px_rgba(192,38,211,0.2)]">
            <h4 className="text-2xl font-bold mb-4 uppercase text-white">{feedback.type}</h4>
            <p className="text-fuchsia-300 mb-8 text-lg">"{feedback.msg}"</p>
            <button onClick={nextStep} className="bg-fuchsia-600 text-white px-8 py-2 font-bold hover:bg-fuchsia-500 uppercase w-full">
              Continue
            </button>
          </div>
        )}

        {phase === 'result' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <div className="mb-6">{stats.obsession > 80 ? <AlertTriangle size={80} className="text-red-500 mx-auto animate-pulse" /> : <CheckCircle size={80} className="text-green-500 mx-auto" />}</div>
            <h3 className="text-4xl text-white font-bold mb-4 font-headline uppercase">
              {stats.obsession > 80 ? 'RESTRAINING ORDER ISSUED' : 'HEALTHY FANDOM'}
            </h3>
            <p className="text-zinc-300 mb-8 text-xl">
              {stats.obsession > 80
                ? 'Sam spiraled into Level 3: Borderline Pathological. Absorption led to Addiction.'
                : 'Sam maintained a Level 1/2 relationship. The celebrity remains a source of fun, not pathology.'}
            </p>
            <button onClick={() => setPhase('intro')} className="text-fuchsia-500 underline hover:text-white uppercase">
              Reset Simulation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const EssayPlanRevealL10: React.FC<{ isPresentation: boolean }> = ({ isPresentation }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className={`bg-zinc-900/80 border border-zinc-800 p-8 flex flex-col h-full relative overflow-hidden`}>
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Mic size={120} />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-zinc-700 pb-4">
        <h3 className={`font-headline text-zinc-200 tracking-widest uppercase ${isPresentation ? 'text-5xl' : 'text-2xl'}`}>CONFIDENTIAL FILE</h3>
        <span className="bg-fuchsia-600 text-white px-3 py-1 text-xs font-bold rounded">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-headline uppercase tracking-widest transition-all shadow-[4px_4px_0px_#86198f] active:translate-y-1 active:shadow-none ${
              isPresentation ? 'px-10 py-6 text-4xl' : 'px-8 py-4 text-2xl'
            }`}
          >
            <Lock size={isPresentation ? 40 : 20} /> UNLOCK DOSSIER
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-zinc-950 p-6 border-l-4 border-fuchsia-500 mb-6">
            <p className={`text-zinc-400 italic ${isPresentation ? 'text-2xl' : 'text-sm'}`}>Question: "Discuss parasocial relationships." (16 Marks)</p>
          </div>

          <div className={`border-l-4 border-blue-500 pl-6 py-4`}>
            <strong className={`text-blue-400 block font-bold mb-2 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-zinc-300 list-disc pl-6 space-y-2 ${isPresentation ? 'text-2xl' : 'text-xs'}`}>
              <li>
                <strong>Levels (McCutcheon):</strong> Entertainment-Social, Intense-Personal, Borderline Pathological.
              </li>
              <li>
                <strong>Absorption-Addiction Model:</strong> Deficiencies to Absorption (Preoccupation) to Addiction (Extreme behavior).
              </li>
              <li>
                <strong>Attachment Theory:</strong> Insecure-Resistant most likely (fear rejection).
              </li>
            </ul>
          </div>

          <div className={`border-l-4 border-green-500 pl-6 py-4`}>
            <strong className={`text-green-400 block font-bold mb-2 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>AO3: Support for Absorption-Addiction</strong>
            <p className={`text-zinc-300 ${isPresentation ? 'text-2xl' : 'text-xs'}`}>
              <strong>Maltby et al. (2005):</strong> Studied females. Poor body image correlated with intense-personal relationships with female celebs. Supports idea that personal deficiency drives the bond.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-6 py-4`}>
            <strong className={`text-red-400 block font-bold mb-2 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>AO3: Challenge to Attachment</strong>
            <p className={`text-zinc-300 ${isPresentation ? 'text-2xl' : 'text-xs'}`}>
              <strong>McCutcheon et al. (2006):</strong> Measured attachment and celebrity attitudes in 299 people. Found no correlation between insecure-resistant attachment and parasocial relationships. Contradicts the theory.
            </p>
          </div>

          <div className={`border-l-4 border-green-500 pl-6 py-4`}>
            <strong className={`text-green-400 block font-bold mb-2 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>AO3: Cultural Universality</strong>
            <p className={`text-zinc-300 ${isPresentation ? 'text-2xl' : 'text-xs'}`}>
              <strong>Schmid & Klimmt (2011):</strong> Similar levels of parasocial attachment to Harry Potter in Germany and Mexico. Suggests the drive is universal.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 7. MAIN APP COMPONENT
// ==========================================

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(8);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isPresentation, setIsPresentation] = useState(false);

  const lessonSlideCounts: Record<number, number> = { 1: 9, 2: 9, 3: 9, 4: 7, 5: 8, 6: 8, 7: 8, 8: 8, 9: 8, 10: 8 };
  const slideCount = lessonSlideCounts[currentLesson] || 9;

  const nextSlide = useCallback(() => {
    if (currentSlide < slideCount - 1) setCurrentSlide((prev) => prev + 1);
  }, [currentSlide, slideCount]);
  const prevSlide = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [currentLesson]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPresentation) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentation, nextSlide, prevSlide]);

  const togglePresentation = () => {
    if (!isPresentation) {
      if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => null);
      setSidebarOpen(false);
      setIsPresentation(true);
    } else {
      if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen().catch(() => null);
      setIsPresentation(false);
    }
  };

  const renderLesson1 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-pink-500 blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                <Dna size={isPresentation ? 180 : 120} className="text-pink-300 relative z-10 animate-pulse" />
              </div>
              <h1
                className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 mb-4 tracking-tighter ${
                  isPresentation ? 'text-8xl' : 'text-6xl'
                }`}
              >
                Evolutionary Explanations
              </h1>
              <div className="h-1 w-64 bg-pink-900 my-6"></div>
              <h2 className="text-slate-400 text-xs tracking-widest uppercase mb-12">Lesson 01: Evolutionary Foundations</h2>
              <button
                onClick={nextSlide}
                className={`bg-gray-900 border border-pink-500 text-pink-400 font-bold px-12 py-4 hover:bg-pink-600 hover:text-black transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } rounded-lg shadow-[0_0_20px_rgba(236,72,153,0.25)]`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Do Now Task" icon={Clock} time="10 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson1DoNow} isPresentation={isPresentation} />
          </Slide>
        );
      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Teacher Input" title="Anisogamy" icon={Microscope} time="10 MINS" isPresentation={isPresentation} />
            <div className="flex flex-col h-full justify-center">
              <div className="text-center mb-8">
                <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>The Fundamental Difference</h3>
                <p className="text-gray-400">Differences between male and female sex cells (gametes).</p>
              </div>
              <div className={`grid grid-cols-2 gap-8 ${isPresentation ? 'max-w-6xl' : 'max-w-4xl'} mx-auto w-full`}>
                <div className="bg-gray-900/50 rounded-2xl border border-gray-700 p-8 shadow-xl hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                    <h4 className="text-blue-400 font-bold uppercase tracking-widest">Male (Sperm)</h4>
                    <Zap size={24} className="text-blue-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs uppercase">Size</span>
                      <div className="h-2 w-24 bg-gray-800 rounded-full">
                        <div className="h-full w-1/4 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs uppercase">Mobility</span>
                      <div className="h-2 w-24 bg-gray-800 rounded-full">
                        <div className="h-full w-full bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs uppercase">Numbers</span>
                      <div className="h-2 w-24 bg-gray-800 rounded-full">
                        <div className="h-full w-full bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-300 text-sm">
                    Strategy: <strong className="text-white">QUANTITY</strong>. Mobile, vast numbers, little energy.
                    <br />
                    <span className="text-blue-400 block mt-2">Consequence: No shortage of fertile males.</span>
                  </p>
                </div>
                <div className="bg-gray-900/50 rounded-2xl border border-gray-700 p-8 shadow-xl hover:border-pink-500/50 transition-colors">
                  <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                    <h4 className="text-pink-400 font-bold uppercase tracking-widest">Female (Ova)</h4>
                    <Target size={24} className="text-pink-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs uppercase">Size</span>
                      <div className="h-2 w-24 bg-gray-800 rounded-full">
                        <div className="h-full w-full bg-pink-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs uppercase">Mobility</span>
                      <div className="h-2 w-24 bg-gray-800 rounded-full">
                        <div className="h-full w-1/6 bg-pink-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs uppercase">Numbers</span>
                      <div className="h-2 w-24 bg-gray-800 rounded-full">
                        <div className="h-full w-1/6 bg-pink-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-300 text-sm">
                    Strategy: <strong className="text-white">QUALITY</strong>. Static, large, limited intervals.
                    <br />
                    <span className="text-pink-400 block mt-2">Consequence: Fertile females are a 'rare resource'.</span>
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Teacher Input" title="Selection Strategies" icon={GitMerge} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-gray-900/50 rounded-3xl border border-gray-700 p-8 relative flex flex-col justify-between hover:bg-gray-800 transition-colors group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Swords size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className={`font-bold text-blue-400 mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Intra-sexual</h3>
                  <span className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">MALE STRATEGY</span>
                  <p className={`text-gray-300 mt-6 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                    Competition <strong>between</strong> males to be the one selected.
                    <br />
                    <br />
                    Winner reproduces and passes on genes like size and aggression. This leads to <strong>dimorphism</strong> (e.g. males being larger).
                    <br />
                    <br />
                    Preference for youth/fertility (e.g. 0.7 Waist-Hip Ratio).
                  </p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-3xl border border-gray-700 p-8 relative flex flex-col justify-between hover:bg-gray-800 transition-colors group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Heart size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className={`font-bold text-pink-400 mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Inter-sexual</h3>
                  <span className="text-xs bg-pink-900/30 text-pink-300 px-3 py-1 rounded-full border border-pink-500/30">FEMALE STRATEGY</span>
                  <p className={`text-gray-300 mt-6 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                    Selection <strong>between</strong> the sexes. Female chooses the best available mate.
                    <br />
                    <br />
                    <strong>Trivers (1972):</strong> High parental investment means wrong choice is costly.
                    <br />
                    <strong>Fisher (1930):</strong> "Sexy Sons Hypothesis" - selecting attractive traits ensures sons inherit them.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Guided Practice" title="Simulation" icon={Users} time="" isPresentation={isPresentation} />
            <MatingGameSimulation isPresentation={isPresentation} />
          </Slide>
        );
      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Teacher Input" title="Research Evidence" icon={Search} time="15 MINS" isPresentation={isPresentation} />
            <EvidenceReveal isPresentation={isPresentation} />
          </Slide>
        );
      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Evaluation" title="Critique & Challenge" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <CritiqueGrid isPresentation={isPresentation} />
          </Slide>
        );
      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Independent Practice" title="Essay Planning" icon={Layers} time="20 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-600 pb-4">
                  <span className="bg-pink-600 text-white font-bold rounded-lg shadow-lg shadow-pink-900/50 px-3 py-1 text-sm">16 MARKS</span>
                  <h3 className="font-bold text-gray-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-pink-500 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss evolutionary explanations for partner preferences."
                </p>
              </div>
              <EssayPlanRevealL1 isPresentation={isPresentation} />
            </div>
          </Slide>
        );
      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 blur-[60px] opacity-20 rounded-full"></div>
                <div className={`bg-gray-900 border border-green-500/30 rounded-full relative z-10 mb-8 flex items-center justify-center ${isPresentation ? 'w-48 h-48' : 'w-32 h-32'}`}>
                  <CheckCircle size={isPresentation ? 100 : 60} className="text-green-500" />
                </div>
              </div>
              <h2 className={`font-bold text-white mb-4 ${isPresentation ? 'text-7xl' : 'text-4xl'}`}>Lesson 01 Complete</h2>
              <p className={`text-gray-400 mb-12 max-w-2xl ${isPresentation ? 'text-4xl' : 'text-xl'}`}>Evolutionary Theory Mastered.</p>
              <div
                className={`bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-between group cursor-not-allowed opacity-75 ${
                  isPresentation ? 'p-10 w-full max-w-3xl' : 'p-6 w-full max-w-lg'
                }`}
              >
                <div className="text-left">
                  <h4 className={`text-pink-500 font-bold uppercase tracking-widest mb-1 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                    Next Lesson
                  </h4>
                  <span className={`font-bold text-gray-400 ${isPresentation ? 'text-4xl' : 'text-xl'}`}>02: Physical Attractiveness</span>
                </div>
                <div className="bg-gray-900 p-3 rounded-full">
                  <ChevronRight className="text-gray-600" size={isPresentation ? 32 : 20} />
                </div>
              </div>
            </div>
          </Slide>
        );
      default:
        return null;
    }
  };

  const renderLesson2 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-cyan-400 blur-[80px] opacity-25 rounded-full animate-pulse"></div>
                <Sparkles size={isPresentation ? 180 : 120} className="text-cyan-200 relative z-10" />
              </div>
              <h1
                className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-rose-200 mb-4 tracking-tighter ${
                  isPresentation ? 'text-8xl' : 'text-6xl'
                }`}
              >
                Physical Attractiveness
              </h1>
              <div className="h-1 w-64 bg-cyan-900 my-6"></div>
              <h2 className="text-slate-400 text-xs tracking-widest uppercase mb-12">Lesson 02: Signals That Stick</h2>
              <button
                onClick={nextSlide}
                className={`bg-gray-900 border border-cyan-400 text-cyan-200 font-bold px-12 py-4 hover:bg-cyan-500 hover:text-gray-900 transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.25)]`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Do Now Task" icon={Clock} time="10 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson2DoNow} isPresentation={isPresentation} />
          </Slide>
        );
      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Teacher Input" title="Evolutionary Roots" icon={Dna} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="relative bg-gray-900/50 rounded-3xl border-l-4 border-cyan-500 p-8 overflow-hidden group hover:bg-gray-900/80 transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Scale size={180} />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className={`font-bold text-cyan-400 mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Symmetry</h3>
                  <span className={`text-xs text-cyan-500 font-mono mb-6 block ${isPresentation ? 'text-lg' : 'text-xs'}`}>
                    Shackelford & Larsen (1997)
                  </span>
                  <div className="flex-grow space-y-6">
                    <div className="bg-cyan-900/20 p-4 rounded-xl border border-cyan-500/20">
                      <p className={`text-cyan-100 font-medium ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        "An honest signal of genetic fitness."
                      </p>
                    </div>
                    <ul className={`space-y-4 text-gray-300 list-disc pl-5 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                      <li>Hard to fake.</li>
                      <li>Indicates a strong immune system during development.</li>
                      <li>Universally preferred across cultures.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative bg-gray-900/50 rounded-3xl border-l-4 border-rose-500 p-8 overflow-hidden group hover:bg-gray-900/80 transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Baby size={180} />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className={`font-bold text-rose-400 mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Neoteny (Baby Face)</h3>
                  <span className={`text-xs text-rose-500 font-mono mb-6 block ${isPresentation ? 'text-lg' : 'text-xs'}`}>
                    Cunningham et al. (1995)
                  </span>
                  <div className="flex-grow space-y-6">
                    <div className="bg-rose-900/20 p-4 rounded-xl border border-rose-500/20">
                      <p className={`text-rose-100 font-medium ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                        "Triggers protective and caring instincts."
                      </p>
                    </div>
                    <div className={`grid grid-cols-2 gap-4 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                      <div className="bg-gray-800 p-3 rounded text-center text-gray-400 border border-gray-700">Large Eyes</div>
                      <div className="bg-gray-800 p-3 rounded text-center text-gray-400 border border-gray-700">Delicate Chin</div>
                      <div className="bg-gray-800 p-3 rounded text-center text-gray-400 border border-gray-700">Small Nose</div>
                      <div className="bg-gray-800 p-3 rounded text-center text-gray-400 border border-gray-700">Full Lips</div>
                    </div>
                    <p className={`text-gray-400 italic mt-4 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                      Essential for females to attract males who will invest resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Teacher Input" title="The Halo Effect" icon={Sparkles} time="10 MINS" isPresentation={isPresentation} />
            <HaloEffectSlider isPresentation={isPresentation} />
          </Slide>
        );
      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Guided Practice" title="Simulation" icon={Users} time="" isPresentation={isPresentation} />
            <MatchingSimulation isPresentation={isPresentation} />
          </Slide>
        );
      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Teacher Input" title="The Matching Hypothesis" icon={Scale} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-10'}`}>
              <div className="flex flex-col h-full bg-blue-900/20 border border-blue-500/30 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
                <h3 className={`font-bold text-blue-400 mb-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>The Compromise</h3>
                <div className="flex-grow flex flex-col justify-center space-y-8">
                  <div className="bg-gray-900/80 p-6 rounded-xl text-center border border-gray-700">
                    <span className="block text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">The Equation</span>
                    <div className={`font-mono text-white ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
                      Desire (10/10)
                      <br />
                      <span className="text-red-400">- Fear of Rejection</span>
                      <br />
                      = <span className="text-green-400">Realistic Choice</span>
                    </div>
                  </div>
                  <p className={`text-gray-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
                    <strong>Walster et al (1966).</strong> We select partners who are similar in attractiveness to ourselves to minimize the risk of being rejected.
                  </p>
                </div>
              </div>
              <div className="flex flex-col h-full bg-pink-900/20 border border-pink-500/30 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-3xl rounded-full pointer-events-none"></div>
                <h3 className={`font-bold text-pink-400 mb-6 flex items-center gap-3 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  <span className="text-2xl bg-pink-900/50 p-2 rounded-lg">🕺</span> The Computer Dance
                </h3>
                <div className="flex-grow flex flex-col justify-center space-y-6">
                  <div className="relative pl-6 border-l-2 border-gray-700 space-y-6">
                    <div>
                      <span className="text-xs text-gray-500 font-bold uppercase block mb-1">Hypothesis</span>
                      <p className="text-gray-300 text-sm">Walster et al. predicted people would like partners who matched their own attractiveness.</p>
                    </div>
                    <div>
                      <span className="text-xs text-pink-500 font-bold uppercase block mb-1">Reality (Findings)</span>
                      <p className="text-white text-lg font-bold">Failed.</p>
                      <p className="text-gray-400 text-sm mt-1">Everyone just wanted the most attractive partner, regardless of their own score.</p>
                    </div>
                    <div>
                      <span className="text-xs text-green-500 font-bold uppercase block mb-1">Later Resolution</span>
                      <p className="text-gray-300 text-sm">
                        <strong>Feingold (1988)</strong> meta-analysis found a strong correlation in <em>real-world</em> couples.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Check" title="Evaluation Matcher" icon={Activity} time="5 MINS" isPresentation={isPresentation} />
            <EvaluationDragDrop isPresentation={isPresentation} />
          </Slide>
        );
      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Independent Practice" title="Essay Planning" icon={Layers} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 lg:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className={`flex items-center gap-3 mb-8 border-b border-gray-600 pb-6`}>
                  <span className={`bg-pink-600 text-white font-bold rounded-lg shadow-lg shadow-pink-900/50 ${isPresentation ? 'px-6 py-3 text-2xl' : 'px-3 py-1 text-sm'}`}>
                    8 MARKS
                  </span>
                  <h3 className={`font-bold text-gray-200 ${isPresentation ? 'text-4xl' : 'text-xl'}`}>Exam Question</h3>
                </div>
                <div className="flex-grow flex flex-col justify-center space-y-8">
                  <p className={`text-white font-serif italic leading-snug border-l-4 border-pink-500 pl-6 ${isPresentation ? 'text-5xl' : 'text-2xl'}`}>
                    "Outline and evaluate one theory of physical attractiveness."
                  </p>
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <h4 className={`text-pink-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                      <Shield size={14} /> Success Criteria
                    </h4>
                    <ul className={`text-gray-400 space-y-2 list-disc pl-4 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                      <li>
                        <strong className="text-gray-200">AO1 (3 Marks):</strong> Accurate description of concepts (Halo Effect OR Matching Hypothesis).
                      </li>
                      <li>
                        <strong className="text-gray-200">AO3 (5 Marks):</strong> Effective use of research evidence (Palmer, Towhey, etc) to support or challenge.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <EssayPlanRevealL2 isPresentation={isPresentation} />
            </div>
          </Slide>
        );
      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 blur-[60px] opacity-20 rounded-full"></div>
                <div className={`bg-gray-900 border border-green-500/30 rounded-full relative z-10 mb-8 flex items-center justify-center ${isPresentation ? 'w-48 h-48' : 'w-32 h-32'}`}>
                  <CheckCircle size={isPresentation ? 100 : 60} className="text-green-500" />
                </div>
              </div>
              <h2 className={`font-bold text-white mb-4 ${isPresentation ? 'text-7xl' : 'text-4xl'}`}>Lesson 02 Complete</h2>
              <p className={`text-gray-400 mb-12 max-w-2xl ${isPresentation ? 'text-4xl' : 'text-xl'}`}>
                You have mastered the evolutionary and cognitive aspects of Physical Attractiveness.
              </p>
              <div
                className={`bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-between group cursor-not-allowed opacity-75 ${
                  isPresentation ? 'p-10 w-full max-w-3xl' : 'p-6 w-full max-w-lg'
                }`}
              >
                <div className="text-left">
                  <h4 className={`text-pink-500 font-bold uppercase tracking-widest mb-1 ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                    Next Lesson
                  </h4>
                  <span className={`font-bold text-gray-400 ${isPresentation ? 'text-4xl' : 'text-xl'}`}>03: Self Disclosure</span>
                </div>
                <div className="bg-gray-900 p-3 rounded-full">
                  <ChevronRight className="text-gray-600" size={isPresentation ? 32 : 20} />
                </div>
              </div>
            </div>
          </Slide>
        );
      default:
        return null;
    }
  };

  const renderLesson3 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-violet-600 blur-[80px] opacity-30 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Lock size={isPresentation ? 100 : 80} className="text-violet-400 animate-bounce" style={{ animationDelay: '0s' }} />
                  <ArrowRightLeft size={isPresentation ? 100 : 80} className="text-purple-400 animate-pulse" />
                  <Unlock size={isPresentation ? 100 : 80} className="text-violet-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
              <h1 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 mb-4 tracking-tighter ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                Self Disclosure
              </h1>
              <div className="h-1 w-64 bg-gray-800 my-6"></div>
              <h2 className="text-gray-400 text-xs tracking-widest uppercase mb-12">Lesson 03: Social Penetration Theory</h2>
              <button
                onClick={nextSlide}
                className={`bg-gray-900 border border-violet-500 text-violet-400 font-bold px-12 py-4 hover:bg-violet-600 hover:text-white transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.2)]`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Do Now Task" icon={Brain} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson3DoNow} isPresentation={isPresentation} />
          </Slide>
        );
      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Social Penetration Theory" icon={Layers} time="10 MINS" isPresentation={isPresentation} />
            <div className="flex flex-col h-full">
              <div className="mb-4 text-center">
                <p className="text-gray-400">
                  <strong>Altman & Taylor (1973):</strong> Relationships develop through gradual disclosure of inner self.
                </p>
              </div>
              <div className="flex-grow bg-gray-900/30 rounded-3xl border border-gray-800 backdrop-blur-sm p-4">
                <OnionModel isPresentation={isPresentation} />
              </div>
            </div>
          </Slide>
        );
      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Reciprocity" icon={ArrowRightLeft} time="05 MINS" isPresentation={isPresentation} />
            <ReciprocityCycle isPresentation={isPresentation} />
          </Slide>
        );
      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Briefing" icon={MessageCircle} time="02 MINS" isPresentation={isPresentation} />
            <div className="flex flex-col items-center justify-center h-full text-center max-w-2xl mx-auto">
              <div className={`rounded-full mb-8 animate-pulse bg-pink-900/20 ${isPresentation ? 'p-12' : 'p-6'}`}>
                <MessageSquare size={isPresentation ? 150 : 80} className="text-pink-400" />
              </div>
              <h3 className={`font-bold text-white mb-6 ${isPresentation ? 'text-7xl' : 'text-4xl'}`}>The First Date</h3>
              <p className={`text-gray-300 mb-8 leading-relaxed ${isPresentation ? 'text-4xl' : 'text-xl'}`}>
                Navigate a first date conversation. Balance <strong>Breadth</strong> (topics) and <strong>Depth</strong> (intimacy).
                <br />
                <br />
                <span className="text-pink-400">Warning:</span> Revealing too much too soon violates norms!
              </p>
              <button
                onClick={nextSlide}
                className={`bg-pink-600 text-white rounded-full font-bold hover:bg-pink-500 transition-all shadow-lg ${
                  isPresentation ? 'px-16 py-8 text-3xl' : 'px-10 py-4 text-lg'
                }`}
              >
                Start Date
              </button>
            </div>
          </Slide>
        );
      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="The Disclosure Loop" icon={MessageCircle} time="15 MINS" isPresentation={isPresentation} />
            <FirstDateSim isPresentation={isPresentation} />
          </Slide>
        );
      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Key Studies" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              <div className="bg-gray-900/50 border border-violet-500/30 p-8 rounded-2xl hover:border-violet-500 transition-all group cursor-default">
                <h3 className="text-violet-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <Users size={24} /> Sprecher & Hendrick (2004)
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="bg-black/30 p-4 rounded border-l-2 border-violet-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Method</strong>
                    Studied heterosexual dating couples using correlations.
                  </div>
                  <div className="bg-black/30 p-4 rounded border-l-2 border-violet-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    Strong correlation between satisfaction and self-disclosure (both own and partner's).
                  </div>
                  <p className="text-sm italic text-violet-300/80 mt-4">
                    "Men and women who disclosed believed their partners did too, and were more committed."
                  </p>
                </div>
              </div>
              <div className="bg-gray-900/50 border border-purple-500/30 p-8 rounded-2xl hover:border-purple-500 transition-all group cursor-default">
                <h3 className="text-purple-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <Globe size={24} /> Hass & Stafford (1998)
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="bg-black/30 p-4 rounded border-l-2 border-purple-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Real World App</strong>
                    Studied gay and lesbian relationships.
                  </div>
                  <div className="bg-black/30 p-4 rounded border-l-2 border-purple-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    57% reported honest self-disclosure was the main way they maintained and deepened their relationships.
                  </div>
                  <p className="text-sm italic text-purple-300/80 mt-4">"Demonstrates the value of the theory in relationship counselling."</p>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={Scale} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="bg-red-900/10 border border-red-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-900/30 p-2 rounded-lg">
                    <Globe className="text-red-400" size={24} />
                  </div>
                  <h3 className="text-red-400 font-bold text-lg">Cultural Bias (Tang et al. 2013)</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The theory is <strong className="text-white">Ethnocentric</strong>. Tang et al. found that men/women in the USA (Individualist) disclose significantly more sexual thoughts/feelings than in China (Collectivist).
                  <br />
                  <br />
                  The theory fails to account for cultural norms regarding privacy and may not apply globally.
                </p>
              </div>
              <div className="bg-yellow-900/10 border border-yellow-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-900/30 p-2 rounded-lg">
                    <Activity className="text-yellow-400" size={24} />
                  </div>
                  <h3 className="text-yellow-400 font-bold text-lg">Correlation vs Causation</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Much research (e.g. Sprecher & Hendrick) is correlational.
                  <br />
                  <br />
                  Does disclosure cause satisfaction, or does being satisfied make you disclose more? We cannot establish the direction of causality solely through these studies.
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 bg-blue-900/10 border border-blue-500/30 p-6 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="text-blue-400 font-bold text-lg mb-2">Reductionism?</h3>
                  <p className="text-gray-400 text-sm">Does the Onion model simplify complex human interaction too much?</p>
                </div>
                <div className="text-right max-w-md">
                  <p className="text-gray-300 text-xs italic">
                    "Breaking relationships down to 'layers' ignores other factors like physical attraction, similarity, and shared history."
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-600 pb-4">
                  <span className="bg-pink-600 text-white font-bold rounded-lg shadow-lg shadow-pink-900/50 px-3 py-1 text-sm">16 MARKS</span>
                  <h3 className="font-bold text-gray-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-pink-500 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss research into self-disclosure as a factor affecting attraction."
                </p>
              </div>
              <EssayPlanRevealL3 isPresentation={isPresentation} />
            </div>
          </Slide>
        );
      default:
        return null;
    }
  };

  const renderLesson4 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Filter size={isPresentation ? 100 : 80} className="text-cyan-400 animate-bounce" style={{ animationDelay: '0s' }} />
                </div>
              </div>
              <h1 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 mb-4 tracking-tighter ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                Filter Theory
              </h1>
              <div className="h-1 w-64 bg-slate-800 my-6"></div>
              <h2 className="text-slate-400 text-xs tracking-widest uppercase mb-12">Lesson 04: Factors Affecting Attraction</h2>
              <button
                onClick={nextSlide}
                className={`bg-slate-900 border border-cyan-500 text-cyan-400 font-bold px-12 py-4 hover:bg-cyan-600 hover:text-white transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.2)]`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Do Now Task" icon={Brain} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson4DoNow} isPresentation={isPresentation} />
          </Slide>
        );
      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The Filter Model" icon={Filter} time="15 MINS" isPresentation={isPresentation} />
            <FilterFunnel isPresentation={isPresentation} />
          </Slide>
        );
      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Matchmaker Engine" icon={Database} time="15 MINS" isPresentation={isPresentation} />
            <MatchmakerSim isPresentation={isPresentation} />
          </Slide>
        );
      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Key Studies" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              <div className="bg-slate-900/50 border border-green-500/30 p-8 rounded-2xl hover:border-green-500 transition-all group cursor-default">
                <h3 className="text-green-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <Users size={24} /> Kerckhoff & Davis (1962)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-black/30 p-4 rounded border-l-2 border-green-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Method</strong>
                    Longitudinal study of student couples (short term vs long term).
                  </div>
                  <div className="bg-black/30 p-4 rounded border-l-2 border-green-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Short-term (&lt;18m): Similarity most important.</li>
                      <li>Long-term (&gt;18m): Complementarity most important.</li>
                    </ul>
                  </div>
                  <p className="text-sm italic text-green-300/80 mt-4">"Supports the stage-based nature of the theory."</p>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-red-500/30 p-8 rounded-2xl hover:border-red-500 transition-all group cursor-default">
                <h3 className="text-red-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <AlertTriangle size={24} /> Levinger (1974)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-black/30 p-4 rounded border-l-2 border-red-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Replication Failure</strong>
                    Many studies failed to replicate original findings.
                  </div>
                  <div className="bg-black/30 p-4 rounded border-l-2 border-red-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Reasoning</strong>
                    Social changes over time and difficulty defining relationship "depth" purely by length of time.
                  </div>
                  <p className="text-sm italic text-red-300/80 mt-4">"Highlights lack of temporal validity."</p>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={Scale} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="bg-blue-900/10 border border-blue-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-2 rounded-lg">
                    <Globe className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-blue-400 font-bold text-lg">Temporal Validity (Online Dating)</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The rise of online dating has drastically reduced the importance of the <strong className="text-white">Social Demography</strong> filter.
                  <br />
                  <br />
                  We can now easily meet partners outside our geographical and social limits, making the first stage of the theory less relevant today.
                </p>
              </div>
              <div className="bg-yellow-900/10 border border-yellow-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-900/30 p-2 rounded-lg">
                    <Activity className="text-yellow-400" size={24} />
                  </div>
                  <h3 className="text-yellow-400 font-bold text-lg">Direction of Causality</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong>Anderson et al (2003):</strong> "Attitude Alignment". We don't select for similarity; we become similar over time (Emotional Convergence).
                  <br />
                  <br />
                  This suggests similarity is an <strong>effect</strong> of attraction, not necessarily a <strong>cause</strong>.
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 bg-slate-800/50 border border-slate-600 p-6 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="text-slate-200 font-bold text-lg mb-2">Is Complementarity Vital?</h3>
                  <p className="text-slate-400 text-sm">Markey & Markey (2013) found lesbian couples of equal dominance were most satisfied.</p>
                </div>
                <div className="text-right max-w-md">
                  <p className="text-slate-300 text-xs italic">"Suggests similarity might be more important than complementarity even in long term relationships."</p>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-600 pb-4">
                  <span className="bg-cyan-600 text-white font-bold rounded-lg shadow-lg shadow-cyan-900/50 px-3 py-1 text-sm">16 MARKS</span>
                  <h3 className="font-bold text-slate-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-cyan-500 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss Filter Theory as an explanation for romantic relationships."
                </p>
              </div>
              <EssayPlanRevealL4 isPresentation={isPresentation} />
            </div>
          </Slide>
        );
      default:
        return null;
    }
  };

  const renderLesson5 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-emerald-500 blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <TrendingUp size={isPresentation ? 100 : 80} className="text-emerald-400 animate-pulse-gold" style={{ animationDelay: '0s' }} />
                  <DollarSign size={isPresentation ? 100 : 80} className="text-green-300" />
                </div>
              </div>
              <h1 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-yellow-200 mb-4 tracking-tighter ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                Social Exchange Theory
              </h1>
              <div className="h-1 w-64 bg-emerald-800 my-6"></div>
              <h2 className="text-emerald-400 text-xs tracking-widest uppercase mb-12">Lesson 05: Economic Theories of Relationships</h2>
              <button
                onClick={nextSlide}
                className={`bg-emerald-950 border border-emerald-500 text-emerald-400 font-bold px-12 py-4 hover:bg-emerald-900 hover:text-white transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.2)]`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Do Now" icon={Brain} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson5DoNow} isPresentation={isPresentation} />
          </Slide>
        );
      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The Minimax Principle" icon={TrendingUp} time="12 MINS" isPresentation={isPresentation} />
            <StockMarketLedger isPresentation={isPresentation} />
          </Slide>
        );
      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Model" title="Comparison Levels" icon={LineChart} time="12 MINS" isPresentation={isPresentation} />
            <InteractiveThresholdGraph isPresentation={isPresentation} />
          </Slide>
        );
      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Simulation" title="Relationship Accountant" icon={Calculator} time="12 MINS" isPresentation={isPresentation} />
            <RelationshipAccountantSim isPresentation={isPresentation} />
          </Slide>
        );
      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evidence" title="Research Support" icon={Search} time="08 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 h-full ${isPresentation ? 'text-xl' : 'text-base'}`}>
              <div className="bg-emerald-900/20 border border-emerald-600/50 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Microscope className="text-emerald-400" size={24} />
                  <h3 className="text-emerald-300 font-bold text-lg">Kurdek (1995)</h3>
                </div>
                <p className="text-emerald-100/90 leading-relaxed">
                  Surveyed gay, lesbian, and heterosexual couples. Those with <strong>more rewards and fewer costs</strong> were most committed.
                  <br />
                  <span className="text-emerald-400 font-semibold">Strength:</span> Cross-orientation sample suggests SET has broad validity.
                </p>
              </div>
              <div className="bg-blue-900/20 border border-blue-600/50 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-300" size={24} />
                  <h3 className="text-blue-200 font-bold text-lg">Rusbult & Martz (1995)</h3>
                </div>
                <p className="text-blue-100/90 leading-relaxed">
                  Studied women in refuges. Found <strong>high costs</strong> (abuse) but <strong>poor alternatives</strong> (low CLalt) predicted staying, supporting dependency logic.
                  <br />
                  <span className="text-blue-300 font-semibold">Strength:</span> Real-world context beyond student samples.
                </p>
              </div>
            </div>
          </Slide>
        );
      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={Scale} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* Equity Challenge */}
              <div className="bg-emerald-900/30 border border-emerald-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-900/50 p-2 rounded-lg">
                    <Scale className="text-emerald-400" size={32} />
                  </div>
                  <h3 className="text-emerald-400 font-bold text-2xl">Ignorance of Equity</h3>
                </div>
                <p className="text-emerald-200 text-lg leading-relaxed">
                  SET assumes people are essentially selfish (Minimax). However, research shows <strong>Equity</strong> (fairness) is often more important.
                  <br />
                  <br />
                  Partners who "Over-benefit" (high profit) often feel guilty, not happy. SET fails to explain this altruistic aspect of relationships.
                </p>
              </div>

              {/* Artificial Research */}
              <div className="bg-emerald-900/30 border border-yellow-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-900/50 p-2 rounded-lg">
                    <Activity className="text-yellow-400" size={32} />
                  </div>
                  <h3 className="text-yellow-400 font-bold text-2xl">Artificial Research</h3>
                </div>
                <p className="text-emerald-200 text-lg leading-relaxed">
                  Much early research utilized <strong>Game Theory</strong> scenarios (e.g., Prisoner's Dilemma) involving strangers interacting for short periods.
                  <br />
                  <br />
                  These studies lack <strong>Mundane Realism</strong> and do not reflect the complexity and long-term nature of genuine romantic relationships.
                </p>
              </div>

              {/* Reductionism */}
              <div className="col-span-1 md:col-span-2 bg-emerald-900/30 border border-blue-500/30 p-6 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="text-blue-400 font-bold text-2xl mb-2">Reductionism</h3>
                  <p className="text-emerald-400 text-lg">Can love really be reduced to a balance sheet?</p>
                </div>
                <div className="text-right max-w-md">
                  <p className="text-emerald-300 text-base italic">
                    "Reducing complex human emotions to economic transactions ignores the role of emotion, biology, and shared history."
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        );
      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="12 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-600 pb-4">
                  <span className="bg-emerald-600 text-white font-bold rounded-lg shadow-lg shadow-emerald-900/50 px-3 py-1 text-sm">16 MARKS</span>
                  <h3 className="font-bold text-gray-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-emerald-500 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss Social Exchange Theory as an explanation for romantic relationships."
                </p>
              </div>
              <EssayPlanRevealL5 isPresentation={isPresentation} />
            </div>
          </Slide>
        );
      default:
        return null;
    }
  };

  const renderLesson6 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-amber-500 blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Scale size={isPresentation ? 100 : 80} className="text-amber-400 animate-balance" />
                </div>
              </div>
              <h1
                className={`font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 mb-4 tracking-tighter ${
                  isPresentation ? 'text-8xl' : 'text-6xl'
                }`}
              >
                Equity Theory
              </h1>
              <div className="h-1 w-64 bg-amber-800 my-6"></div>
              <h2 className="text-slate-400 text-xs tracking-widest uppercase mb-12">Lesson 06: Economic Theories of Relationships</h2>
              <button
                onClick={nextSlide}
                className={`bg-slate-900 border border-amber-500 text-amber-400 font-bold px-12 py-4 hover:bg-amber-900 hover:text-white transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.2)]`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Do Now Task" icon={Brain} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson6DoNow} isPresentation={isPresentation} />
          </Slide>
        );

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The Scales of Justice" icon={Scale} time="15 MINS" isPresentation={isPresentation} />
            <ScalesOfJustice isPresentation={isPresentation} />
          </Slide>
        );

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Restoring Equity" icon={RefreshCw} time="10 MINS" isPresentation={isPresentation} />
            <RestorationDiagram isPresentation={isPresentation} />
          </Slide>
        );

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="The Mediator" icon={Gavel} time="15 MINS" isPresentation={isPresentation} />
            <TheMediator isPresentation={isPresentation} />
          </Slide>
        );

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Key Studies" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              <div className="bg-slate-900/50 border border-green-500/30 p-8 rounded-2xl hover:border-green-500 transition-all group cursor-default">
                <h3 className="text-green-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <Users size={24} /> Utne et al. (1984)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-900/50 p-4 rounded border-l-2 border-green-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Method</strong>
                    Surveyed 118 recently married couples using self-report scales.
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded border-l-2 border-green-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    Couples who considered their relationship <strong>equitable</strong> were more satisfied than those who were over- or under-benefitting.
                  </div>
                  <p className="text-sm italic text-green-300/80 mt-4">"Confirms equity is a key factor in satisfaction."</p>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-blue-500/30 p-8 rounded-2xl hover:border-blue-500 transition-all group cursor-default">
                <h3 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <ScrollText size={24} /> Van Yperen & Buunk (1990)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-900/50 p-4 rounded border-l-2 border-blue-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    Longitudinal study. People who felt their relationship was equitable at stage 1 were most satisfied 1 year later.
                  </div>
                  <p className="text-sm italic text-blue-300/80 mt-4">"Supports predictive validity of the theory."</p>
                </div>
              </div>
            </div>
          </Slide>
        );

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={Scale} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="bg-red-900/10 border border-red-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-900/30 p-2 rounded-lg">
                    <Globe className="text-red-400" size={32} />
                  </div>
                  <h3 className="text-red-400 font-bold text-2xl">Cultural Bias</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  <strong>Aumer-Ryan et al. (2007):</strong> The theory is culturally biased.
                  <br />
                  <br />
                  <strong>Individualist (US):</strong> Satisfied when relationship is equitable.
                  <br />
                  <strong>Collectivist (Jamaica):</strong> Satisfied when <em>over-benefitting</em>.
                  <br />
                  This suggests Equity Theory is an <strong>imposed etic</strong>.
                </p>
              </div>

              <div className="bg-amber-900/10 border border-amber-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-900/30 p-2 rounded-lg">
                    <Users className="text-amber-400" size={32} />
                  </div>
                  <h3 className="text-amber-400 font-bold text-2xl">Individual Differences</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  <strong>Huseman et al. (1987):</strong> Not everyone is sensitive to equity.
                  <br />
                  <br />
                  1. <strong>Benevolents:</strong> Tolerant of under-reward.
                  <br />
                  2. <strong>Entitleds:</strong> Believe they deserve to over-benefit without guilt.
                  <br />
                  This contradicts the claim that inequity <em>universally</em> causes dissatisfaction.
                </p>
              </div>

              <div className="col-span-1 md:col-span-2 bg-slate-800/50 border border-slate-600 p-6 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="text-slate-200 font-bold text-2xl mb-2">Contradictory Evidence</h3>
                  <p className="text-slate-400 text-lg">Berg & McQuinn (1986) found equity did not increase over time.</p>
                </div>
                <div className="text-right max-w-md">
                  <p className="text-slate-300 text-base italic">"Self-disclosure was a far more important factor in relationship survival than equity."</p>
                </div>
              </div>
            </div>
          </Slide>
        );

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-600 pb-4">
                  <span className="bg-amber-600 text-white font-bold rounded-lg shadow-lg shadow-amber-900/50 px-3 py-1 text-sm">8 MARKS</span>
                  <h3 className="font-bold text-slate-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-amber-500 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Evaluate Equity Theory as an explanation for romantic relationships."
                </p>
              </div>
              <EssayPlanRevealL6 isPresentation={isPresentation} />
            </div>
          </Slide>
        );

      default:
        return null;
    }
  };

  const renderLesson7 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-20 rounded-full animate-pulse-blue"></div>
                <div className="relative z-10 flex gap-4">
                  <Ruler size={isPresentation ? 100 : 80} className="text-blue-400" />
                </div>
              </div>
              <h1
                className={`font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-400 to-blue-600 mb-4 tracking-tighter ${
                  isPresentation ? 'text-8xl' : 'text-6xl'
                }`}
              >
                Rusbult's Investment Model
              </h1>
              <div className="h-1 w-64 bg-blue-800 my-6"></div>
              <h2 className="text-slate-400 text-xs tracking-widest uppercase mb-12">Lesson 07: The Investment Model of Commitment</h2>
              <button
                onClick={nextSlide}
                className={`bg-slate-900 border border-blue-500 text-blue-400 font-bold px-12 py-4 hover:bg-blue-900 hover:text-white transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.2)]`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Do Now Task" icon={Brain} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson7DoNow} isPresentation={isPresentation} />
          </Slide>
        );

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The Commitment Formula" icon={Ruler} time="15 MINS" isPresentation={isPresentation} />
            <FormulaBuilder isPresentation={isPresentation} />
          </Slide>
        );

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Maintenance Mechanisms" icon={Wrench} time="12 MINS" isPresentation={isPresentation} />
            <MaintenanceToolbox isPresentation={isPresentation} />
          </Slide>
        );

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Commitment Architect" icon={Construction} time="15 MINS" isPresentation={isPresentation} />
            <CommitmentArchitectSim isPresentation={isPresentation} />
          </Slide>
        );

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Key Studies" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              <div className="bg-slate-900/50 border border-blue-500/30 p-8 rounded-2xl hover:border-blue-500 transition-all group cursor-default">
                <h3 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <Users size={24} /> Le & Agnew (2003)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-900/50 p-4 rounded border-l-2 border-blue-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Method</strong>
                    Meta-analysis of 52 relationship studies involving 11,000+ participants across diverse demographics.
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded border-l-2 border-blue-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    All three variables (Satisfaction, CLalt, Investment) significantly predicted Commitment across gender, culture, and sexual orientation. <strong>Universal validity</strong>.
                  </div>
                  <p className="text-sm italic text-blue-300/80 mt-4">"Strongest empirical support for the entire model."</p>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-cyan-500/30 p-8 rounded-2xl hover:border-cyan-500 transition-all group cursor-default">
                <h3 className="text-cyan-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <Heart size={24} /> Rusbult & Martz (1995)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-900/50 p-4 rounded border-l-2 border-cyan-500">
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    Women in shelters most likely to return to abusive partners had the greatest <strong>investments</strong> and <strong>fewest alternatives</strong>. Explains why people stay despite <em>low satisfaction</em>.
                  </div>
                  <p className="text-sm italic text-cyan-300/80 mt-4">"Shows how investment size can override satisfaction."</p>
                </div>
              </div>
            </div>
          </Slide>
        );

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={Anchor} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              <div className="bg-red-900/10 border border-red-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-900/30 p-2 rounded-lg">
                    <AlertCircle className="text-red-400" size={isPresentation ? 48 : 32} />
                  </div>
                  <h3 className={`text-red-400 font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Oversimplification</h3>
                </div>
                <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                  <strong>Goodfriend & Agnew (2008):</strong> Model ignores investment in <strong>future plans</strong>. Partners may stay to see shared goals realized, not just because of past costs.
                </p>
              </div>

              <div className="bg-yellow-900/10 border border-yellow-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-900/30 p-2 rounded-lg">
                    <TrendingUp className="text-yellow-400" size={isPresentation ? 48 : 32} />
                  </div>
                  <h3 className={`text-yellow-400 font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Correlational Nature</h3>
                </div>
                <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                  Most studies are <strong>correlational</strong>. We don't know if high investment <em>causes</em> commitment or if commitment leads people to perceive investments as higher.
                </p>
              </div>

              <div className="bg-blue-900/10 border border-blue-500/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-2 rounded-lg">
                    <CheckCircle className="text-blue-400" size={isPresentation ? 48 : 32} />
                  </div>
                  <h3 className={`text-blue-400 font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Self-Perception is Key</h3>
                </div>
                <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                  <strong>Strength:</strong> The model uses <em>subjective perception</em> of investment. It's the partner's <strong>belief</strong> that matters for commitment, not objective reality.
                </p>
              </div>
            </div>
          </Slide>
        );

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-600 pb-4">
                  <span className="bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-900/50 px-3 py-1 text-sm">8 MARKS</span>
                  <h3 className="font-bold text-slate-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-blue-500 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Evaluate Rusbult's Investment Model of relationships."
                </p>
              </div>
              <EssayPlanRevealL7 isPresentation={isPresentation} />
            </div>
          </Slide>
        );

      default:
        return null;
    }
  };

  const renderLesson8 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-rose-500 blur-[80px] opacity-20 rounded-full animate-pulse-red"></div>
                <div className="relative z-10 flex gap-4">
                  <HeartCrack size={isPresentation ? 100 : 80} className="text-rose-500 animate-pulse-red" />
                </div>
              </div>
              <h1 className={`font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-slate-300 to-rose-200 mb-4 tracking-wider ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                Duck's Phase Model
              </h1>
              <div className="h-1 w-64 bg-slate-800 my-6"></div>
              <h2 className="text-slate-400 text-xs tracking-widest uppercase mb-12">Lesson 08: Relationship Breakdown</h2>
              <button
                onClick={nextSlide}
                className={`bg-slate-900 border border-rose-500 text-rose-400 font-bold px-12 py-4 rounded-xl hover:bg-rose-900 hover:text-white transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} shadow-[0_0_20px_rgba(225,29,72,0.3)]`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Do Now Task" icon={Brain} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson8DoNow} isPresentation={isPresentation} />
          </Slide>
        );

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The Road to Ruin" icon={HeartCrack} time="15 MINS" isPresentation={isPresentation} />
            <RoadToRuin isPresentation={isPresentation} />
          </Slide>
        );

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The 2006 Update" icon={GitMerge} time="10 MINS" isPresentation={isPresentation} />
            <RollieDuckUpdate isPresentation={isPresentation} />
          </Slide>
        );

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Breakup Navigator" icon={Activity} time="15 MINS" isPresentation={isPresentation} />
            <BreakupNavigatorSim isPresentation={isPresentation} />
          </Slide>
        );

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evaluation" title="Critique & Bias" icon={Globe} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              {/* Methodological */}
              <div className="bg-slate-900/80 border border-slate-700 p-8 rounded-xl relative hover:border-rose-500 transition-all group">
                <div className="absolute top-4 right-4 text-slate-700 group-hover:text-rose-500 transition-colors">
                  <Search size={32} />
                </div>
                <h3 className={`text-rose-400 font-bold mb-4 font-serif ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Methodological Issues</h3>
                <div className={`space-y-4 ${isPresentation ? 'text-lg' : ''}`}>
                  <p className="text-slate-300">
                    Most research is <strong>retrospective</strong>. Participants give their account *after* the relationship has ended.
                  </p>
                  <p className="text-slate-300">
                    This data is unreliable because memories are distorted by the <strong>Grave-dressing</strong> phase itself—people create a biased narrative to look good!
                  </p>
                  <p className="text-slate-300">
                    <em>Ethical Issue:</em> Studying the early phases (Intra-psychic) is risky; researcher involvement could hasten the breakup.
                  </p>
                </div>
              </div>

              {/* Cultural */}
              <div className="bg-slate-900/80 border border-slate-700 p-8 rounded-xl relative hover:border-rose-500 transition-all group">
                <div className="absolute top-4 right-4 text-slate-700 group-hover:text-rose-500 transition-colors">
                  <Globe size={32} />
                </div>
                <h3 className={`text-rose-400 font-bold mb-4 font-serif ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Cultural Bias</h3>
                <div className={`space-y-4 ${isPresentation ? 'text-lg' : ''}`}>
                  <p className="text-slate-300">
                    <strong>Moghaddam et al (1993):</strong> The model is biased towards <strong>Individualist</strong> cultures (e.g. USA) where divorce is voluntary and frequent.
                  </p>
                  <p className="text-slate-300">
                    In <strong>Collectivist</strong> cultures, relationships are often obligatory (arranged). The 'Social Phase' involves family much earlier and the consequences of 'Grave-dressing' are more severe.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        );

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Real World Application" icon={Target} time="10 MINS" isPresentation={isPresentation} />
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <div className="text-center max-w-2xl">
                <h3 className={`font-serif text-white mb-4 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Counselling Strategies</h3>
                <p className={`text-slate-300 ${isPresentation ? 'text-xl' : ''}`}>
                  The model has positive application. By identifying which phase a couple is in, a therapist can suggest specific repair strategies.
                </p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl ${isPresentation ? 'gap-6' : ''}`}>
                <div className={`bg-slate-800 p-6 rounded-lg border-l-4 border-blue-500 ${isPresentation ? 'p-8' : ''}`}>
                  <span className={`text-blue-400 font-bold uppercase text-xs mb-1 block ${isPresentation ? 'text-sm' : ''}`}>Intra-psychic Phase</span>
                  <p className={`text-white text-sm ${isPresentation ? 'text-base' : ''}`}>Focus on re-evaluating the partner positively. "Is my dissatisfaction justified?"</p>
                </div>
                <div className={`bg-slate-800 p-6 rounded-lg border-l-4 border-purple-500 ${isPresentation ? 'p-8' : ''}`}>
                  <span className={`text-purple-400 font-bold uppercase text-xs mb-1 block ${isPresentation ? 'text-sm' : ''}`}>Dyadic Phase</span>
                  <p className={`text-white text-sm ${isPresentation ? 'text-base' : ''}`}>Focus on communication skills. Improve the way dissatisfaction is expressed.</p>
                </div>
                <div className={`bg-slate-800 p-6 rounded-lg border-l-4 border-yellow-500 ${isPresentation ? 'p-8' : ''}`}>
                  <span className={`text-yellow-400 font-bold uppercase text-xs mb-1 block ${isPresentation ? 'text-sm' : ''}`}>Social Phase</span>
                  <p className={`text-white text-sm ${isPresentation ? 'text-base' : ''}`}>Avoid bad-mouthing partner to friends. Once factions form, repair is much harder.</p>
                </div>
                <div className={`bg-slate-800 p-6 rounded-lg border-l-4 border-rose-500 ${isPresentation ? 'p-8' : ''}`}>
                  <span className={`text-rose-400 font-bold uppercase text-xs mb-1 block ${isPresentation ? 'text-sm' : ''}`}>Grave-dressing Phase</span>
                  <p className={`text-white text-sm ${isPresentation ? 'text-base' : ''}`}>Focus on 'moving on'. Creating a narrative that doesn't damage future relationship chances.</p>
                </div>
              </div>
            </div>
          </Slide>
        );

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-slate-900/80 border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center rounded-2xl">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                  <span className="bg-rose-600 text-white font-bold px-3 py-1 text-sm rounded">16 MARKS</span>
                  <h3 className="font-bold text-slate-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-rose-500 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss Duck's Phase Model of relationship breakdown."
                </p>
              </div>
              <EssayPlanRevealL8 isPresentation={isPresentation} />
            </div>
          </Slide>
        );

      default:
        return null;
    }
  };

  const renderLesson9 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <VirtualSlide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-green-500 blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Wifi size={isPresentation ? 100 : 80} className="text-green-500 animate-pulse" />
                  <Heart size={isPresentation ? 100 : 80} className="text-white animate-glitch" />
                </div>
              </div>
              <h1 className={`font-mono font-bold text-white mb-4 tracking-widest ${isPresentation ? 'text-8xl' : 'text-6xl'} text-neon`}>
                Virtual Relationships
              </h1>
              <div className="h-1 w-64 bg-green-700 my-6"></div>
              <h2 className={`text-green-400 text-xs tracking-[0.5em] uppercase mb-12`}>Lesson 09: Social Media &amp; CMC</h2>
              <button
                onClick={nextSlide}
                className={`bg-black border border-green-500 text-green-500 font-mono font-bold px-12 py-4 hover:bg-green-500 hover:text-black transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } uppercase`}
              >
                Initialize
              </button>
            </div>
          </VirtualSlide>
        );

      case 1:
        return (
          <VirtualSlide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="System Check" icon={Terminal} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuizL9 questions={lesson9DoNow} isPresentation={isPresentation} />
          </VirtualSlide>
        );

      case 2:
        return (
          <VirtualSlide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Theoretical Conflict" icon={Cpu} time="15 MINS" isPresentation={isPresentation} />
            <TheoryConflictL9 isPresentation={isPresentation} />
          </VirtualSlide>
        );

      case 3:
        return (
          <VirtualSlide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Absence of Gating" icon={Fingerprint} time="10 MINS" isPresentation={isPresentation} />
            <GatingVisualL9 isPresentation={isPresentation} />
          </VirtualSlide>
        );

      case 4:
        return (
          <VirtualSlide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Avatar Architect" icon={User} time="15 MINS" isPresentation={isPresentation} />
            <AvatarArchitectSimL9 isPresentation={isPresentation} />
          </VirtualSlide>
        );

      case 5:
        return (
          <VirtualSlide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Research Data" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              <div className="bg-black border border-green-900 p-8 hover:border-green-500 transition-all group cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Globe size={64} className="text-green-500" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4 font-mono uppercase border-b border-green-900 pb-2">McKenna &amp; Bargh (2000)</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-green-900/10 p-2 border-l-2 border-green-500">
                    <strong className="text-green-400 text-xs block">Method</strong>
                    <span className="text-sm">Studied CMC use by lonely and socially anxious people.</span>
                  </div>
                  <div className="bg-green-900/10 p-2 border-l-2 border-green-500">
                    <strong className="text-green-400 text-xs block">Findings</strong>
                    <span className="text-sm">They expressed their 'true selves' more online. <strong>70%</strong> of relationships survived &gt;2 years (higher than offline).</span>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-green-900 p-8 hover:border-green-500 transition-all group cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <MessageSquare size={64} className="text-green-500" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4 font-mono uppercase border-b border-green-900 pb-2">Walther &amp; Tidwell (1995)</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-green-900/10 p-2 border-l-2 border-green-500">
                    <strong className="text-green-400 text-xs block">Challenge</strong>
                    <span className="text-sm">Refuted Reduced Cues Theory. Cues are not absent, just different.</span>
                  </div>
                  <div className="bg-green-900/10 p-2 border-l-2 border-green-500">
                    <strong className="text-green-400 text-xs block">Evidence</strong>
                    <span className="text-sm">People use style, timing (chronemics), and emojis to convey tone effectively.</span>
                  </div>
                </div>
              </div>
            </div>
          </VirtualSlide>
        );

      case 6:
        return (
          <VirtualSlide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="System Analysis" icon={Activity} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="bg-blue-900/10 border border-blue-500/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-2">
                    <Layers className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-blue-400 font-bold text-2xl font-mono">Multimodal Relationships</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  <strong>Walther (2011):</strong> Theories that treat CMC and FtF as separate worlds are reductionist.
                  <br />
                  <br />
                  Modern relationships are multimodal—we interact both online and offline constantly. Online interaction generally complements offline relationships rather than replacing them.
                </p>
              </div>

              <div className="bg-green-900/10 border border-green-500/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-900/30 p-2">
                    <Monitor className="text-green-400" size={32} />
                  </div>
                  <h3 className="text-green-400 font-bold text-2xl font-mono">Types of CMC</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Self-disclosure depends on the <em>type</em> of CMC.
                  <br />
                  <br />
                  People disclose more on Facebook (visible profile) than on gaming forums (anonymous).
                  <br />
                  <strong>Paine et al.</strong> argue that viewing all "online relationships" as a single category is invalid.
                </p>
              </div>
            </div>
          </VirtualSlide>
        );

      case 7:
        return (
          <VirtualSlide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Data Log" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-black border border-green-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center rounded-2xl">
                <div className="flex items-center gap-3 mb-6 border-b border-green-700 pb-4">
                  <span className="bg-green-600 text-black px-3 py-1 text-sm font-bold font-mono">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl font-mono">Query</h3>
                </div>
                <p className={`text-green-400 font-mono italic leading-snug border-l-4 border-green-500 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss virtual relationships in social media."
                </p>
              </div>
              <EssayPlanRevealL9 isPresentation={isPresentation} />
            </div>
          </VirtualSlide>
        );

      default:
        return null;
    }
  };

  const renderLesson10 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <SlideL10 isPresentation={isPresentation} enableFlash={true}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-fuchsia-600 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Camera size={isPresentation ? 100 : 80} className="text-white animate-flash" />
                  <Star size={isPresentation ? 100 : 80} className="text-fuchsia-500" />
                </div>
              </div>
              <h1 className={`font-headline text-white mb-4 tracking-wider uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                Parasocial <span className="text-fuchsia-600">Relationships</span>
              </h1>
              <div className="h-1 w-64 bg-zinc-800 my-6"></div>
              <h2 className={`text-zinc-500 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>Lesson 10: Fandom & Fixation</h2>
              <button
                onClick={nextSlide}
                className={`bg-fuchsia-700 text-white font-headline tracking-widest uppercase px-12 py-4 hover:bg-fuchsia-600 transition-all ${
                  isPresentation ? 'text-2xl' : 'text-lg'
                } shadow-[4px_4px_0px_#fff]`}
              >
                Enter The Fan Club
              </button>
            </div>
          </SlideL10>
        );

      case 1:
        return (
          <SlideL10 isPresentation={isPresentation}>
            <PhaseHeaderL10 phase="Phase 1: Activation" title="Do Now Task" icon={Clock} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuizL10 questions={lesson10DoNow} isPresentation={isPresentation} />
          </SlideL10>
        );

      case 2:
        return (
          <SlideL10 isPresentation={isPresentation}>
            <PhaseHeaderL10 phase="Phase 2: Concept" title="The Levels (CAS)" icon={Activity} time="15 MINS" isPresentation={isPresentation} />
            <LevelsOfParasocial isPresentation={isPresentation} />
          </SlideL10>
        );

      case 3:
        return (
          <SlideL10 isPresentation={isPresentation}>
            <PhaseHeaderL10 phase="Phase 2: Concept" title="Explanations" icon={Target} time="10 MINS" isPresentation={isPresentation} />
            <ExplanationsComparison isPresentation={isPresentation} />
          </SlideL10>
        );

      case 4:
        return (
          <SlideL10 isPresentation={isPresentation}>
            <PhaseHeaderL10 phase="Phase 3: Simulation" title="Stan Simulator" icon={Heart} time="15 MINS" isPresentation={isPresentation} />
            <StanSimulator isPresentation={isPresentation} />
          </SlideL10>
        );

      case 5:
        return (
          <SlideL10 isPresentation={isPresentation}>
            <PhaseHeaderL10 phase="Phase 4: Evidence" title="Research Data" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              <div className="bg-zinc-900 border border-zinc-800 p-8 relative overflow-hidden group hover:border-fuchsia-600 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users size={80} />
                </div>
                <h3 className={`text-fuchsia-500 font-headline uppercase mb-4 border-b border-zinc-800 pb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  Maltby et al. (2005)
                </h3>
                <div className="space-y-4 text-zinc-300">
                  <div className="bg-black/50 p-4 border-l-2 border-fuchsia-500">
                    <strong className={`text-white block uppercase tracking-wider mb-1 ${isPresentation ? 'text-xl' : 'text-xs'}`}>Study</strong>
                    <span className={`${isPresentation ? 'text-2xl' : 'text-base'}`}>Female adolescents reporting intense-personal relationships with female celebrities.</span>
                  </div>
                  <div className="bg-black/50 p-4 border-l-2 border-fuchsia-500">
                    <strong className={`text-white block uppercase tracking-wider mb-1 ${isPresentation ? 'text-xl' : 'text-xs'}`}>Findings</strong>
                    <span className={`${isPresentation ? 'text-2xl' : 'text-base'}`}>Poor body image correlated with admiration of celebrity's body.</span>
                  </div>
                  <p className={`italic text-fuchsia-400/80 mt-2 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
                    "Supports Absorption-Addiction: deficiency (body image) drives the obsession."
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-8 relative overflow-hidden group hover:border-blue-600 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield size={80} />
                </div>
                <h3 className={`text-blue-500 font-headline uppercase mb-4 border-b border-zinc-800 pb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  McCutcheon et al. (2006)
                </h3>
                <div className="space-y-4 text-zinc-300">
                  <div className="bg-black/50 p-4 border-l-2 border-blue-500">
                    <strong className={`text-white block uppercase tracking-wider mb-1 ${isPresentation ? 'text-xl' : 'text-xs'}`}>Study</strong>
                    <span className={`${isPresentation ? 'text-2xl' : 'text-base'}`}>Measured attachment types and celebrity attitudes in 299 participants.</span>
                  </div>
                  <div className="bg-black/50 p-4 border-l-2 border-blue-500">
                    <strong className={`text-white block uppercase tracking-wider mb-1 ${isPresentation ? 'text-xl' : 'text-xs'}`}>Findings</strong>
                    <span className={`${isPresentation ? 'text-2xl' : 'text-base'}`}>No correlation found between insecure-resistant attachment and parasocial relationships.</span>
                  </div>
                  <p className={`italic text-blue-400/80 mt-2 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
                    "Directly challenges the Attachment Theory explanation."
                  </p>
                </div>
              </div>
            </div>
          </SlideL10>
        );

      case 6:
        return (
          <SlideL10 isPresentation={isPresentation}>
            <PhaseHeaderL10 phase="Phase 5: Evaluation" title="Critique & Issues" icon={Globe} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="bg-green-900/10 border border-green-500/30 p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-900/30 p-2">
                    <Globe className="text-green-400" size={32} />
                  </div>
                  <h3 className={`text-green-400 font-headline uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Cultural Universality</h3>
                </div>
                <p className={`text-zinc-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  <strong>Schmid & Klimmt (2011):</strong> Found similar levels of parasocial attachment (to Harry Potter) in Germany and Mexico. Suggests the tendency to form these bonds is universal and innate.
                </p>
              </div>

              <div className="bg-yellow-900/10 border border-yellow-500/30 p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-900/30 p-2">
                    <Activity className="text-yellow-400" size={32} />
                  </div>
                  <h3 className={`text-yellow-400 font-headline uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Methodology</h3>
                </div>
                <p className={`text-zinc-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  Most research uses self-report (questionnaires like CAS). Subject to social desirability bias. Studies are correlational: does poor body image cause parasocial bonds, or vice versa?
                </p>
              </div>

              <div className="col-span-1 md:col-span-2 bg-fuchsia-900/10 border border-fuchsia-500/30 p-6 flex items-center justify-between">
                <div>
                  <h3 className={`text-fuchsia-400 font-headline uppercase mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Personality Links</h3>
                  <p className={`text-zinc-300 ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                    Maltby (2003) linked levels to Eysenck's traits: Entertainment = Extraversion. Intense = Neuroticism. Pathological = Psychoticism.
                  </p>
                </div>
              </div>
            </div>
          </SlideL10>
        );

      case 7:
        return (
          <SlideL10 isPresentation={isPresentation}>
            <PhaseHeaderL10 phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-zinc-900 border border-zinc-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center rotate-1">
                <div className="absolute -top-6 -left-6 bg-red-600 text-white font-marker px-6 py-2 -rotate-12 text-lg">TOP SECRET</div>
                <div className="flex items-center gap-3 mb-6 border-b border-zinc-700 pb-4">
                  <span className="bg-fuchsia-600 text-white font-bold px-3 py-1 text-sm">16 MARKS</span>
                  <h3 className="font-headline text-white text-2xl">EXAM QUESTION</h3>
                </div>
                <p className={`text-zinc-300 font-serif italic leading-snug border-l-4 border-fuchsia-500 pl-6 ${isPresentation ? 'text-5xl' : 'text-2xl'}`}>
                  "Discuss parasocial relationships."
                </p>
              </div>
              <EssayPlanRevealL10 isPresentation={isPresentation} />
            </div>
          </SlideL10>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans overflow-hidden selection:bg-pink-500 selection:text-white">
      <div
        className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col z-20 shadow-2xl relative overflow-hidden`}
      >
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <span className="font-black text-xl text-pink-500 tracking-tighter">RELATIONSHIPS</span>
          <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto py-4">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => {
                if (lesson.active) {
                  setCurrentLesson(lesson.id);
                }
              }}
              className={`w-full text-left px-6 py-4 border-l-4 transition-all ${
                currentLesson === lesson.id
                  ? 'border-pink-500 bg-pink-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(236,72,153,0.2)]'
                  : 'border-transparent text-gray-500 hover:bg-gray-900 hover:text-gray-300'
              } ${!lesson.active ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm tracking-tight">{lesson.title}</span>
                {currentLesson === lesson.id && <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,1)]"></div>}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-grow flex flex-col h-full relative bg-[#0a0a0a]">
        <div className="absolute top-4 left-4 z-50 flex gap-2">
          {!isSidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="bg-gray-800 p-2 rounded text-white hover:bg-gray-700 shadow-lg border border-gray-700"
            >
              <Menu size={20} />
            </button>
          )}
        </div>
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <button
            onClick={togglePresentation}
            className={`p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700/50 backdrop-blur-sm transition-all ${
              isPresentation ? 'bg-pink-600 text-white border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]' : 'bg-gray-800/80'
            }`}
            title="Presentation Mode"
          >
            <Projector size={20} />
          </button>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="bg-gray-800/80 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700/50 backdrop-blur-sm transition-all"
            title={isSidebarOpen ? 'Maximize Content' : 'Show Sidebar'}
          >
            {isSidebarOpen ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
          </button>
        </div>
        <div className="h-1 bg-gray-900 w-full">
          <div
            className="h-full bg-gradient-to-r from-pink-800 to-pink-500 transition-all duration-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
            style={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }}
          />
        </div>
        <main
          className="flex-grow relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black"
          style={{ zoom: isPresentation ? '1.25' : '1' }}
        >
          {currentLesson === 1 && renderLesson1()}
          {currentLesson === 2 && renderLesson2()}
          {currentLesson === 3 && renderLesson3()}
          {currentLesson === 4 && renderLesson4()}
          {currentLesson === 5 && renderLesson5()}
          {currentLesson === 6 && renderLesson6()}
          {currentLesson === 7 && renderLesson7()}
          {currentLesson === 8 && renderLesson8()}
          {currentLesson === 9 && renderLesson9()}
          {currentLesson === 10 && renderLesson10()}
        </main>
        <div className="h-20 border-t border-gray-800 bg-black/50 backdrop-blur-sm flex items-center justify-between px-8 z-10">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${
              currentSlide === 0 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <ChevronLeft size={16} /> PREV
          </button>
          <span className="text-gray-600 font-mono text-xs tracking-widest">
            {currentSlide + 1} / {slideCount}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slideCount - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${
              currentSlide === slideCount - 1
                ? 'text-gray-700 cursor-not-allowed'
                : 'bg-pink-600 text-white hover:bg-pink-500 shadow-lg hover:shadow-pink-500/20'
            }`}
          >
            NEXT <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
