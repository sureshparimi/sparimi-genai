
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogCard from '@/components/BlogCard';

const JiraCloudBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const blogPosts = [
    {
      title: "ScriptRunner Automation: Transform Your Jira Workflows with Advanced Groovy Scripts",
      description: "Master advanced ScriptRunner techniques to automate complex business processes, create dynamic workflows, and implement sophisticated validation rules that adapt to your organization's unique requirements.",
      author: "Suresh Parimi",
      date: "Dec 25, 2024",
      readTime: "15 min",
      tags: ["ScriptRunner", "Groovy", "Automation", "Workflows"],
      content: "...",
      punchline: "What if your Jira could think and act like your most experienced project manager, 24/7?"
    },
    {
      title: "Jira Cloud REST API Mastery: Building Enterprise-Grade Integrations",
      description: "Deep dive into Jira Cloud REST API architecture, authentication strategies, rate limiting, and building robust integrations that scale with enterprise demands while maintaining optimal performance.",
      author: "Suresh Parimi",
      date: "Dec 23, 2024",
      readTime: "18 min",
      tags: ["REST API", "Integration", "Enterprise", "Scalability"],
      content: "...",
      punchline: "The difference between a good admin and a great one? APIs that work flawlessly under pressure."
    },
    {
      title: "ChatGPT-Powered Jira Analytics: AI-Driven Project Insights and Predictive Dashboards",
      description: "Leverage ChatGPT and OpenAI APIs to create intelligent dashboards that provide predictive analytics, automated reporting, and natural language querying for Jira data visualization.",
      author: "Suresh Parimi",
      date: "Dec 21, 2024",
      readTime: "12 min",
      tags: ["ChatGPT", "Analytics", "AI Dashboards", "Predictive Analytics"],
      content: "...",
      punchline: "When your dashboard starts predicting project risks before your PM does, you know you've leveled up."
    },
    {
      title: "Advanced Permission Schemes: Zero-Trust Security Architecture in Jira Cloud",
      description: "Implement sophisticated permission models using advanced schemes, security levels, and custom field permissions to create a zero-trust security architecture that scales across global enterprises.",
      author: "Suresh Parimi",
      date: "Dec 20, 2024",
      readTime: "14 min",
      tags: ["Security", "Permissions", "Zero-Trust", "Enterprise"],
      content: "...",
      punchline: "Security isn't just about who can't see what – it's about ensuring the right people have exactly the right access at exactly the right time."
    },
    {
      title: "AI-Enhanced Issue Classification: Machine Learning for Automatic Triaging",
      description: "Build intelligent issue classification systems using machine learning algorithms that automatically categorize, prioritize, and route issues based on content analysis and historical patterns.",
      author: "Suresh Parimi",
      date: "Dec 18, 2024",
      readTime: "16 min",
      tags: ["Machine Learning", "Issue Classification", "Automation", "AI"],
      content: "...",
      punchline: "What if every issue that hit your backlog was pre-sorted, pre-prioritized, and pre-assigned before a human even looked at it?"
    },
    {
      title: "Custom Field Architecture: Building Scalable Data Models for Complex Organizations",
      description: "Design and implement sophisticated custom field architectures that support complex organizational structures while maintaining performance, usability, and data integrity across thousands of projects.",
      author: "Suresh Parimi",
      date: "Dec 16, 2024",
      readTime: "13 min",
      tags: ["Custom Fields", "Data Architecture", "Scalability", "Performance"],
      content: "...",
      punchline: "The art of Jira administration isn't in having every field possible – it's in having exactly the right fields that scale infinitely."
    },
    {
      title: "Advanced JQL Mastery: Query Optimization and Performance Tuning",
      description: "Master advanced JQL techniques, query optimization strategies, and performance tuning methods to handle complex searches across millions of issues without compromising system performance.",
      author: "Suresh Parimi",
      date: "Dec 14, 2024",
      readTime: "11 min",
      tags: ["JQL", "Performance", "Query Optimization", "Search"],
      content: "...",
      punchline: "A slow JQL query is like a traffic jam in your brain – everything stops until it's fixed."
    },
    {
      title: "Atlassian Marketplace Strategy: Building and Managing Enterprise Add-on Ecosystems",
      description: "Strategic approach to evaluating, implementing, and managing Atlassian Marketplace add-ons in enterprise environments with focus on security, compliance, and long-term maintainability.",
      author: "Suresh Parimi",
      date: "Dec 12, 2024",
      readTime: "10 min",
      tags: ["Marketplace", "Add-ons", "Enterprise Strategy", "Compliance"],
      content: "...",
      punchline: "The best add-on is the one you don't need because you've architected your Jira so well."
    },
    {
      title: "Multi-Project Portfolio Management: Advanced Configuration Strategies",
      description: "Architect complex multi-project portfolios with sophisticated linking strategies, cross-project dependencies, and automated reporting that provides executive-level visibility across the entire organization.",
      author: "Suresh Parimi",
      date: "Dec 10, 2024",
      readTime: "17 min",
      tags: ["Portfolio Management", "Multi-Project", "Executive Reporting", "Dependencies"],
      content: "...",
      punchline: "Managing one project in Jira is administration. Managing 100+ interconnected projects? That's orchestration."
    },
    {
      title: "Disaster Recovery and Business Continuity: Advanced Backup and Migration Strategies",
      description: "Implement comprehensive disaster recovery solutions with automated backups, cross-cloud migrations, and business continuity planning that ensures zero data loss and minimal downtime scenarios.",
      author: "Suresh Parimi",
      date: "Dec 8, 2024",
      readTime: "19 min",
      tags: ["Disaster Recovery", "Backup", "Migration", "Business Continuity"],
      content: "...",
      punchline: "Hope is not a backup strategy, and neither is crossing your fingers when the server room floods."
    }
  ];

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-orange-300 hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              Jira Cloud Administration
            </h1>
            <p className="text-orange-300 text-lg max-w-2xl mx-auto">
              Advanced Jira administration techniques, ScriptRunner automation, API integrations, and AI-powered solutions for enterprise-level project management.
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
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
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

export default JiraCloudBlog;
