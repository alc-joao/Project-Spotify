'use client';
import { FC, useState } from 'react';
import * as S from './styles';
import { PlayerBarC as C } from './constants';

export const PlayerBar: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = (id: string) => {
    if (id === 'toggle-play') {
      setIsPlaying((prevState) => !prevState);
      return;
    }
  };

  return (
    <S.PlayerBar>
      <S.Left>
        <S.Cover src={C.music.cover} alt={C.music.title} />

        <S.MusicInfo>
          <S.Title>{C.music.title}</S.Title>
          <S.Artist>{C.music.artist}</S.Artist>
        </S.MusicInfo>

        <S.LeftActions>
          {C.leftActions.map((item) => (
            <S.IconButton key={item.id} type="button" onClick={() => handleClick(item.id)}>
              <img src={item.icon} alt={item.alt} />
            </S.IconButton>
          ))}
        </S.LeftActions>
      </S.Left>

      <S.Center>
        <S.Controls>
          {C.centerActions.map((item) => {
            const isMainButton = item.id === 'toggle-play';

            return (
              <S.ControlButton
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
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
          {C.rightActions.map((item) => (
            <S.IconButton key={item.id} type="button" onClick={() => handleClick(item.id)}>
              <img src={item.icon} alt={item.alt} />
            </S.IconButton>
          ))}
        </S.RightActions>

        <S.VolumeBar>
          <S.VolumeProgress />
        </S.VolumeBar>
      </S.Right>
    </S.PlayerBar>
  );
};
