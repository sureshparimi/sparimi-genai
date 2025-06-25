
import React from 'react';
import { ArrowLeft, Clock, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiTestingBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 animate-pulse">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 animate-scale-in">
              Coming Soon
            </h1>
            <h2 className="text-2xl text-blue-300 mb-6">
              AI-Powered Testing Blog
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Explore the future of software testing with AI and machine learning. 
              Discover how artificial intelligence is revolutionizing test automation, 
              quality assurance, and bug detection.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-blue-300 mb-8">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Launching in early 2025</span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-2">What to Expect:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• AI-driven test generation techniques</li>
                <li>• Machine learning for bug prediction</li>
                <li>• Intelligent test maintenance strategies</li>
                <li>• Future of automated testing</li>
              </ul>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTestingBlog;
