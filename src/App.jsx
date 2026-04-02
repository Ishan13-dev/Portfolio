import profile from "./assets/profile.jpg";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Dynamic Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md text-white z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            IV
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {["about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                title={`Navigate to ${item} section`}
                className={`capitalize text-xs lg:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 ${
                  activeSection === item
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-menu" className="md:hidden bg-slate-900 border-t border-slate-700 px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
            {["about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left capitalize text-sm font-medium px-3 py-2 rounded transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  activeSection === item
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-slate-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section - Enhanced */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-10">
        <div className="animate-fade-in w-full max-w-2xl">
          <div className="mb-6 sm:mb-8 animate-bounce-slow">
            <img
              src={profile}
              alt="Ishan Verma - Full Stack Developer"
              className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full mx-auto mb-4 sm:mb-6 border-4 border-blue-400 shadow-2xl object-cover hover:border-cyan-400 transition-all duration-300"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Ishan Verma
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 text-gray-300">
            Full Stack Developer | AI Enthusiast | Problem Solver
          </p>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-gray-400">
            B.Tech CSE | Building scalable web applications & AI solutions
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap mb-8 sm:mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              aria-label="Navigate to projects section to view my work"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              aria-label="Navigate to contact section to get in touch"
              className="border-2 border-blue-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
            {[
              { icon: "💻", label: "10+ Projects" },
              { icon: "📚", label: "Full Stack" },
              { icon: "🚀", label: "AI/ML" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</div>
                <p className="text-xs sm:text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* About Section - Enhanced */}
      <div
        className="bg-white text-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        id="about"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
            <div className="text-left">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                I'm a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> and{" "}
                <span className="font-semibold text-blue-600">AI Enthusiast</span> currently pursuing B.Tech in
                Computer Science & Engineering.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                With a strong foundation from a Polytechnic Diploma in Civil Engineering, I bring unique
                problem-solving perspectives to software development. I specialize in building scalable, user-centric
                web applications with React and modern JavaScript frameworks.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Currently focused on exploring <span className="font-semibold text-blue-600">AI/ML applications</span>, 
                cloud technologies, and creating impactful projects that solve real-world problems.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { title: "Frontend", skills: "React, JavaScript, Tailwind CSS, HTML5/CSS3" },
                { title: "Backend", skills: "Node.js, Python, Java, REST APIs" },
                { title: "Tools & Tech", skills: "Git, VS Code, Vite, ESLint, NPM/Yarn" },
                { title: "AI/ML", skills: "NLP Basics, Python, TensorFlow basics" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-blue-600 mb-1 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Skills Section - Organized & Interactive */}
      <div
        className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-slate-900"
        id="skills"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-14 md:mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                category: "Frontend",
                icon: "🎨",
                skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
              },
              {
                category: "Backend",
                icon: "⚙️",
                skills: ["Node.js", "Python", "Java", "REST APIs", "Database Design"],
              },
              {
                category: "Programming",
                icon: "💻",
                skills: ["Data Structures", "Algorithms", "OOP", "Problem Solving", "C++"],
              },
              {
                category: "AI & Tools",
                icon: "🤖",
                skills: ["Python (AI/ML)", "NLP Basics", "Git", "VS Code", "Vite/Build Tools"],
              },
            ].map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-500"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{skillGroup.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 md:mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillGroup.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full hover:from-blue-200 hover:to-cyan-200 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Projects Section - Premium Showcase */}
      <div
        className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-slate-900"
        id="projects"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-14 md:mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Advanced Scientific Calculator",
                desc: "A responsive scientific calculator with history tracking, keyboard shortcuts, and dark mode built using HTML, CSS, and JavaScript. Deployed on Vercel.",
                tech: ["HTML5", "CSS3", "JavaScript"],
                highlights: ["History Tracking", "Keyboard Shortcuts", "Dark Mode", "Responsive Design"],
                status: "Live",
                github: "https://github.com/Ishan13-dev/Advanced-calculator",
                demo: "https://advanced-calculator-six-gilt.vercel.app/",
              },
              {
                title: "Portfolio Website",
                desc: "Modern, responsive portfolio showcasing skills and projects",
                tech: ["React", "Tailwind CSS", "Vite"],
                highlights: ["Smooth UI Animations", "Mobile Responsive", "SEO Optimized"],
                status: "Live",
              },
              {
                title: "AI Chatbot",
                desc: "Intelligent chatbot with NLP capabilities for multi-turn conversations",
                tech: ["Python", "NLP", "Machine Learning"],
                highlights: ["Intent Recognition", "Context Aware", "API Integration"],
                status: "In Progress",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 line-clamp-2">{project.title}</h3>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-700"
                          : project.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{project.desc}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">Technologies</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="bg-blue-600 text-white text-xs font-medium px-2 py-0.5 sm:py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">Highlights</p>
                    <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                      {project.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="flex items-center">
                          <span className="text-blue-500 mr-2 flex-shrink-0">✓</span> <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={project.github || "https://github.com/ishan13-dev"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View code for ${project.title}`}
                      className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-1.5 sm:py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-xs sm:text-sm"
                    >
                      View Code
                    </a>
                    {project.status === "Live" && (
                      <a
                        href={project.demo || "#"}
                        target={project.demo ? "_blank" : undefined}
                        rel={project.demo ? "noopener noreferrer" : undefined}
                        aria-label={`View live demo for ${project.title}`}
                        onClick={(e) => !project.demo && e.preventDefault()}
                        className="flex-1 inline-flex items-center justify-center border-2 border-blue-500 text-blue-600 py-1.5 sm:py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all text-xs sm:text-sm cursor-pointer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Want to see more?</p>
            <a
              href="https://github.com/ishan13-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
            >
              Visit My GitHub →
            </a>
          </div>
        </div>
      </div>


      {/* Contact & CTA Section - Enhanced */}
      <div
        className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        id="contact"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>

          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            I'm always interested in exploring new opportunities and collaborating on interesting projects. Whether you have a question, want to discuss technology, or need a developer for your next project—feel free to reach out!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {[
              {
                icon: "📧",
                label: "Email",
                value: "Shivamishan6@gmail.com",
                href: "mailto:Shivamishan6@gmail.com",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "ishan-verma-500b39306",
                href: "https://www.linkedin.com/in/ishan-verma-500b39306",
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all hover:border-blue-400/60"
              >
                <div className="text-3xl mb-2">{contact.icon}</div>
                <p className="text-gray-300 text-xs sm:text-sm mb-2">{contact.label}</p>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 font-semibold hover:text-cyan-300 transition-colors break-all text-xs sm:text-sm line-clamp-2"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          <div className="text-gray-300 mb-8 sm:mb-12">
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Connect with me</h3>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap" role="list">
              {[
                { name: "GitHub", icon: "🐙", url: "https://github.com/ishan13-dev" },
                {
                  name: "LinkedIn",
                  icon: "💼",
                  url: "https://www.linkedin.com/in/ishan-verma-500b39306",
                },
                { name: "Instagram", icon: "📷", url: "https://www.instagram.com/isha_13dev/" },
                { name: "Facebook", icon: "👥", url: "https://www.facebook.com/profile.php?id=61559213770777" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${social.name}`}
                  className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:from-blue-500/40 hover:to-cyan-500/40 transition-all hover:border-cyan-400/80 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label={`Connect on ${social.name}`}
                  role="listitem"
                >
                  <span className="text-lg sm:text-xl">{social.icon}</span>
                  <span className="font-medium hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            aria-label="Explore more about me"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            Explore More ↑
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-6 sm:py-8 px-4 sm:px-6 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs sm:text-sm mb-2 sm:mb-4">
            Crafted with <span className="text-red-500">❤</span> by Ishan Verma
          </p>
          <p className="text-xs text-gray-500">
            © 2025 Ishan Verma. Designed & Developed using React & Tailwind CSS.
          </p>
          <style>{`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-fade-in { animation: fade-in 0.8s ease-out; }
            .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
          `}</style>
        </div>
      </footer>
    </>
  );
}

export default App;