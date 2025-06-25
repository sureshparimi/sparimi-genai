
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
}

const BlogCard = ({ title, description, author, date, readTime, tags }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <User className="w-4 h-4" />
          <span>{author}</span>
          <span>•</span>
          <Clock className="w-4 h-4" />
          <span>{readTime} read</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
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
