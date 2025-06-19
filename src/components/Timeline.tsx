
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const experiences = [
    {
      id: 1,
      company: "Canon EMEA",
      role: "Test & Release Manager",
      period: "Nov 2023 - Present",
      location: "Amstelveen, North Holland, Netherlands",
      type: "Full-time",
      description: "Leading comprehensive test and release management lifecycle. Developing testing frameworks, release protocols, and quality standards. Collaborating with DevOps and development teams to optimize deployment pipelines.",
      skills: ["Workflow Management", "Budgeting", "Strategic Planning"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      company: "Dolby.io",
      role: "Test Automation Manager", 
      period: "Jan 2022 - Oct 2024",
      location: "Remote",
      type: "Contract",
      description: "Built scalable and maintainable frameworks using Cypress, BDD/Gherkin, JavaScript, Allure reports, and Page Object Model. Focused on behavior-driven development and QA engineering.",
      skills: ["Cypress", "BDD", "JavaScript", "QA Engineering"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      company: "Pfizer",
      role: "Test Engineering Consultant",
      period: "Apr 2020 - Jan 2022",
      location: "Remote",
      type: "Full-time",
      description: "Managed and developed test engineering teams. Implemented automation test strategy using Pytest, Python, Appium, and Robot framework. Set up testing infrastructure as code and CI/CD environments.",
      skills: ["Python", "Pytest", "Appium", "Robot Framework", "CI/CD"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      company: "Epsilon",
      role: "QA Lead",
      period: "Apr 2019 - Apr 2020",
      location: "India",
      type: "Full-time",
      description: "Led QA initiatives and automation strategies. Focused on quality assurance engineering and team leadership across multiple projects.",
      skills: ["QA Engineering", "Leadership", "Test Strategy"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      company: "JRD Systems / Gordon Food Services",
      role: "Senior Lead QA Consultant & JIRA Admin",
      period: "Dec 2014 - Mar 2019",
      location: "Michigan, United States",
      type: "Full-time",
      description: "Worked across various departments including E-Commerce, POS, ORMS, Order management systems, Master data management, Transport and logistics. Developed automation frameworks using Cypress, Pytest, and Appium.",
      skills: ["E-Commerce Testing", "POS Systems", "JIRA Administration", "Mobile Testing"],
      color: "from-indigo-500 to-blue-600"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, parseInt(entry.target.id)]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('[data-timeline-item]');
    timelineItems.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Journey</h2>
            <p className="text-xl text-gray-600">
              A timeline of leadership roles and technical achievements in test automation
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                id={exp.id.toString()}
                data-timeline-item
                className={`relative flex items-start mb-12 transform transition-all duration-700 ${
                  visibleItems.has(exp.id) 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color}`}></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">{exp.company}</h4>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
