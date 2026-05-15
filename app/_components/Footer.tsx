export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-6 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-stone-500">
        <span>© 2026 VisualPlate</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-stone-300 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-stone-300 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
