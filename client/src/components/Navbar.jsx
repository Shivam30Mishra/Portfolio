export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-lg font-semibold tracking-tight">
          Shivam
        </h1>

        <div className="space-x-8 text-sm text-gray-400">
          <a
            href="#projects"
            className="hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
