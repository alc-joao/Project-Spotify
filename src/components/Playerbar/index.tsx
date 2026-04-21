'use client';
import { FC } from 'react';
import * as S from './styles';
import { PlayerBarC as C } from './constants';
import { usePlayerBarAnimation } from './animation';
import { LikeButton } from '@/components/LikeButton';

export const PlayerBar: FC = () => {
  const { isPlaying, volume, handlePlayerAction, handleVolumeChange } = usePlayerBarAnimation();

  return (
    <S.PlayerBar>
      <S.Left>
        <S.Cover src={C.music.cover} alt={C.music.title} />
        <S.MusicInfo>
          <S.Title>{C.music.title}</S.Title>
          <S.Artist>{C.music.artist}</S.Artist>
        </S.MusicInfo>
        <LikeButton musicId={C.music.id} />
      </S.Left>

      <S.Center>
        <S.Controls>
          {C.centerActions.map((item) => {
            const isMainButton = item.id === 'toggle-play';

            return (
              <S.ControlButton
                key={item.id}
                type="button"
                onClick={() => handlePlayerAction(item.id)}
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
            <S.Progress />
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
                  <S.IconButton type="button" onClick={() => handlePlayerAction(item.id)}>
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
              <S.IconButton key={item.id} type="button" onClick={() => handlePlayerAction(item.id)}>
                <img src={item.icon} alt={item.alt} />
              </S.IconButton>
            );
          })}
        </S.RightActions>
      </S.Right>
    </S.PlayerBar>
  );
};
