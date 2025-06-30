'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
}

export const TypewriterText = ({
  text,
  speed = 40,
  delay = 0,
  className = '',
  onComplete,
  cursor = true
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    indexRef.current = 0;
    setIsComplete(false);
    
    // Start typing after delay
    const delayTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, delay]);

  useEffect(() => {
    if (!isTyping) return;

    const typeNextChar = () => {
      if (indexRef.current < text.length) {
        setDisplayText(text.substring(0, indexRef.current + 1));
        indexRef.current += 1;
        
        // Random speed variation for more natural typing
        const randomSpeed = speed * (0.8 + Math.random() * 0.4);
        timeoutRef.current = setTimeout(typeNextChar, randomSpeed);
      } else {
        setIsTyping(false);
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    };

    timeoutRef.current = setTimeout(typeNextChar, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isTyping, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {cursor && isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default TypewriterText;