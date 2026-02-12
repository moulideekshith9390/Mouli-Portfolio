const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="text-white font-semibold text-xl">Mouli</span>
        <div className="space-x-8 text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
