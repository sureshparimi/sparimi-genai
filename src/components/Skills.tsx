
import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Wrench, Zap, Target, Trophy, Sparkles, Bot, Workflow, Brain } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: [
        "Python", "JavaScript", "Java", "TypeScript",
        "Playwright", "Selenium", "Cypress", "Robot Framework"
      ],
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      description: "Advanced programming across multiple languages and automation frameworks"
    },
    {
      icon: Bot,
      title: "AI & Machine Learning",
      skills: [
        "Gen AI", "Prompt Engineering", "LLMs", "AI-Powered Testing",
        "Machine Learning", "Natural Language Processing", "OpenAI APIs", "Claude AI"
      ],
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      description: "Cutting-edge AI implementation and intelligent automation solutions"
    },
    {
      icon: Wrench,
      title: "Testing & Quality Engineering",
      skills: [
        "Test Automation", "API Testing", "Performance Testing", "Security Testing",
        "BDD/Gherkin", "Microservices Testing", "Self-Healing Tests", "Mobile Testing"
      ],
      color: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      description: "Comprehensive testing methodologies and quality assurance strategies"
    },
    {
      icon: Workflow,
      title: "Jira & Workflow Automation",
      skills: [
        "Jira Administration", "Workflow Automation", "ScriptRunner", "Jira Cloud",
        "Custom Fields", "Project Configuration", "User Management", "Reporting & Analytics"
      ],
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      description: "Expert Jira administration and business process automation"
    },
    {
      icon: Cloud,
      title: "DevOps & CI/CD",
      skills: [
        "Jenkins", "GitHub Actions", "Azure DevOps", "Docker",
        "CI/CD Pipelines", "TestOps", "Infrastructure as Code", "Kubernetes"
      ],
      color: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      description: "Modern DevOps practices and continuous integration/deployment"
    },
    {
      icon: Target,
      title: "Management & Strategy",
      skills: [
        "Test Management", "Team Leadership", "Strategic Planning", "QA Strategy",
        "Release Management", "Budgeting", "KPI Implementation", "Stakeholder Management"
      ],
      color: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      description: "Strategic leadership and comprehensive project management"
    }
  ];

  const techHighlights = [
    { name: "Playwright Expert", icon: "🎭" },
    { name: "AI/ML Pioneer", icon: "🤖" }, 
    { name: "Jira Master", icon: "⚙️" },
    { name: "TestOps Leader", icon: "🚀" },
    { name: "Gen AI Specialist", icon: "🧠" },
    { name: "Automation Architect", icon: "⚡" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              <Trophy className="w-4 h-4" />
              <span>15+ Years of Technical Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mastery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Comprehensive expertise across modern technology stack with specialization in AI-powered automation and strategic quality engineering
            </p>
          </div>

          {/* Tech Highlights Banner */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techHighlights.map((tech, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 border border-gray-200/50 cursor-pointer ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="font-semibold text-gray-800">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-white/20 group cursor-pointer ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
                onMouseEnter={() => setActiveSection(categoryIndex)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4 shadow-lg transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className={`bg-gradient-to-r ${category.color} bg-opacity-10 px-3 py-2 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md border border-gray-200/30 ${
                        activeSection === categoryIndex ? 'animate-pulse' : ''
                      }`}
                      style={{ 
                        animationDelay: `${categoryIndex * 200 + skillIndex * 50}ms`,
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <span className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover overlay effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Call to Action Section */}
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Brain className="w-4 h-4 text-yellow-400" />
                  <span>Ready to Transform Your Technology Stack?</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Engineer the Future Together
                </h3>
                <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                  Specializing in AI-powered automation, Jira administration, and next-generation quality engineering. 
                  Ready to revolutionize your development and testing processes?
                </p>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Start Your Digital Transformation
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                    Schedule Strategy Session
                  </button>
                </div>
                <p className="text-blue-200 mt-4 text-sm">
                  ✨ Free consultation • 🚀 Rapid implementation • 📈 Measurable ROI • 🤖 AI-powered solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
