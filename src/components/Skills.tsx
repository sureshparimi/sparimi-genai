
import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "Playwright", level: 90 },
        { name: "Selenium", level: 95 },
        { name: "Cypress", level: 90 }
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Wrench,
      title: "Testing Tools & Methodologies",
      skills: [
        { name: "Test Automation", level: 95 },
        { name: "BDD/Gherkin", level: 90 },
        { name: "Robot Framework", level: 85 },
        { name: "Appium", level: 80 },
        { name: "pytest", level: 90 },
        { name: "API Testing", level: 95 }
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Cloud,
      title: "DevOps & CI/CD",
      skills: [
        { name: "Jenkins", level: 85 },
        { name: "GitHub Actions", level: 90 },
        { name: "Azure DevOps", level: 85 },
        { name: "Docker", level: 80 },
        { name: "CI/CD Pipelines", level: 90 },
        { name: "TestOps", level: 85 }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Database,
      title: "Management & Leadership",
      skills: [
        { name: "Test Management", level: 95 },
        { name: "Release Management", level: 90 },
        { name: "Team Leadership", level: 95 },
        { name: "Strategic Planning", level: 90 },
        { name: "QA Strategy", level: 95 },
        { name: "Mentoring", level: 90 }
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Expertise</h2>
            <p className="text-xl text-gray-600">
              Comprehensive skills across the testing and automation ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
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
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tech Stack Highlights</h3>
              <p className="text-lg mb-6">
                Python, JavaScript | Playwright, Selenium, Cypress, Appium | Jenkins, GitHub Actions, Azure DevOps, Docker
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["AI/ML Testing", "TestOps", "Microservices Testing", "Mobile Automation", "Performance Testing", "Security Testing"].map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
