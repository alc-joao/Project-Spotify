'use client';

import { FC } from 'react';
import * as S from './styles';
import { PlayerBarC as C } from './constants';
import { usePlayerBarAnimation } from './animation';
import { LikeButton } from '@/components/LikeButton';
import { usePlayer } from '@/contexts/player-context';

export const PlayerBar: FC = () => {
  const { volume, handlePlayerAction, handleVolumeChange } = usePlayerBarAnimation();
  const { currentSong, isPlaying, togglePlay } = usePlayer();

  const music = currentSong || C.music;

  const handleAction = (id: string) => {
    if (id === 'toggle-play') {
      togglePlay();
      return;
    }

    handlePlayerAction(id);
  };

  return (
    <S.PlayerBar>
      <S.Left>
        <S.Cover src={music.cover || '/imgs/sidebar/default-playlist.jpg'} alt={music.title} />

        <S.MusicInfo>
          <S.Title>{music.title}</S.Title>
          <S.Artist>{music.artist}</S.Artist>
        </S.MusicInfo>

        <LikeButton musicId={music.id} />
      </S.Left>

      <S.Center>
        <S.Controls>
          {C.centerActions.map((item) => {
            const isMainButton = item.id === 'toggle-play';

            return (
              <S.ControlButton
                key={item.id}
                type="button"
                onClick={() => handleAction(item.id)}
                $isMain={isMainButton}
                $active={item.active}
              >
                <img
                  src={
                    isMainButton
                      ? isPlaying
                        ? '/svgs/playerbar/pause.svg'
                        : '/svgs/playerbar/play.svg'
                      : item.icon
                  }
                  alt={isMainButton ? (isPlaying ? 'pause' : 'play') : item.alt}
                />
              </S.ControlButton>
            );
          })}
        </S.Controls>

        <S.ProgressWrapper>
          <S.Time>{C.progress.currentTime}</S.Time>

          <S.ProgressBar>
            <S.Progress $isPlaying={isPlaying} />
          </S.ProgressBar>

          <S.Time>{C.progress.duration}</S.Time>
        </S.ProgressWrapper>
      </S.Center>

      <S.Right>
        <S.RightActions>
          {C.rightActions.map((item) => {
            if (item.id === 'volume') {
              return (
                <S.VolumeControl key={item.id}>
                  <S.IconButton type="button" onClick={() => handleAction(item.id)}>
                    <img src={item.icon} alt={item.alt} />
                  </S.IconButton>

                  <S.VolumeInput
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={volume}
                    onChange={handleVolumeChange}
                    $volume={volume}
                  />
                </S.VolumeControl>
              );
            }

            return (
              <S.IconButton key={item.id} type="button" onClick={() => handleAction(item.id)}>
                <img src={item.icon} alt={item.alt} />
              </S.IconButton>
            );
          })}
        </S.RightActions>
      </S.Right>
    </S.PlayerBar>
  );
};
