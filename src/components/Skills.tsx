import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Wrench, Zap, Target, Trophy, Sparkles } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: [
        { name: "Python", level: 95, color: "from-yellow-400 to-yellow-600" },
        { name: "JavaScript", level: 90, color: "from-yellow-300 to-orange-500" },
        { name: "Java", level: 85, color: "from-red-400 to-red-600" },
        { name: "Playwright", level: 95, color: "from-green-400 to-emerald-600" },
        { name: "Selenium", level: 95, color: "from-green-500 to-teal-600" },
        { name: "Cypress", level: 90, color: "from-teal-400 to-cyan-600" }
      ],
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Wrench,
      title: "Testing Tools & Methodologies",
      skills: [
        { name: "Test Automation", level: 95, color: "from-emerald-400 to-green-600" },
        { name: "BDD/Gherkin", level: 90, color: "from-green-400 to-emerald-600" },
        { name: "Robot Framework", level: 85, color: "from-teal-400 to-green-500" },
        { name: "Appium", level: 80, color: "from-cyan-400 to-teal-600" },
        { name: "pytest", level: 90, color: "from-blue-400 to-cyan-600" },
        { name: "API Testing", level: 95, color: "from-indigo-400 to-blue-600" },
        { name: "REST APIs", level: 95, color: "from-purple-400 to-indigo-600" },
        { name: "LoadRunner", level: 85, color: "from-pink-400 to-purple-600" }
      ],
      color: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: Cloud,
      title: "DevOps & CI/CD",
      skills: [
        { name: "Jenkins", level: 85, color: "from-orange-400 to-red-600" },
        { name: "GitHub Actions", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "Azure DevOps", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Docker", level: 80, color: "from-blue-500 to-cyan-600" },
        { name: "CI/CD Pipelines", level: 90, color: "from-purple-400 to-pink-600" },
        { name: "TestOps", level: 85, color: "from-indigo-400 to-purple-600" },
        { name: "Performance Testing", level: 90, color: "from-red-400 to-pink-600" }
      ],
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Database,
      title: "Management & Leadership",
      skills: [
        { name: "Test Management", level: 95, color: "from-orange-400 to-red-600" },
        { name: "Release Management", level: 90, color: "from-red-400 to-pink-600" },
        { name: "Team Leadership", level: 95, color: "from-pink-400 to-rose-600" },
        { name: "Strategic Planning", level: 90, color: "from-rose-400 to-red-600" },
        { name: "QA Strategy", level: 95, color: "from-amber-400 to-orange-600" },
        { name: "Mentoring", level: 90, color: "from-yellow-400 to-amber-600" },
        { name: "Budgeting", level: 85, color: "from-green-400 to-teal-600" },
        { name: "KPI Implementation", level: 90, color: "from-blue-400 to-indigo-600" }
      ],
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Target,
      title: "Specialized Technologies",
      skills: [
        { name: "Cucumber/Behave", level: 90, color: "from-green-400 to-emerald-600" },
        { name: "Microsoft Power BI", level: 80, color: "from-yellow-400 to-orange-600" },
        { name: "Oracle Apps", level: 85, color: "from-red-400 to-orange-600" },
        { name: "Siebel CRM", level: 80, color: "from-blue-400 to-cyan-600" },
        { name: "JIRA", level: 90, color: "from-blue-500 to-indigo-600" },
        { name: "SQL", level: 85, color: "from-indigo-400 to-purple-600" },
        { name: "Git/GitLab", level: 90, color: "from-gray-600 to-gray-800" }
      ],
      color: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      icon: Sparkles,
      title: "AI & Modern Testing",
      skills: [
        { name: "AI-Powered Testing", level: 95, color: "from-violet-400 to-purple-600" },
        { name: "GenAI Integration", level: 90, color: "from-purple-400 to-pink-600" },
        { name: "Self-Healing Tests", level: 85, color: "from-pink-400 to-rose-600" },
        { name: "Intelligent Test Generation", level: 90, color: "from-rose-400 to-red-600" },
        { name: "ML Test Insights", level: 80, color: "from-indigo-400 to-violet-600" },
        { name: "Microservices Testing", level: 90, color: "from-teal-400 to-cyan-600" }
      ],
      color: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50"
    }
  ];

  const techHighlights = [
    "Playwright Automation Expert",
    "AI/ML Testing Pioneer", 
    "TestOps Implementation", 
    "Microservices Testing", 
    "Performance Engineering", 
    "Security Testing",
    "Mobile Automation",
    "API Test Automation",
    "BDD Implementation",
    "CI/CD Integration"
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
              <span>15+ Years of Testing Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Comprehensive skills across modern testing ecosystem with focus on AI-powered automation and next-generation quality engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4 shadow-lg transform transition-transform duration-300 ${
                    hoveredCategory === categoryIndex ? 'rotate-12 scale-110' : ''
                  }`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-sm`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Ready to Transform Your Testing?</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Build the Future of Quality Engineering
                </h3>
                <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                  Specializing in Playwright automation, AI-powered testing, and next-generation TestOps solutions. 
                  Ready to revolutionize your testing strategy?
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {techHighlights.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 border border-white/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Start Your Testing Transformation
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                    Schedule a Consultation
                  </button>
                </div>
                <p className="text-blue-200 mt-4 text-sm">
                  ✨ Free consultation • 🚀 Rapid implementation • 📈 Measurable ROI
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
