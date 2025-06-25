
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogCard from '@/components/BlogCard';

const PlaywrightBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const blogPosts = [
    {
      title: "Advanced Playwright Test Patterns for Modern Web Apps",
      description: "Explore sophisticated test patterns and best practices for building maintainable and reliable Playwright test suites in complex applications.",
      author: "Suresh Parimi",
      date: "Dec 20, 2024",
      readTime: "8 min",
      tags: ["Playwright", "Testing", "Automation", "Best Practices"],
      content: "..."
    },
    {
      title: "Page Object Model Evolution in Playwright",
      description: "Learn how to implement and evolve the Page Object Model pattern in Playwright for better test maintainability and code reusability.",
      author: "Suresh Parimi",
      date: "Dec 18, 2024",
      readTime: "6 min",
      tags: ["Playwright", "POM", "Architecture", "Testing"],
      content: "..."
    },
    {
      title: "Cross-Browser Testing Strategies with Playwright",
      description: "Master cross-browser testing techniques and discover how to optimize your test suite for different browsers and devices.",
      author: "Suresh Parimi",
      date: "Dec 15, 2024",
      readTime: "10 min",
      tags: ["Cross-Browser", "Testing", "Playwright", "Strategy"],
      content: "..."
    },
    {
      title: "Visual Testing and Screenshot Comparison in Playwright",
      description: "Implement robust visual regression testing using Playwright's screenshot capabilities and learn advanced comparison techniques.",
      author: "Suresh Parimi",
      date: "Dec 12, 2024",
      readTime: "7 min",
      tags: ["Visual Testing", "Screenshots", "Regression", "Playwright"],
      content: "..."
    },
    {
      title: "API Testing Integration with Playwright",
      description: "Combine UI and API testing in a single Playwright test suite for comprehensive end-to-end coverage.",
      author: "Suresh Parimi",
      date: "Dec 10, 2024",
      readTime: "9 min",
      tags: ["API Testing", "Integration", "E2E", "Playwright"],
      content: "..."
    },
    {
      title: "Performance Testing with Playwright Network APIs",
      description: "Leverage Playwright's network interception capabilities to perform performance testing and optimize your web applications.",
      author: "Suresh Parimi",
      date: "Dec 8, 2024",
      readTime: "12 min",
      tags: ["Performance", "Network", "Optimization", "Testing"],
      content: "..."
    },
    {
      title: "Advanced Selectors and Locator Strategies",
      description: "Master complex selector strategies and learn when to use different locator types for robust test automation.",
      author: "Suresh Parimi",
      date: "Dec 5, 2024",
      readTime: "8 min",
      tags: ["Selectors", "Locators", "DOM", "Automation"],
      content: "..."
    },
    {
      title: "CI/CD Pipeline Integration for Playwright Tests",
      description: "Build robust CI/CD pipelines that effectively run Playwright tests with proper reporting and failure handling.",
      author: "Suresh Parimi",
      date: "Dec 3, 2024",
      readTime: "11 min",
      tags: ["CI/CD", "Pipeline", "DevOps", "Automation"],
      content: "..."
    },
    {
      title: "Mobile Testing with Playwright Device Emulation",
      description: "Comprehensive guide to mobile testing using Playwright's device emulation features and responsive design testing.",
      author: "Suresh Parimi",
      date: "Dec 1, 2024",
      readTime: "9 min",
      tags: ["Mobile Testing", "Responsive", "Emulation", "Devices"],
      content: "..."
    }
  ];

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              Playwright Mastery
            </h1>
            <p className="text-purple-300 text-lg max-w-2xl mx-auto">
              Advanced techniques, best practices, and real-world insights for mastering Playwright automation testing.
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
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
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

export default PlaywrightBlog;
