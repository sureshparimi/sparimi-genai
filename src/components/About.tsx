
import React from 'react';
import { TestTube2, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: TestTube2,
      title: "AI in Testing",
      description: "Applying AI/ML to reduce flakiness, improve test coverage, and optimize test execution"
    },
    {
      icon: Target,
      title: "TestOps & Observability", 
      description: "Enabling real-time test insights, proactive quality monitoring, and faster release feedback loops"
    },
    {
      icon: Zap,
      title: "DevOps Integration",
      description: "Driving shift-left testing with CI/CD pipelines across Web, Mobile, API & Microservices"
    },
    {
      icon: Users,
      title: "Strategic QA Leadership",
      description: "Test management, roadmap planning, tool/vendor evaluation, and portfolio-level governance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Test Automation Architect & QA Leader
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As a Test Automation Architect with extensive experience in QA leadership, test management, 
              automation strategy, and release governance across domains including Fintech, Healthcare, 
              E-commerce, and Sales, Offers & Contracts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">My Mission</h3>
            <p className="text-lg leading-relaxed">
              I'm passionate about creating future-ready, intelligent QA ecosystems that blend automation, 
              observability, and strategic oversight to deliver fast, stable, and high-quality software. 
              I lead end-to-end test and release management—covering everything from test strategy, planning, 
              automation architecture, and portfolio-level QA engagement to vendor/tool selection and go-live decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
