
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
      description: "Explore sophisticated test patterns including the Page Component Model, Test Data Builders, and Dynamic Fixture Management. Learn how to architect maintainable test suites that scale with enterprise applications, handle complex user interactions, and implement smart retry mechanisms that distinguish between genuine failures and environmental hiccups.",
      author: "Suresh Parimi",
      date: "Dec 20, 2024",
      readTime: "15 min",
      tags: ["Playwright", "Testing", "Architecture", "Enterprise"],
      content: "...",
      punchline: "The difference between a test that breaks every deployment and one that catches real bugs? Architecture that thinks ahead."
    },
    {
      title: "Page Object Model Evolution: From Basic to Advanced Component Patterns",
      description: "Master the evolution from traditional POM to Component-based Page Objects, implementing inheritance hierarchies, composition patterns, and lazy-loaded page components. Discover how to create reusable UI components that mirror your application's architecture while maintaining test isolation and reducing maintenance overhead.",
      author: "Suresh Parimi",
      date: "Dec 18, 2024",
      readTime: "12 min",
      tags: ["POM", "Architecture", "Components", "Maintainability"],
      content: "...",
      punchline: "Your Page Objects should evolve with your app, not fight against it – think components, not pages."
    },
    {
      title: "Cross-Browser Testing at Scale: Advanced Parallelization and Device Farms",
      description: "Implement sophisticated cross-browser testing strategies using Playwright's parallel execution capabilities, cloud device farms, and intelligent test distribution. Learn to optimize execution time while maximizing coverage across browsers, devices, and network conditions with advanced configuration management.",
      author: "Suresh Parimi",
      date: "Dec 15, 2024",
      readTime: "18 min",
      tags: ["Cross-Browser", "Parallelization", "Cloud Testing", "Performance"],
      content: "...",
      punchline: "Running tests on one browser is like testing a car in a parking lot – you haven't seen anything yet."
    },
    {
      title: "Visual Testing Mastery: AI-Powered Screenshot Analysis and Regression Detection",
      description: "Leverage Playwright's visual testing capabilities with AI-enhanced image comparison, dynamic masking for volatile content, and intelligent threshold management. Build robust visual regression suites that detect meaningful changes while ignoring acceptable variations in dynamic content.",
      author: "Suresh Parimi",
      date: "Dec 12, 2024",
      readTime: "14 min",
      tags: ["Visual Testing", "AI", "Image Analysis", "Regression"],
      content: "...",
      punchline: "A picture is worth a thousand bugs – but only if you're looking at the right pixels."
    },
    {
      title: "API and UI Integration: Building Hybrid Test Architectures",
      description: "Create comprehensive test suites that seamlessly integrate API and UI testing, implementing data setup through APIs while validating user experiences through the interface. Master the art of test data management, state synchronization, and efficient test execution pipelines.",
      author: "Suresh Parimi",
      date: "Dec 10, 2024",
      readTime: "16 min",
      tags: ["API Testing", "Integration", "Test Architecture", "Data Management"],
      content: "...",
      punchline: "Why choose between API speed and UI reality when you can have both in perfect harmony?"
    },
    {
      title: "Performance Testing with Playwright: Network Interception and Monitoring",
      description: "Utilize Playwright's network interception capabilities to implement comprehensive performance testing, including resource timing analysis, network throttling simulation, and automated performance regression detection. Build performance budgets that fail builds when thresholds are exceeded.",
      author: "Suresh Parimi",
      date: "Dec 8, 2024",
      readTime: "13 min",
      tags: ["Performance", "Network", "Monitoring", "Budgets"],
      content: "...",
      punchline: "Speed isn't just a feature – it's the difference between users who stay and users who leave."
    },
    {
      title: "Advanced Selectors and Dynamic Content Handling",
      description: "Master complex selector strategies for dynamic applications, including data-testid patterns, role-based selection, and handling of shadow DOM elements. Implement robust waiting strategies that adapt to modern framework rendering patterns and asynchronous content loading.",
      author: "Suresh Parimi",
      date: "Dec 5, 2024",
      readTime: "11 min",
      tags: ["Selectors", "Dynamic Content", "Shadow DOM", "Async"],
      content: "...",
      punchline: "The best selector is the one that finds your element tomorrow, even when developers refactor today."
    },
    {
      title: "CI/CD Pipeline Mastery: Advanced Playwright Integration Patterns",
      description: "Build sophisticated CI/CD pipelines with intelligent test distribution, parallel execution across multiple environments, and smart failure analysis. Implement advanced reporting with trend analysis, flaky test detection, and automatic issue creation for test failures.",
      author: "Suresh Parimi",
      date: "Dec 3, 2024",
      readTime: "17 min",
      tags: ["CI/CD", "Pipeline", "DevOps", "Reporting"],
      content: "...",
      punchline: "A CI/CD pipeline without smart testing is like a race car without brakes – fast until it crashes."
    },
    {
      title: "Mobile and Responsive Testing: Advanced Device Emulation Strategies",
      description: "Implement comprehensive mobile testing strategies using Playwright's device emulation, including custom device configurations, network condition simulation, and responsive design validation. Create test suites that ensure consistent experiences across the entire device ecosystem.",
      author: "Suresh Parimi",
      date: "Dec 1, 2024",
      readTime: "15 min",
      tags: ["Mobile Testing", "Responsive", "Device Emulation", "UX"],
      content: "...",
      punchline: "Mobile-first isn't just design philosophy – it's testing reality in a world where thumbs rule the screen."
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
              Advanced techniques, architectural patterns, and enterprise-level strategies for building resilient, scalable test automation with Playwright.
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
