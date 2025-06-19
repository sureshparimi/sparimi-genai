import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = [
    "Test & Release Manager",
    "Automation Architect", 
    "QA Leadership Expert",
    "Gen AI Enthusiast"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className={`container mx-auto px-6 text-center text-white z-10 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Suresh Parimi
          </h1>
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-gray-300">
            <a 
              href="mailto:reachparimi@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              reachparimi@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/suresh-parimi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Uithoorn, Netherlands
            </div>
          </div>

          {/* Open to Work Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-semibold text-sm">Open to Work</span>
          </div>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 transition-all duration-500">
              {roles[currentRole]}
            </p>
          </div>

          {/* Current Focus - Attention Grabber */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 mb-8 border border-purple-500/30">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Currently Pioneering</h3>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <a 
                href="/playwright-blog" 
                className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <h4 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300">🎭 Playwright Mastery</h4>
                <p className="text-sm text-gray-300 group-hover:text-gray-200">Building next-gen test automation frameworks with advanced Playwright patterns and AI-enhanced test generation</p>
                <div className="mt-2 text-xs text-blue-400 group-hover:text-blue-300">Read my blog →</div>
              </a>
              <a 
                href="/ai-testing-blog" 
                className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <h4 className="font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">🤖 AI-Powered Testing</h4>
                <p className="text-sm text-gray-300 group-hover:text-gray-200">Implementing intelligent test case generation, self-healing tests, and AI-driven quality insights</p>
                <div className="mt-2 text-xs text-emerald-400 group-hover:text-emerald-300">Watch videos →</div>
              </a>
              <a 
                href="/genai-blog" 
                className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <h4 className="font-semibold text-purple-400 mb-2 group-hover:text-purple-300">🧠 GenAI Integration</h4>
                <p className="text-sm text-gray-300 group-hover:text-gray-200">Leveraging LLMs and GenAI for automated test documentation, bug analysis, and QA process optimization</p>
                <div className="mt-2 text-xs text-purple-400 group-hover:text-purple-300">Explore content →</div>
              </a>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading test automation architecture and QA transformation across Fintech, Healthcare, 
            and E-commerce domains. Passionate about AI-driven testing and DevOps integration.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/suresh-parimi" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/sureshparimi" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:reachparimi@gmail.com" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Explore My Work
            </button>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
