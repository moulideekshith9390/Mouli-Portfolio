import profilePic from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-black text-white px-6 pt-32 relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#444_1px,_transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Mouli Edurugundla
          </h1>

          <h2 className="text-2xl text-gray-400 mb-6 font-medium">
            Full Stack Developer - Microservices • Cloud • Distributed Systems
          </h2>

          <p className="text-gray-400 max-w-xl mb-10 leading-relaxed">
            4+ years of experience building scalable banking systems using
            Java, Spring Boot, REST APIs, and AWS ECS. I specialize in designing
            secure, containerized microservices and automated CI/CD pipelines
            for enterprise-grade production environments.
          </p>

          <div className="flex gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Resume
            </a>

            <a
              href="mailto:mouliedurugundla01@gmail.com"
              className="border border-gray-600 px-8 py-4 rounded-xl hover:bg-gray-800 transition"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Mouli"
            className="w-[420px] rounded-3xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
