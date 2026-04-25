'use client';

import { ReactNode, createContext, useContext, useRef, useState } from 'react';

export type PlayerSong = {
  id: string;
  title: string;
  artist: string;
  cover: string | null;
  audioUrl?: string | null;
};

type PlayerContextType = {
  currentSong: PlayerSong | null;
  isPlaying: boolean;
  playSong: (song: PlayerSong) => void;
  togglePlay: () => void;
};

const PlayerContext = createContext({} as PlayerContextType);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<PlayerSong | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSong = async (song: PlayerSong) => {
    setCurrentSong(song);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (!song.audioUrl) {
      console.warn('Essa música não tem audioUrl:', song.title);
      setIsPlaying(false);
      return;
    }

    try {
      const audio = new Audio(song.audioUrl);
      audioRef.current = audio;

      await audio.play();

      setIsPlaying(true);
    } catch (error) {
      console.error('Erro ao tocar áudio:', error);
      setIsPlaying(false);
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Erro no play/pause:', error);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        togglePlay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  return useContext(PlayerContext);
};
