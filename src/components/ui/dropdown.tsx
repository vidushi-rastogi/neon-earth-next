"use client";

import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, trigger, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const calculatePosition = () => {
    if (!dropdownRef.current || !contentRef.current) return;
    
    const triggerRect = dropdownRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Default position (left-aligned with trigger)
    let left = triggerRect.left;
    const top = triggerRect.bottom;
    
    // Check if dropdown would overflow the right edge of the viewport
    if (left + contentRect.width > viewportWidth) {
      // Position dropdown to align with the right edge of the trigger
      left = triggerRect.right - contentRect.width;
    }
    
    setDropdownPosition({ left, top });
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
    // Calculate position after a small delay to ensure content is rendered
    setTimeout(calculatePosition, 0);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Recalculate position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        calculatePosition();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <div 
      className="relative inline-block" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}
      <div 
        ref={contentRef}
        className={`fixed z-50 bg-secondary shadow-lg transition-all duration-500 ease-in-out transform ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${className}`}
        style={{ 
          left: `${dropdownPosition.left}px`, 
          top: `${dropdownPosition.top}px` 
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
