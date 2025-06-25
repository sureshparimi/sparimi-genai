
import React from 'react';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlaywrightBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 animate-pulse">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 animate-scale-in">
              Coming Soon
            </h1>
            <h2 className="text-2xl text-purple-300 mb-6">
              Playwright Mastery Blog
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Dive deep into advanced Playwright automation techniques, best practices, 
              and real-world testing scenarios. Expert insights and practical tutorials 
              to master end-to-end testing.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-purple-300 mb-8">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Launching in early 2025</span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-2">What to Expect:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Advanced Playwright automation patterns</li>
                <li>• Performance testing strategies</li>
                <li>• CI/CD integration best practices</li>
                <li>• Real-world case studies</li>
              </ul>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
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

export default PlaywrightBlog;
