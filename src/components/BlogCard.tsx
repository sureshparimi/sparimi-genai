
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  punchline?: string;
}

const BlogCard = ({ title, description, author, date, readTime, tags, punchline }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
      <CardHeader className="flex-1">
        {punchline && (
          <div className="mb-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-medium text-blue-700 italic">"{punchline}"</p>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <User className="w-4 h-4" />
          <span>{author}</span>
          <span>•</span>
          <Clock className="w-4 h-4" />
          <span>{readTime} read</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors text-lg leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
