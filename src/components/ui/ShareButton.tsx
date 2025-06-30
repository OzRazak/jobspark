'use client';

import { useState } from 'react';
import { Share2, Mail, Copy, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const ShareButton = ({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'JobSpark - Your AI Career Co-Pilot',
  description = 'Accelerate your job search with AI-powered tools designed for South African professionals.',
  className = ''
}: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: '📱',
      action: () => {
        const text = `${title}\n\n${description}\n\n${url}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
      }
    },
    {
      name: 'Facebook',
      icon: '📘',
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      }
    },
    {
      name: 'Twitter',
      icon: '🐦',
      action: () => {
        const text = `${title} - ${description}`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
      }
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
      }
    },
    {
      name: 'Email',
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        const subject = encodeURIComponent(title);
        const body = encodeURIComponent(`${description}\n\n${url}`);
        window.open(`mailto:?subject=${subject}&body=${body}`);
      }
    },
    {
      name: 'Copy Link',
      icon: copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />,
      action: async () => {
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colours ${className}`}
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Share Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg z-50 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-900">Share this page</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => {
                      option.action();
                      if (option.name !== 'Copy Link') {
                        setIsOpen(false);
                      }
                    }}
                    className="flex items-center space-x-2 p-3 text-left hover:bg-slate-50 rounded-lg transition-colours"
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{option.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};