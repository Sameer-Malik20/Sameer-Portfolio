import React, { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(false); // Dark mode toggle
  const [navOpen, setNavOpen] = useState(false); // Mobile nav toggle

  // Effect to toggle dark class on html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 bg-opacity-70 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold uppercase text-yellow-400">
            My Portfolio
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 font-semibold">
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-yellow-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-yellow-400 transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
            {/* Dark/Light toggle button */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                // Sun Icon for Light Mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon Icon for Dark Mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {navOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 bg-opacity-95 px-4 pb-4 shadow-lg transition-colors duration-300">
            <a
              href="#about"
              className="block py-2 hover:text-yellow-400 transition"
              onClick={() => setNavOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="block py-2 hover:text-yellow-400 transition"
              onClick={() => setNavOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block py-2 hover:text-yellow-400 transition"
              onClick={() => setNavOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="block py-2 hover:text-yellow-400 transition"
              onClick={() => setNavOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block py-2 hover:text-yellow-400 transition"
              onClick={() => setNavOpen(false)}
            >
              Contact
            </a>
            {/* Dark/Light toggle in mobile */}
            <button
              onClick={toggleDarkMode}
              className="w-full mt-4 bg-yellow-400 text-gray-900 px-3 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                // Sun Icon for Light Mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon Icon for Dark Mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pb-12 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-6 md:mb-0">
            <img
              src="https://res.cloudinary.com/dsragxpo0/image/upload/v1749206073/photo_sam_gvkvrb.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Intro Text */}
          <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Sameer
            </h2>
            <p className="mb-4 text-lg">
              Frontend | Backend | Mern Stack | Full Stack Developer | Modern
              Web Apps
            </p>
            <a
              href="https://drive.google.com/file/d/1wv8azjnzrc3hKqVhiwebdZdtmSIrEPfg/view?usp=sharing"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              View Resume
            </a>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-semibold mb-6 text-center">About Me</h3>
          <p className="text-center max-w-3xl mx-auto text-lg mb-4">
            Enthusiastic and detail-oriented BCA student with hands-on
            experience in full-stack web development using the MERN stack.
            Skilled in building scalable, responsive web applications and
            RESTful APIs. Proficient in JavaScript, React, Node.js, Express.js,
            and MongoDB. Developed several real-world projects including chat
            apps, weather apps, AI Resume Analyzer, and booking platforms.
            Strong understanding of backend logic, API integration, and user
            authentication. Currently enhancing problem-solving abilities
            through Data Structures and Algorithms (DSA). Looking to contribute
            to a dynamic team and grow as a full-stack developer.Experience
          </p>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="py-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">Skills</h3>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "HTML & CSS",
              "Git & GitHub",
              "Postman & VS Code",
              "REST APIs",
              "Responsive Design",
              "Authentication",
              "Render & Netlify",
              "NodeJs",
              "ExpressJs",
              "MongoDB",
              "PostgreSQL",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow hover:scale-105 transform transition"
              >
                <h4 className="text-xl font-semibold text-center">{skill}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="max-w-7xl mx-auto px-4 py-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wanderlust Travel App",
                description:
                  "Plan trips, save destinations, and explore interactive maps in a sleek Respoinsive UI.",
                github: "https://github.com/Sameer-Malik20/MajorProject.git",
                demo: "https://majorproject-ehlx.onrender.com",
              },
              {
                title: "Provably Fair Dice Game",
                description:
                  "SHA-256-backed rolls prove fairness while players place crypto bets in a dark, minimalist interface.",
                github:
                  "https://github.com/Sameer-Malik20/Provably-Fair-Dice-Game.git",
                demo: "https://joyful-cactus-5c7f93.netlify.app",
              },
              {
                title: "Real-Time Whiteboard",
                description:
                  "Write, edit, and publish posts with real-time Markdown preview, Rating and Search with attractive design.",
                github:
                  "https://github.com/Sameer-Malik20/Real-Time-Whiteboard.git",
                demo: "https://neon-conkies-a72078.netlify.app",
              },
              {
                title: "Real Time Chat App",
                description:
                  "Instant group messaging with typing indicators, emoji reactions, and WebSocket-powered sync.",
                github: "https://github.com/Sameer-Malik20/Chat-App-MERN.git",
                demo: "https://bright-moxie-e075f9.netlify.app",
              },
              {
                title: "Ecommerce Website",
                description:
                  "Full-featured store with product search, cart, Stripe checkout ,review,filter with modern design.",
                github: "https://github.com/Sameer-Malik20/Ecommerce-Store.git",
                demo: "https://clever-fudge-b8ccef.netlify.app",
              },
              {
                title: "Blog Platform",
                description:
                  "Collaborative canvas for drawing, annotating, and brainstorming together via Socket.IO.",
                github: "https://github.com/Sameer-Malik20/Blog-App.git",
                demo: "https://whiteboard-demo.vercel.app",
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="bg-gray-300 dark:bg-gray-700 rounded-lg p-4 shadow hover:scale-105 transition duration-300 flex flex-col h-full"
              >
                <h4 className="text-xl font-semibold mb-2">{proj.title}</h4>
                <p className="mb-4 flex-1">{proj.description}</p>
                <div className="flex items-center justify-between mt-2">
                  {/* GitHub Icon (left) */}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-yellow-400 transition"
                    title="View on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                    </svg>
                  </a>
                  {/* Live Demo Icon (right) */}
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-500 transition"
                    title="Live Demo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 0 0 2-2v-7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="py-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Experience
          </h3>
          <div className="max-w-7xl mx-auto space-y-6 px-4">
            {[
              {
                position: "MERN Stack Developer Intern",
                company: "Elite Tech Intern",
                duration: "3 Month",
                details:
                  "Developed frontend using React and Tailwind CSS. Integrated REST APIs, managed state using hooks, and optimized performance.",
              },
              {
                position: "Full Stack Developer Intern",
                company: "Zaalima Development",
                duration: "April 2025 - Present",
                details:
                  "Built backend APIs with Node.js & Express. Connected MongoDB, implemented JWT auth, and performed CRUD operations.",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow hover:scale-105 transition"
              >
                <h4 className="text-xl font-semibold mb-2">{exp.position}</h4>
                <p className="mb-2 font-semibold">{exp.company}</p>
                <p className="mb-2 text-sm">{exp.duration}</p>
                <p>{exp.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="py-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">Education</h3>
          <div className="max-w-7xl mx-auto space-y-6 px-4">
            <div className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">
                Bachelor of Computer Applications (BCA) - Present
              </h4>
              <p className="mb-2 font-semibold">
                Shri Venkateshwara University
              </p>
              <p className="mb-2 text-sm">2024 - 2027</p>
              <p>
                Currently pursuing BCA with focus on full-stack web development
                and computer science fundamentals.
              </p>
            </div>
            <div className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">
                12th (Senior Secondary)
              </h4>
              <p className="mb-2 font-semibold">Kisan Aadarsh Inter College</p>
              <p className="mb-2 text-sm">2020 - 2022</p>
              <p className="mb-2 text-sm">70%</p>
              <p>Completed 12th with Science stream UP Board.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-4 py-12 text-center"
        >
          <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
          <p className="mb-4">
            I'm open to collaborations and projects. Reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="sameermalik63901@gmail.com"
              className="text-yellow-400 hover:underline font-semibold"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sameer-malik-67ab45217"
              className="text-yellow-400 hover:underline font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sameer-Malik20"
              className="text-yellow-400 hover:underline font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://x.com/SameerMali56657"
              className="text-yellow-400 hover:underline font-semibold"
            >
              X
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 p-4 text-center">
        &copy; {new Date().getFullYear()} Sameer. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
