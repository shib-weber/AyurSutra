export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/20 bg-background-light/80 px-10 py-3 backdrop-blur-sm dark:bg-background-dark/80">
      <div className="flex items-center gap-3 text-primary">
        <svg className="h-8 w-8" fill="none" viewBox="0 0 48 48">
          <path
            d="M24 .757L47.243 24 24 47.243.757 24 24 .757zM21 35.757V12.243L9.243 24 21 35.757z"
            fill="currentColor"
          />
        </svg>
        <h2 className="text-2xl font-bold tracking-tight">AyurSutra</h2>
      </div>

      <nav className="hidden md:flex gap-8">
        {["Home", "About", "Therapies", "Blog", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-64 rounded-lg border border-gray-300 bg-background-light pl-10 pr-4 text-sm text-gray-700 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-background-dark dark:text-gray-300"
          />
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            search
          </span>
        </div>
        <button className="h-10 min-w-[84px] rounded-lg border border-primary px-4 text-sm font-bold text-primary hover:bg-primary hover:text-white">
          Login
        </button>
        <button className="h-10 min-w-[84px] rounded-lg bg-primary px-4 text-sm font-bold text-white hover:opacity-90">
          Signup
        </button>
      </div>
    </header>
  );
}
