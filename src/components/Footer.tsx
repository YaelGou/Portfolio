export function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24 py-8">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-zinc-600">
        <span>Yael — Systems Designer</span>
        <a
          href="https://github.com/YaelGou"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300 transition-colors duration-150"
        >
          GitHub →
        </a>
      </div>
    </footer>
  );
}
