'use client';

import { useEffect, useState } from 'react';
import { HomePageC as C } from './constants';

export const useHomePageAnimation = () => {
  const [greeting, setGreeting] = useState('');

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

  return {
    greeting,
  };
};
