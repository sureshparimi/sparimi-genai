
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogCard from '@/components/BlogCard';

const GenAiBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const blogPosts = [
    {
      title: "Advanced ChatGPT Integration: Building AI-Powered Testing Workflows",
      description: "Master advanced ChatGPT integration patterns for test automation, including custom GPT models fine-tuned for testing scenarios, API integration strategies, and building conversational interfaces for test case generation. Explore prompt engineering techniques that consistently generate high-quality test scenarios and edge cases.",
      author: "Suresh Parimi",
      date: "Dec 23, 2024",
      readTime: "16 min",
      tags: ["ChatGPT", "GPT-4", "API Integration", "Prompt Engineering"],
      content: "...",
      punchline: "The difference between using ChatGPT and mastering it? Knowing how to make it think like your best tester."
    },
    {
      title: "Intelligent Code Generation: AI-Driven Test Script Creation and Optimization",
      description: "Leverage large language models for automated test script generation, code optimization, and refactoring. Implement sophisticated prompt chains that transform business requirements into production-ready test automation code, complete with error handling, logging, and maintainability features.",
      author: "Suresh Parimi",
      date: "Dec 21, 2024",
      readTime: "14 min",
      tags: ["Code Generation", "LLM", "Test Scripts", "Automation"],
      content: "...",
      punchline: "When AI writes better test code than junior developers, it's not replacing them – it's teaching them."
    },
    {
      title: "AI-Powered Code Review: Intelligent Quality Gates and Technical Debt Detection",
      description: "Build sophisticated AI-powered code review systems that analyze test code quality, identify potential maintenance issues, and suggest improvements. Implement intelligent quality gates that use machine learning to assess code complexity, test coverage effectiveness, and architectural compliance.",
      author: "Suresh Parimi",
      date: "Dec 18, 2024",
      readTime: "12 min",
      tags: ["Code Review", "Quality Gates", "Technical Debt", "AI Analysis"],
      content: "...",
      punchline: "Code review by humans catches bugs; code review by AI catches the patterns that create bugs."
    },
    {
      title: "Advanced Prompt Engineering: Crafting Perfect Testing Scenarios with GenAI",
      description: "Master the art and science of prompt engineering for testing applications. Learn advanced techniques like few-shot learning, chain-of-thought prompting, and persona-based scenario generation. Build prompt libraries that consistently generate comprehensive test cases, edge cases, and security scenarios.",
      author: "Suresh Parimi",
      date: "Dec 16, 2024",
      readTime: "18 min",
      tags: ["Prompt Engineering", "Test Scenarios", "Few-Shot Learning", "GenAI"],
      content: "...",
      punchline: "Great testers ask great questions; great prompt engineers teach AI to ask even better ones."
    },
    {
      title: "Building AI Test Oracles: Intelligent Validation and Expected Result Generation",
      description: "Create sophisticated AI-powered test oracles that dynamically determine expected outcomes for complex business scenarios. Implement machine learning models that understand business rules, validate data transformations, and generate context-aware assertions for comprehensive test validation.",
      author: "Suresh Parimi",
      date: "Dec 13, 2024",
      readTime: "15 min",
      tags: ["Test Oracles", "AI Validation", "Business Rules", "Dynamic Assertions"],
      content: "...",
      punchline: "The hardest part of testing isn't finding bugs – it's knowing what 'correct' looks like. AI oracles solve that."
    },
    {
      title: "GenAI for API Testing: Intelligent Contract Testing and Documentation",
      description: "Utilize generative AI for comprehensive API testing strategy, including automatic test case generation from OpenAPI specs, intelligent contract testing, and dynamic documentation generation. Build AI systems that understand API semantics and generate meaningful integration test scenarios.",
      author: "Suresh Parimi",
      date: "Dec 10, 2024",
      readTime: "13 min",
      tags: ["API Testing", "Contract Testing", "OpenAPI", "Documentation"],
      content: "...",
      punchline: "APIs are contracts between systems – GenAI makes sure both sides honor the agreement."
    },
    {
      title: "Synthetic Test Data Generation: LLMs for Realistic and Diverse Data Creation",
      description: "Harness the power of large language models to generate realistic, diverse, and GDPR-compliant test data. Implement advanced data generation strategies that create contextually appropriate test datasets, handle complex relationships, and maintain referential integrity across distributed systems.",
      author: "Suresh Parimi",
      date: "Dec 7, 2024",
      readTime: "17 min",
      tags: ["Test Data", "Synthetic Data", "GDPR Compliance", "Data Relationships"],
      content: "...",
      punchline: "Real data has privacy issues; fake data lacks realism. AI-generated data gives you the best of both worlds."
    },
    {
      title: "Intelligent Bug Analysis: AI-Enhanced Defect Triage and Root Cause Analysis",
      description: "Implement advanced AI systems for automated bug report analysis, intelligent defect classification, and root cause identification. Build machine learning models that analyze stack traces, log patterns, and code changes to provide actionable insights for faster defect resolution.",
      author: "Suresh Parimi",
      date: "Dec 5, 2024",
      readTime: "14 min",
      tags: ["Bug Analysis", "Defect Triage", "Root Cause Analysis", "Machine Learning"],
      content: "...",
      punchline: "Every bug tells a story – AI just happens to be really good at reading between the lines."
    },
    {
      title: "Conversational Testing Interfaces: Building AI Chatbots for QA Teams",
      description: "Develop sophisticated conversational interfaces that allow non-technical stakeholders to interact with testing systems through natural language. Build AI-powered chatbots that can execute tests, interpret results, generate reports, and provide intelligent recommendations for quality improvement.",
      author: "Suresh Parimi",
      date: "Dec 3, 2024",
      readTime: "11 min",
      tags: ["Conversational AI", "Chatbots", "Natural Language", "Stakeholder Engagement"],
      content: "...",
      punchline: "When your product manager can ask your test suite questions in plain English, testing becomes truly collaborative."
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
              Revolutionary applications of generative AI in software development and testing, from intelligent code generation to conversational quality assurance systems.
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
