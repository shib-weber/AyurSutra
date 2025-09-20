export default function Footer() {
  return (
    <footer className="bg-primary/10 dark:bg-primary/20 py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} AyurSutra. All rights reserved.
        </p>
        <nav className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
