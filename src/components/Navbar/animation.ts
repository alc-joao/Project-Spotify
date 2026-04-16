'use client';

import { useEffect, useRef, useState } from 'react';

export const useNavbarAnimation = (scrollContainerId: string) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleToggleUserMenu = () => {
    setIsUserMenuOpen((prevState) => !prevState);
  };

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

  useEffect(() => {
    const scrollContainer = document.getElementById(scrollContainerId);

    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const maxScroll = 100;
      const opacity = Math.min(scrollTop / maxScroll, 1);

      setScrollOpacity(opacity);
    };

    handleScroll();

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerId]);

  return {
    isUserMenuOpen,
    scrollOpacity,
    handleToggleUserMenu,
    userMenuRef,
  };
};
