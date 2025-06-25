import React from 'react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      let targetSelector = href;
      
      // Map specific navigation items to their target sections
      if (href === '#skills') {
        // Look for the "Technical Expertise" heading
        const expertiseElement = document.querySelector('[id="skills"]') || 
                                document.querySelector('h2:contains("Technical Expertise")') ||
                                document.querySelector('#skills');
        if (expertiseElement) {
          expertiseElement.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
          return;
        }
      }
      
      if (href === '#projects') {
        // Look for the "Featured Projects" heading
        const projectsElement = document.querySelector('[id="projects"]') || 
                               document.querySelector('h2:contains("Featured Projects")') ||
                               document.querySelector('#projects');
        if (projectsElement) {
          projectsElement.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
          return;
        }
      }
      
      // Default behavior for other sections
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { 
      name: 'Content', 
      href: '#content',
      subItems: [
        { name: 'Playwright Mastery', href: '/playwright-blog' },
        { name: 'AI-Powered Testing', href: '/ai-testing-blog' },
        { name: 'GenAI Integration', href: '/genai-blog' }
      ]
    },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-xl">
            Suresh Parimi
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
                {item.subItems && (
                  <div className="ml-4">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-1 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
