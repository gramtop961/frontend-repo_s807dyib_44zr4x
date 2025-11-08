import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="demo" className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <h3 className="text-lg font-semibold">Live Demo Preview</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">A glimpse of the quiz-taking experience with timer and questions.</p>
              </div>
              <div className="p-6 grid lg:grid-cols-[1fr_320px] gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Sample Quiz: JavaScript Basics</h4>
                    <div className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">Timer: 09:41</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
                    <p className="font-medium">1) Which of the following is NOT a JavaScript data type?</p>
                    <div className="mt-3 grid gap-2">
                      {['Number','String','Boolean','Character'].map((opt) => (
                        <label key={opt} className="flex items-center gap-3 rounded-md border border-zinc-200 dark:border-zinc-800 p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer">
                          <input type="radio" name="q1" className="accent-indigo-600" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Submit Answers</button>
                </div>
                <aside className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/60 dark:bg-zinc-950/60">
                  <h5 className="font-semibold">Live Scoreboard</h5>
                  <ol className="mt-3 space-y-2 text-sm">
                    {[
                      { name: 'Ava', score: 18 },
                      { name: 'Liam', score: 16 },
                      { name: 'Noah', score: 15 },
                    ].map((u, i) => (
                      <li key={u.name} className="flex items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 p-2">
                        <span className="text-zinc-600 dark:text-zinc-300">#{i + 1} {u.name}</span>
                        <span className="font-semibold">{u.score} pts</span>
                      </li>
                    ))}
                  </ol>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
