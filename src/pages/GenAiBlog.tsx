
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogCard from '@/components/BlogCard';

const GenAiBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const blogPosts = [
    {
      title: "Integrating ChatGPT and GPT-4 into Testing Workflows",
      description: "Practical guide to leveraging large language models for test case generation, code review, and quality assurance processes.",
      author: "Suresh Parimi",
      date: "Dec 23, 2024",
      readTime: "12 min",
      tags: ["ChatGPT", "GPT-4", "LLM", "Testing Integration"],
      content: "..."
    },
    {
      title: "Code Generation for Test Automation with GenAI",
      description: "Learn how to use generative AI to automatically create test scripts, reduce development time, and improve test coverage.",
      author: "Suresh Parimi",
      date: "Dec 21, 2024",
      readTime: "10 min",
      tags: ["Code Generation", "GenAI", "Test Automation", "Productivity"],
      content: "..."
    },
    {
      title: "AI-Assisted Code Review and Quality Gates",
      description: "Implement AI-powered code review processes that can identify potential issues and suggest improvements automatically.",
      author: "Suresh Parimi",
      date: "Dec 18, 2024",
      readTime: "9 min",
      tags: ["Code Review", "Quality Gates", "AI Assistant", "Development"],
      content: "..."
    },
    {
      title: "Prompt Engineering for Testing Scenarios",
      description: "Master the art of crafting effective prompts to generate comprehensive test scenarios and edge cases using GenAI.",
      author: "Suresh Parimi",
      date: "Dec 16, 2024",
      readTime: "8 min",
      tags: ["Prompt Engineering", "Test Scenarios", "GenAI", "Best Practices"],
      content: "..."
    },
    {
      title: "Building AI-Powered Test Oracles",
      description: "Create intelligent test oracles that can automatically determine expected outcomes and validate complex system behaviors.",
      author: "Suresh Parimi",
      date: "Dec 13, 2024",
      readTime: "11 min",
      tags: ["Test Oracles", "AI Validation", "System Testing", "Automation"],
      content: "..."
    },
    {
      title: "GenAI for API Testing and Documentation",
      description: "Automatically generate API tests and comprehensive documentation using generative AI tools and techniques.",
      author: "Suresh Parimi",
      date: "Dec 10, 2024",
      readTime: "7 min",
      tags: ["API Testing", "Documentation", "GenAI", "Automation"],
      content: "..."
    },
    {
      title: "Intelligent Test Data Generation with LLMs",
      description: "Use large language models to create realistic, diverse, and comprehensive test data for various testing scenarios.",
      author: "Suresh Parimi",
      date: "Dec 7, 2024",
      readTime: "9 min",
      tags: ["Test Data", "LLM", "Data Generation", "Testing"],
      content: "..."
    },
    {
      title: "AI-Enhanced Bug Report Analysis and Triage",
      description: "Streamline bug report processing using GenAI to automatically categorize, prioritize, and assign defects efficiently.",
      author: "Suresh Parimi",
      date: "Dec 5, 2024",
      readTime: "8 min",
      tags: ["Bug Triage", "Report Analysis", "AI Processing", "Quality Management"],
      content: "..."
    },
    {
      title: "Conversational Testing with AI Chatbots",
      description: "Develop conversational interfaces for test execution and reporting, making testing more accessible to non-technical stakeholders.",
      author: "Suresh Parimi",
      date: "Dec 3, 2024",
      readTime: "10 min",
      tags: ["Conversational Testing", "Chatbots", "Stakeholder Engagement", "AI Interface"],
      content: "..."
    }
  ];

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              GenAI Integration
            </h1>
            <p className="text-emerald-300 text-lg max-w-2xl mx-auto">
              Harness the power of generative AI in your development and testing workflows with practical guides and best practices.
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
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
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

export default GenAiBlog;
