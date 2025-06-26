
import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
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
  const handleWhatsAppCTA = () => {
    const phoneNumber = "31616270233";
    const message = `Hi Suresh, I'm interested in discussing "${title}". Could you help me understand how this can be implemented in my organization? I'd like to schedule a consultation.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
          dangerouslySetInnerHTML={{ __html: content }}
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
