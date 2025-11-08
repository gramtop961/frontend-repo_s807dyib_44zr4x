export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} QuizWave — Built for interactive learning.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">Privacy</a>
          <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">Terms</a>
          <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}
