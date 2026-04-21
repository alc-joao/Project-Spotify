'use client';

import { useState } from 'react';

export const usePlayerBarAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);

  const handlePlayerAction = (id: string) => {
    if (id === 'toggle-play') {
      setIsPlaying((prevState) => !prevState);
      return;
    }

    console.log(id);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  return {
    isPlaying,
    volume,
    handlePlayerAction,
    handleVolumeChange,
  };
};
