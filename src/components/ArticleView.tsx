
import React from 'react';
import { ArrowLeft } from 'lucide-react';
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
      </article>
    </div>
  );
};

export default ArticleView;
