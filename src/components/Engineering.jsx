const Engineering = () => {
  return (
    <section className="bg-black text-white px-6 py-32 relative overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_#777_1px,_transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-6xl mx-auto">

        <h2 className="text-5xl font-extrabold mb-16 tracking-tight text-center">
          Engineering Philosophy
        </h2>

        <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-20 leading-relaxed">
          I design backend systems that prioritize reliability, scalability, and operational clarity.
          My focus is on building microservices that can evolve safely in production environments
          while maintaining performance and security.
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-4">
              Clean Architecture
            </h3>
            <p className="text-gray-400">
              Strong separation of concerns, SOLID principles, and modular service design
              to ensure long-term maintainability and extensibility.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-4">
              Scalable Microservices
            </h3>
            <p className="text-gray-400">
              Stateless REST services deployed via containers and orchestrated
              through AWS ECS for horizontal scalability.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-4">
              Secure Systems
            </h3>
            <p className="text-gray-400">
              JWT authentication, IAM best practices, and secure parameter
              management using AWS SSM.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-4">
              CI/CD Discipline
            </h3>
            <p className="text-gray-400">
              Automated builds, container pipelines, code quality analysis,
              and test coverage enforcement for predictable releases.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Engineering;
