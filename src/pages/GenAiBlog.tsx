
import React from 'react';
import { ArrowLeft, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const GenAiBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6 animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 animate-scale-in">
              Coming Soon
            </h1>
            <h2 className="text-2xl text-emerald-300 mb-6">
              GenAI Integration Blog
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Learn how to integrate Generative AI into your software development 
              and testing workflows. Practical guides, code examples, and best 
              practices for leveraging AI tools effectively.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-emerald-300 mb-8">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Launching in early 2025</span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-2">What to Expect:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• GenAI integration patterns</li>
                <li>• Code generation best practices</li>
                <li>• AI-assisted testing workflows</li>
                <li>• Productivity enhancement techniques</li>
              </ul>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
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

export default GenAiBlog;
