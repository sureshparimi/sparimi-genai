
import React, { useEffect } from 'react';
import { ArrowLeft, MessageCircle, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArticleViewProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  punchline?: string;
  onBack: () => void;
}

const ArticleView = ({ title, author, date, readTime, tags, content, punchline, onBack }: ArticleViewProps) => {
  const [copiedStates, setCopiedStates] = React.useState<{ [key: number]: boolean }>({});

  const handleWhatsAppCTA = () => {
    const phoneNumber = "31616270233";
    const message = `Hi Suresh, I'm interested in discussing "${title}". Could you help me understand how this can be implemented in my organization? I'd like to schedule a consultation.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [index]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [index]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const enhanceCodeBlocks = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const codeBlocks = doc.querySelectorAll('pre code, pre');
    
    codeBlocks.forEach((block, index) => {
      const codeElement = block.tagName === 'CODE' ? block : block.querySelector('code') || block;
      const codeText = codeElement.textContent || '';
      const language = codeElement.className.match(/language-(\w+)/)?.[1] || 'text';
      
      // Create wrapper div
      const wrapper = doc.createElement('div');
      wrapper.className = 'code-block-wrapper bg-gray-900 rounded-lg overflow-hidden border border-gray-700 my-4';
      
      // Create header
      const header = doc.createElement('div');
      header.className = 'flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700';
      header.innerHTML = `
        <span class="text-gray-300 text-sm font-medium">${language}</span>
        <button 
          class="copy-btn flex items-center gap-2 px-3 py-1 text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors" 
          data-code="${encodeURIComponent(codeText)}"
          data-index="${index}"
        >
          <svg class="copy-icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <svg class="check-icon w-4 h-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
          <span class="copy-text">Copy</span>
        </button>
      `;
      
      // Create code container
      const codeContainer = doc.createElement('div');
      codeContainer.className = 'relative';
      
      const pre = doc.createElement('pre');
      pre.className = 'bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm leading-relaxed';
      
      const code = doc.createElement('code');
      code.className = `language-${language}`;
      code.textContent = codeText;
      
      pre.appendChild(code);
      codeContainer.appendChild(pre);
      
      wrapper.appendChild(header);
      wrapper.appendChild(codeContainer);
      
      // Replace original block
      const parent = block.closest('pre') || block;
      parent.parentNode?.replaceChild(wrapper, parent);
    });
    
    return doc.body.innerHTML;
  };

  useEffect(() => {
    const handleCopyClick = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const codeText = decodeURIComponent(button.dataset.code || '');
      const index = parseInt(button.dataset.index || '0');
      
      copyToClipboard(codeText, index);
      
      // Visual feedback
      const copyIcon = button.querySelector('.copy-icon');
      const checkIcon = button.querySelector('.check-icon');
      const copyText = button.querySelector('.copy-text');
      
      if (copyIcon && checkIcon && copyText) {
        copyIcon.classList.add('hidden');
        checkIcon.classList.remove('hidden');
        copyText.textContent = 'Copied!';
        
        setTimeout(() => {
          copyIcon.classList.remove('hidden');
          checkIcon.classList.add('hidden');
          copyText.textContent = 'Copy';
        }, 2000);
      }
    };

    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
      button.addEventListener('click', handleCopyClick);
    });

    return () => {
      copyButtons.forEach(button => {
        button.removeEventListener('click', handleCopyClick);
      });
    };
  }, [content]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Button
        onClick={onBack}
        variant="ghost"
        className="mb-6 text-white hover:text-gray-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Articles
      </Button>
      
      <article className="prose prose-invert prose-lg max-w-none">
        {punchline && (
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-lg border-l-4 border-blue-500">
            <p className="text-xl font-medium text-blue-300 italic text-center">"{punchline}"</p>
          </div>
        )}
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <div className="flex items-center gap-4 text-gray-300 mb-4">
            <span>By {author}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime} read</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        
        <div 
          className="text-gray-200 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: enhanceCodeBlocks(content) }}
        />
        
        {/* WhatsApp CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-emerald-500/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Testing Strategy?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how these advanced techniques can be implemented in your organization. 
              I provide tailored consulting sessions to help you achieve testing excellence.
            </p>
            <Button
              onClick={handleWhatsAppCTA}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Let's Discuss This Topic
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              Click to start a WhatsApp conversation about "{title}"
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleView;
