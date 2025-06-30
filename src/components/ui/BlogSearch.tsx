'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
}

interface BlogSearchProps {
  posts: BlogPost[];
}

export const BlogSearch = ({ posts }: BlogSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const term = searchTerm.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term) ||
      post.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }, [searchTerm, posts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearching(value.length > 0);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearching(false);
  };

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search articles by title, author, category, or tags..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-10 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            {filteredPosts.length > 0 ? (
              <div className="p-4">
                <div className="text-sm text-slate-500 mb-3">
                  Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </div>
                <div className="space-y-3">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      onClick={clearSearch}
                      className="block p-3 hover:bg-slate-50 rounded-lg transition-colours"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {highlightText(post.title, searchTerm)}
                          </h3>
                          <p className="text-sm text-slate-600 mb-2 line-clamp-2">
                            {highlightText(post.excerpt, searchTerm)}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-slate-500">
                            <span>{highlightText(post.author, searchTerm)}</span>
                            <span>{highlightText(post.category, searchTerm)}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 text-center text-slate-500">
                <Search className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                <p>No articles found for "{searchTerm}"</p>
                <p className="text-sm mt-1">Try searching with different keywords</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};