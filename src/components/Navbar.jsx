import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">QuizWave</span>
        </a>
        <nav className="flex items-center gap-3">
          <a href="#features" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition">Features</a>
          <a href="#demo" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition">Demo</a>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
            <User size={16} />
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}
