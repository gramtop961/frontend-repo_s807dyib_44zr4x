import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-4">
              <Sparkles size={14} /> Live quizzes with realtime scoreboard
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Engage your class with interactive quizzes
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Create, host, and grade quizzes in seconds. Timers, auto-submit, rich results, and beautiful design out of the box.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
                Try a demo
                <ArrowRight size={16} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
                Explore features
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl ring-1 ring-zinc-200 dark:ring-zinc-800 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 p-4">
              <div className="h-full w-full rounded-lg bg-white/60 dark:bg-zinc-900/60 backdrop-blur flex items-center justify-center text-center p-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">Preview</p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">Responsive quiz interface</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Designed for both teachers and students with clean, accessible UI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
