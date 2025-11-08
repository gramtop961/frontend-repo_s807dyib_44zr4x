import { Clock, Users, ShieldCheck, BarChart2, Edit3 } from 'lucide-react';

export default function Features() {
  const items = [
    { icon: Edit3, title: 'Create & manage quizzes', desc: 'Full CRUD for quizzes and questions with rich editor.' },
    { icon: Clock, title: 'Timers & auto-submit', desc: 'Keep sessions fair with per-quiz timers and auto submit.' },
    { icon: Users, title: 'Roles & auth', desc: 'Admin/teacher and student roles with JWT authentication.' },
    { icon: ShieldCheck, title: 'Secure', desc: 'Hardened backend with validation, rate limits, and JWT.' },
    { icon: BarChart2, title: 'Realtime scoreboard', desc: 'Socket.io powered live results and leaderboards.' },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Features</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">Everything you need to run engaging quizzes at scale.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
