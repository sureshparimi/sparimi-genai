import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogCard from '@/components/BlogCard';
import ArticleView from '@/components/ArticleView';

const PlaywrightBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const blogPosts = [
    {
      title: "Advanced Playwright Test Patterns for Modern Web Apps",
      description: "Explore sophisticated test patterns including the Page Component Model, Test Data Builders, and Dynamic Fixture Management. Learn how to architect maintainable test suites that scale with enterprise applications, handle complex user interactions, and implement smart retry mechanisms that distinguish between genuine failures and environmental hiccups.",
      author: "Suresh Parimi",
      date: "Dec 20, 2024",
      readTime: "15 min",
      tags: ["Playwright", "Testing", "Architecture", "Enterprise"],
      content: `
        <h2>Introduction to Advanced Playwright Patterns</h2>
        <p>Modern web applications demand sophisticated testing strategies that go beyond basic automation. This article explores advanced Playwright patterns that enterprise teams use to build maintainable, scalable test suites.</p>
        
        <h3>Page Component Model Implementation</h3>
        <p>The Page Component Model extends traditional Page Object Model by treating page elements as composable components:</p>
        
        <pre><code class="language-typescript">
// components/LoginForm.ts
export class LoginForm {
  constructor(private page: Page) {}
  
  async fillCredentials(username: string, password: string) {
    await this.page.fill('[data-testid="username"]', username);
    await this.page.fill('[data-testid="password"]', password);
  }
  
  async submit() {
    await this.page.click('[data-testid="login-button"]');
    await this.page.waitForURL('**/dashboard');
  }
}
        </code></pre>
        
        <h3>Dynamic Fixture Management</h3>
        <p>Advanced fixture patterns allow for dynamic test data creation and cleanup:</p>
        
        <pre><code class="language-typescript">
// fixtures/userFixture.ts
import { test as base } from '@playwright/test';

type UserFixture = {
  authenticatedUser: {
    page: Page;
    user: UserData;
  };
};

export const test = base.extend<UserFixture>({
  authenticatedUser: async ({ page }, use) => {
    const user = await createTestUser();
    await loginAs(page, user);
    await use({ page, user });
    await cleanupUser(user.id);
  },
});
        </code></pre>
        
        <h3>Smart Retry Mechanisms</h3>
        <p>Implement intelligent retry logic that distinguishes between real failures and environmental issues:</p>
        
        <pre><code class="language-typescript">
// utils/smartRetry.ts
export async function withSmartRetry<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { maxRetries = 3, backoff = 1000 } = options;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries || !isRetryableError(error)) {
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, backoff * attempt));
    }
  }
}
        </code></pre>
      `,
      punchline: "The difference between a test that breaks every deployment and one that catches real bugs? Architecture that thinks ahead."
    },
    {
      title: "Page Object Model Evolution: From Basic to Advanced Component Patterns",
      description: "Master the evolution from traditional POM to Component-based Page Objects, implementing inheritance hierarchies, composition patterns, and lazy-loaded page components. Discover how to create reusable UI components that mirror your application's architecture while maintaining test isolation and reducing maintenance overhead.",
      author: "Suresh Parimi",
      date: "Dec 18, 2024",
      readTime: "12 min",
      tags: ["POM", "Architecture", "Components", "Maintainability"],
      content: `
        <h2>Evolution of Page Object Model</h2>
        <p>Traditional Page Object Model served us well, but modern applications require more sophisticated patterns that mirror component-based architectures.</p>
        
        <pre><code class="language-typescript">
// Traditional POM approach
class LoginPage {
  constructor(private page: Page) {}
  
  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-btn');
  }
}
        </code></pre>
        
        <h3>Component-Based Page Objects</h3>
        <p>Modern approach treats UI elements as composable components:</p>
        
        <pre><code class="language-typescript">
// Component-based approach
class FormComponent {
  constructor(private page: Page, private selector: string) {}
  
  async fillField(fieldName: string, value: string) {
    await this.page.fill(\`\${this.selector} [data-field="\${fieldName}"]\`, value);
  }
}

class LoginPage {
  private loginForm: FormComponent;
  
  constructor(private page: Page) {
    this.loginForm = new FormComponent(page, '[data-testid="login-form"]');
  }
  
  async login(credentials: LoginCredentials) {
    await this.loginForm.fillField('username', credentials.username);
    await this.loginForm.fillField('password', credentials.password);
    await this.submitForm();
  }
}
        </code></pre>
      `,
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

  const handleArticleClick = (post: any) => {
    setSelectedArticle(post);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <ArticleView
          title={selectedArticle.title}
          author={selectedArticle.author}
          date={selectedArticle.date}
          readTime={selectedArticle.readTime}
          tags={selectedArticle.tags}
          content={selectedArticle.content}
          punchline={selectedArticle.punchline}
          onBack={handleBackToList}
        />
      </div>
    );
  }

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
                <BlogCard {...post} onClick={() => handleArticleClick(post)} />
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
