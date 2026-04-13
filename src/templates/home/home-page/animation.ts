'use client';

import { useEffect, useRef, useState } from 'react';
import { HomePageC as C } from './constants';

export const useHomePageAnimation = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('');
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleToggleUserMenu = () => {
    setIsUserMenuOpen((prevState) => !prevState);
  };

  const handleGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting(C.greeting.morning);
      return;
    }

    if (hour >= 12 && hour < 18) {
      setGreeting(C.greeting.afternoon);
      return;
    }

    setGreeting(C.greeting.evening);
  };

  useEffect(() => {
    handleGreeting();

    const interval = setInterval(() => {
      handleGreeting();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isUserMenuOpen,
    handleToggleUserMenu,
    userMenuRef,
    greeting,
  };
};
