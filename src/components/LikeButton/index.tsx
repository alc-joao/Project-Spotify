'use client';

import { FC, useEffect, useState } from 'react';
import * as S from './styles';

type LikeButtonProps = {
  musicId: string;
};

const STORAGE_KEY = 'spotify-clone-liked-songs';

export const LikeButton: FC<LikeButtonProps> = ({ musicId }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const favorites: string[] = stored ? JSON.parse(stored) : [];

    setIsLiked(favorites.includes(musicId));
  }, [musicId]);

  const toggleLike = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const favorites: string[] = stored ? JSON.parse(stored) : [];

    let updated: string[];

    if (favorites.includes(musicId)) {
      updated = favorites.filter((id) => id !== musicId);
      setIsLiked(false);
    } else {
      updated = [...favorites, musicId];
      setIsLiked(true);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <S.Button onClick={toggleLike}>
      <img src={isLiked ? '/svgs/playerbar/check.svg' : '/svgs/playerbar/plus.svg'} alt="like" />
    </S.Button>
  );
};
