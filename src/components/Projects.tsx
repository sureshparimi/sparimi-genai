
import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BDD Gherkin Test Cases Framework",
      description: "Comprehensive BDD framework with 100+ Cucumber step definitions. Enhanced collaboration between stakeholders, developers, and testers with clear specifications using plain language.",
      tech: ["BDD", "Gherkin", "Cucumber", "pytest-bdd"],
      github: "https://github.com/sureshparimi/bdd-gherkin-test-cases",
      highlights: ["Enhanced Collaboration", "Clear Specifications", "Early Testing", "Automated Testing"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "EDN Test Automation Suite",
      description: "Pytest-based complex testing framework with BDD integration, multi-browser support via BrowserStack, and comprehensive API testing capabilities.",
      tech: ["Python", "Pytest", "Selenium", "BrowserStack", "API Testing"],
      github: "https://github.com/sureshparimi/edn-test-automation-tests-ui",
      highlights: ["100+ Step Definitions", "Flaky Test Management", "Visual Testing", "TestRail Integration"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Cypress Automation Framework", 
      description: "Scalable Cypress test structure with dynamic pricing automation, field validations, and parallel execution across multiple browsers with Slack integration.",
      tech: ["Cypress", "JavaScript", "Node.js", "GitHub Actions"],
      github: "https://github.com/sureshparimi/cypress-automation",
      highlights: ["Dynamic Testing", "CI/CD Integration", "Parallel Execution", "Slack Notifications"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Robot Framework Chatbot Automation",
      description: "Automated chatbot conversations and interactions using Robot Framework with Selenium, Python, and Page Object Model for comprehensive testing.",
      tech: ["Robot Framework", "Python", "Selenium", "Page Object Model"],
      highlights: ["Conversation Testing", "Utterance Validation", "User Interaction", "Simplified Framework"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Showcase of automation frameworks and testing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
                    <div className="flex gap-2 ml-4">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/sureshparimi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
