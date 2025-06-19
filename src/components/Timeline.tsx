
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
      description: "Leading comprehensive test and release management lifecycle across technical, strategic, and operations domains. Developing testing frameworks, release protocols, and quality standards. Collaborating with DevOps and development teams to optimize deployment pipelines. Establishing long-term goals and KPIs, managing risks, and overseeing resource allocation for optimal delivery.",
      responsibilities: [
        "Develop and implement comprehensive test and release management lifecycle",
        "Define testing frameworks, release protocols, and quality standards", 
        "Select, implement, and maintain test automation tools, CI/CD pipelines, and monitoring systems",
        "Establish long-term goals and KPIs for test and release management framework",
        "Lead governance committees for release readiness and compliance",
        "Coordinate with operations teams for smooth production transitions"
      ],
      skills: ["Workflow Management", "Budgeting", "Automation", "Strategic Planning", "KPI Implementation", "Software Testing", "Continuous Improvement", "Test Engineering", "Management", "Mentoring"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      company: "Dolby.io",
      role: "Test Automation Manager", 
      period: "Jan 2022 - Oct 2024",
      location: "Remote",
      type: "Contract",
      description: "Built scalable and maintainable frameworks using Cypress, BDD/Gherkin, JavaScript, Allure reports, and Page Object Model. Focused on behavior-driven development and QA engineering across enterprise systems including ERP, ETL processes, and payment systems.",
      responsibilities: [
        "Built scalable automation frameworks using Cypress, BDD/Gherkin, JavaScript",
        "Implemented Page Object Model and Allure reporting for maintainable test suites",
        "Developed API testing strategies using REST APIs and JavaScript",
        "Managed CI/CD integration with GitLab for continuous testing",
        "Led performance testing initiatives and data visualization projects"
      ],
      skills: ["Behavior-Driven Development (BDD)", "QA Engineering", "Test Automation", "Enterprise Resource Planning (ERP)", "Extract, Transform, Load (ETL)", "Gitlab", "JavaScript", "Cypress.io", "REST APIs", "Payment Systems", "Performance Testing", "Python", "API Testing", "Selenium WebDriver", "SQL", "Microsoft Power BI"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      company: "Pfizer",
      role: "Test Engineering Consultant (Via Newpage Solutions)",
      period: "Apr 2020 - Jan 2022",
      location: "Remote",
      type: "Full-time",
      description: "Managed and developed test engineering teams and strategies for payment products. Implemented automation test strategy using Pytest, Python, Appium, and Robot framework. Set up testing infrastructure as code and CI/CD environments using GitHub Actions and Jenkins.",
      responsibilities: [
        "Manage, coach, and develop test engineering teams and strategies",
        "Implement automation test strategy using Pytest, Python, Appium, and Robot framework",
        "Setup and manage testing infrastructure as code for on-demand deployments",
        "Develop automated API/Microservices testing using BDD approach",
        "Lead UAT demos and bug triage meetings with stakeholders",
        "Mentor team members in automation and agile QA practices"
      ],
      skills: ["QA Engineering", "Leadership", "Workflow Management", "Cucumber", "Git", "Automation", "Agile Methodologies", "REST APIs", "Behave", "Regression Testing", "Pytest", "Performance Testing", "Test Engineering", "E2E Testing", "Management", "API Testing", "Github Actions", "Selenium WebDriver", "SQL", "Quality Assurance"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      company: "Epsilon",
      role: "QA Lead",
      period: "Apr 2019 - Apr 2020",
      location: "India",
      type: "Full-time",
      description: "Led QA initiatives and automation strategies across enterprise systems. Focused on quality assurance engineering and team leadership for financial services and payment systems projects.",
      responsibilities: [
        "Led QA initiatives and automation strategies for enterprise systems",
        "Managed quality assurance processes for financial services applications",
        "Implemented automation frameworks for payment systems testing",
        "Coordinated cross-functional teams for project delivery"
      ],
      skills: ["QA Engineering", "Leadership", "Enterprise Resource Planning (ERP)", "Business Process", "Cucumber", "Git", "CI", "Automation", "Agile Methodologies", "REST APIs", "Regression Testing", "Payment Systems", "Pytest", "Performance Testing", "Test Engineering", "E2E Testing", "Financial Services", "Appium", "Management", "API Testing", "Selenium WebDriver", "SQL", "Quality Assurance"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      company: "JRD Systems / Gordon Food Services",
      role: "Senior Lead QA Consultant & JIRA Admin",
      period: "Dec 2014 - Mar 2019",
      location: "Michigan, United States",
      type: "Full-time",
      description: "Worked across various departments including E-Commerce, POS, ORMS, Order management systems, Master data management, Transport and logistics. Developed automation frameworks using Cypress, Pytest, and Appium for web, API, and mobile testing.",
      responsibilities: [
        "Led QA efforts across E-Commerce, POS, ORMS, and logistics departments",
        "Developed automation frameworks using Cypress, JavaScript, and Python",
        "Implemented mobile testing strategies using Appium",
        "Managed JIRA administration and workflow optimization",
        "Collaborated with multiple departments for comprehensive testing coverage"
      ],
      skills: ["QA Engineering", "Leadership", "Enterprise Resource Planning (ERP)", "Business Process", "Cucumber", "Git", "CI", "Agile Methodologies", "REST APIs", "Rest Assured", "Regression Testing", "Pytest", "Performance Testing", "E2E Testing", "Financial Services", "Appium", "API Testing", "Github Actions", "Team Leadership", "Selenium WebDriver", "SQL", "Quality Assurance"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      company: "VIAVI Solutions (JDS Uniphase)",
      role: "QA Consultant SFDC, Oracle Apps, QTP and LoadRunner",
      period: "Jun 2014 - Sep 2014",
      location: "Pune, India",
      type: "Full-time",
      description: "Successfully set up testing environments for functional and performance testing. Created hybrid frameworks for functional testing and managed LoadRunner scripts for performance testing of Oracle applications and Salesforce.",
      responsibilities: [
        "Setup testing environments for functional and performance testing",
        "Created automated scripts using QTP and LoadRunner",
        "Developed hybrid frameworks for functional testing",
        "Managed test script versions in Quality Center",
        "Analyzed performance test results and prepared status reports"
      ],
      skills: ["QA Engineering", "Leadership", "Enterprise Resource Planning (ERP)", "Business Process", "Cucumber", "Git", "Agile Methodologies", "REST APIs", "Regression Testing", "Performance Testing", "E2E Testing", "Financial Services", "API Testing", "Team Leadership", "Selenium WebDriver", "Quality Assurance"],
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 7,
      company: "Disruptive Vision (DataQuarter Pvt Ltd)",
      role: "Software Test Lead",
      period: "Nov 2013 - Jun 2014",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Led testing and managed teams for video streaming applications, VODs (Video on Demand), and IPTV solutions. Focused on multimedia application testing and team management.",
      responsibilities: [
        "Led testing efforts for video streaming applications and VOD systems",
        "Managed teams for IPTV solution testing",
        "Implemented testing strategies for multimedia applications",
        "Coordinated quality assurance processes for video platforms"
      ],
      skills: ["QA Engineering", "Leadership", "Business Process", "Cucumber", "Git", "Agile Methodologies", "REST APIs", "Rest Assured", "Regression Testing", "Performance Testing", "Financial Services", "API Testing", "Team Leadership", "Selenium WebDriver", "Quality Assurance"],
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 8,
      company: "Emids",
      role: "Test Lead",
      period: "Feb 2012 - Nov 2013",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Worked as Test Lead in a healthcare-based IT consulting company, focusing on healthcare application testing and quality assurance processes.",
      responsibilities: [
        "Led testing initiatives for healthcare IT applications",
        "Implemented quality assurance processes for healthcare systems",
        "Managed testing teams and coordinated with development teams",
        "Ensured compliance with healthcare industry standards"
      ],
      skills: ["QA Engineering", "Business Process", "Cucumber", "English", "REST APIs", "Rest Assured", "Regression Testing", "Performance Testing", "E2E Testing", "Financial Services", "API Testing", "Team Leadership", "Selenium WebDriver", "Quality Assurance"],
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 9,
      company: "T-Mobile Nederland",
      role: "Senior Test Engineer",
      period: "Jul 2011 - Dec 2011",
      location: "The Randstad, Netherlands",
      type: "Full-time",
      description: "Involved in testing of regression, integration, UAT, enhancements and change requests for billing systems. Handled business analysis and validation for billing, payments & collections systems including Voice and data products.",
      responsibilities: [
        "Performed regression, integration, and UAT testing",
        "Business analysis and validation of billing system changes",
        "Tested billing modules for Voice and data products",
        "Managed testing for payments and collections systems",
        "Worked with Oracle BRM, UNIX, and SQL systems"
      ],
      skills: ["Cucumber", "English", "REST APIs", "Regression Testing", "Performance Testing", "E2E Testing", "Financial Services", "API Testing", "Payments", "Selenium WebDriver", "Quality Assurance"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 10,
      company: "Canon Europe Ltd.",
      role: "Oracle Apps E-Business and Siebel Test Consultant",
      period: "May 2010 - May 2011",
      location: "The Randstad, Netherlands",
      type: "Full-time",
      description: "Comprehensive Oracle Applications and Siebel Contact Center testing including business requirements analysis, test planning, automation, and Quality Center administration. Handled end-to-end performance testing and data validation.",
      responsibilities: [
        "Analyzed business requirements and created comprehensive test plans",
        "Developed automation scripts using QTP and LoadRunner",
        "Administered Quality Center for workflow and user management",
        "Performed end-to-end performance testing with LoadRunner",
        "Validated large volume data loads for Oracle Applications and Siebel",
        "Provided QC training and support to IT and business staff"
      ],
      skills: ["Enterprise Resource Planning (ERP)", "Cucumber", "English", "REST APIs", "Regression Testing", "Performance Testing", "API Testing", "Selenium WebDriver", "Quality Assurance"],
      color: "from-amber-500 to-orange-600"
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
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Journey</h2>
            <p className="text-xl text-gray-600">
              Over 14+ years of leadership roles and technical achievements in test automation and quality engineering
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
                className={`relative flex items-start mb-16 transform transition-all duration-700 ${
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
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                        <h4 className="text-xl font-semibold text-gray-700 mb-3">{exp.company}</h4>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{exp.description}</p>
                    
                    {exp.responsibilities && (
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h5>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-sm leading-relaxed">{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
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
