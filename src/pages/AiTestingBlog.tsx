
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogCard from '@/components/BlogCard';

const AiTestingBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const blogPosts = [
    {
      title: "AI-Powered Test Generation: The Future of QA",
      description: "Discover how artificial intelligence is revolutionizing test case generation and reducing manual testing effort by up to 80%.",
      author: "Suresh Parimi",
      date: "Dec 22, 2024",
      readTime: "10 min",
      tags: ["AI Testing", "Test Generation", "Automation", "Machine Learning"],
      content: "..."
    },
    {
      title: "Machine Learning for Bug Prediction and Prevention",
      description: "Learn how ML algorithms can analyze code patterns to predict potential bugs before they reach production environments.",
      author: "Suresh Parimi",
      date: "Dec 19, 2024",
      readTime: "12 min",
      tags: ["Machine Learning", "Bug Prediction", "Quality Assurance", "AI"],
      content: "..."
    },
    {
      title: "Intelligent Test Maintenance with AI Assistants",
      description: "Explore how AI can automatically maintain and update test suites as applications evolve, reducing maintenance overhead.",
      author: "Suresh Parimi",
      date: "Dec 17, 2024",
      readTime: "8 min",
      tags: ["Test Maintenance", "AI Assistant", "Automation", "Efficiency"],
      content: "..."
    },
    {
      title: "Natural Language Processing in Test Case Design",
      description: "Transform business requirements written in natural language into executable test cases using advanced NLP techniques.",
      author: "Suresh Parimi",
      date: "Dec 14, 2024",
      readTime: "9 min",
      tags: ["NLP", "Test Design", "Requirements", "AI"],
      content: "..."
    },
    {
      title: "Computer Vision for UI Testing Automation",
      description: "Implement computer vision algorithms to create more robust UI tests that can adapt to visual changes automatically.",
      author: "Suresh Parimi",
      date: "Dec 11, 2024",
      readTime: "11 min",
      tags: ["Computer Vision", "UI Testing", "Visual Recognition", "Automation"],
      content: "..."
    },
    {
      title: "Anomaly Detection in Test Results Using AI",
      description: "Use machine learning to identify unusual patterns in test results and catch issues that traditional testing might miss.",
      author: "Suresh Parimi",
      date: "Dec 9, 2024",
      readTime: "7 min",
      tags: ["Anomaly Detection", "Test Analysis", "Pattern Recognition", "AI"],
      content: "..."
    },
    {
      title: "Self-Healing Test Scripts with Machine Learning",
      description: "Build test scripts that can automatically adapt and fix themselves when application elements change.",
      author: "Suresh Parimi",
      date: "Dec 6, 2024",
      readTime: "10 min",
      tags: ["Self-Healing", "Adaptive Testing", "ML", "Robustness"],
      content: "..."
    },
    {
      title: "AI-Driven Performance Testing and Optimization",
      description: "Leverage AI to optimize performance testing strategies and automatically identify performance bottlenecks.",
      author: "Suresh Parimi",
      date: "Dec 4, 2024",
      readTime: "13 min",
      tags: ["Performance Testing", "AI Optimization", "Bottleneck Detection", "Analysis"],
      content: "..."
    },
    {
      title: "Chatbot Testing with Conversational AI",
      description: "Specialized techniques for testing AI-powered chatbots and conversational interfaces using automated approaches.",
      author: "Suresh Parimi",
      date: "Dec 2, 2024",
      readTime: "8 min",
      tags: ["Chatbot Testing", "Conversational AI", "NLP Testing", "Bot QA"],
      content: "..."
    }
  ];

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              AI-Powered Testing
            </h1>
            <p className="text-blue-300 text-lg max-w-2xl mx-auto">
              Explore how artificial intelligence is transforming software testing, quality assurance, and bug detection methodologies.
            </p>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
          
          {visiblePosts < blogPosts.length && (
            <div className="text-center mb-8">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Load More Articles
              </button>
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default AiTestingBlog;
