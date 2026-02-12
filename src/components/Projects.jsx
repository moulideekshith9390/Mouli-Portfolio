const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-extrabold mb-20 text-center tracking-tight">
          Featured Projects
        </h2>

        <div className="space-y-20">

          {/* Blog CMS */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 hover:border-gray-600 transition">
            <h3 className="text-3xl font-semibold mb-3">
              Blog Content Management System (CMS)
            </h3>

            <p className="text-gray-300 mb-8">
              Built a responsive blog platform enabling category-based content organization,
              search functionality, and structured post rendering for improved navigation
              and user engagement.
            </p>

            <ul className="space-y-3 text-gray-400">
              <li>• Implemented category filtering (lifestyle, technology, travel, health)</li>
              <li>• Developed keyword & tag-based search functionality</li>
              <li>• Designed dynamic post views with metadata (author, date, preview)</li>
              <li>• Ensured cross-device responsiveness using Bootstrap & CSS media queries</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">React.js</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">JavaScript</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Bootstrap</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">CSS</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">HTML</span>
            </div>
          </div>


          {/* E-commerce Platform */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 hover:border-gray-600 transition">
            <h3 className="text-3xl font-semibold mb-3">
              E-Commerce Shopping Platform
            </h3>

            <p className="text-gray-300 mb-8">
              Developed a full-stack e-commerce application supporting product catalog management,
              secure authentication, and end-to-end order processing workflows.
            </p>

            <ul className="space-y-3 text-gray-400">
              <li>• Built RESTful APIs using Spring Boot & Java</li>
              <li>• Designed MySQL schema for products, users, and orders</li>
              <li>• Implemented shopping cart, order submission & profile tracking</li>
              <li>• Secured application with Spring Security (role-based access control)</li>
              <li>• Validated API endpoints using Postman for accuracy and stability</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Java</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Spring Boot</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">MySQL</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Spring Security</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">REST APIs</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Postman</span>
            </div>
          </div>


          {/* Online Auction Platform */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 hover:border-gray-600 transition">
            <h3 className="text-3xl font-semibold mb-3">
              Online Auction Platform
            </h3>

            <p className="text-gray-300 mb-8">
              Developed a web-based auction system enabling users to create listings,
              place bids, and receive real-time auction activity updates.
            </p>

            <ul className="space-y-3 text-gray-400">
              <li>• Built backend using Node.js, Express, and MongoDB</li>
              <li>• Followed MVC architecture for structured maintainable code</li>
              <li>• Implemented authentication & session management (express-session)</li>
              <li>• Developed protected routes using custom middleware</li>
              <li>• Enabled live bidding notifications using connect-flash</li>
              <li>• Designed responsive UI using HTML, CSS, JavaScript</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Express.js</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">MongoDB</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">MVC</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">JavaScript</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
