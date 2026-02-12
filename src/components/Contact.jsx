const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-32 border-t border-gray-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16">

        {/* Left Side */}
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight mb-12">
            Get in touch
          </h2>

          <a
            href="mailto:mouliedurugundla01@gmail.com"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition text-lg"
          >
            mouliedurugundla01@gmail.com
          </a>

          <div className="mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-gray-700 rounded-xl hover:border-gray-500 transition text-gray-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-start gap-8 text-2xl text-gray-400 mt-8 md:mt-0">
          <a
            href="https://www.linkedin.com/in/mouli-deekshith-edurugundla-b0a391193/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/moulideekshith9390"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
