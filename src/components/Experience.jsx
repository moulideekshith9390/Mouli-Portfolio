const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-extrabold mb-20 text-center tracking-tight">
          Experience
        </h2>

        <div className="space-y-16">

          {/* Bank of America */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 hover:border-gray-600 transition">
            <div className="flex justify-between items-start flex-col md:flex-row md:items-center mb-6">
              <div>
                <h3 className="text-3xl font-semibold">
                  Bank of America
                </h3>
                <p className="text-gray-400">
                  Full Stack Software Engineer
                </p>
              </div>
              <span className="text-gray-500 mt-3 md:mt-0">
                2024 – Present
              </span>
            </div>

            <ul className="space-y-3 text-gray-400">
              <li>• Designed and built scalable backend services deployed on AWS ECS</li>
              <li>• Established automated CI/CD pipelines using Jenkins & Docker</li>
              <li>• Improved test coverage with JUnit & Mockito ensuring production stability</li>
              <li>• Followed clean architecture principles for modular service design</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Java</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Spring Boot</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">AWS ECS</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Docker</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Jenkins</span>
            </div>
          </div>

          {/* Wipro */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 hover:border-gray-600 transition">
            <div className="flex justify-between items-start flex-col md:flex-row md:items-center mb-6">
              <div>
                <h3 className="text-3xl font-semibold">
                  Wipro
                </h3>
                <p className="text-gray-400">
                  Software Engineer
                </p>
              </div>
              <span className="text-gray-500 mt-3 md:mt-0">
                2021 – 2023
              </span>
            </div>

            <ul className="space-y-3 text-gray-400">
              <li>• Built REST APIs for banking systems improving data throughput</li>
              <li>• Automated deployments using Azure DevOps pipelines</li>
              <li>• Collaborated in Agile sprints with cross-functional teams</li>
              <li>• Improved API reliability through structured logging & monitoring</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Java</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">REST APIs</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Azure DevOps</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Agile</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
