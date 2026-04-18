'use client';

import { FC } from 'react';
import * as S from './styles';
import { Navbar } from '@/components/Navbar';

type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
};

type Playlist = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  bgColor: string;
  songs: Song[];
};

type Props = {
  playlist: Playlist;
};

export const PlaylistPage: FC<Props> = ({ playlist }) => {
  return (
    <S.PlaylistPage id={playlist.id} $bgColor={playlist.bgColor}>
      <Navbar scrollContainerId={playlist.id} />

      <S.Content>
        <S.Header>
          <S.Cover src={playlist.cover} alt={playlist.title} />

          <S.Info>
            <S.Subtitle>{playlist.subtitle}</S.Subtitle>
            <S.Title>{playlist.title}</S.Title>
            <S.Description>{playlist.description}</S.Description>
          </S.Info>
        </S.Header>

        <S.Actions>
          <S.PlayButton type="button">▶</S.PlayButton>
        </S.Actions>

        <S.TableHeader>
          <span>#</span>
          <span>Title</span>
          <span>Duration</span>
        </S.TableHeader>

        <S.SongsList>
          {playlist.songs.map((song, index) => (
            <S.Row key={song.id}>
              <S.Number>{index + 1}</S.Number>

              <S.SongInfo>
                <S.SongImage src={song.image} alt={song.title} />
                <S.SongText>
                  <S.SongTitle>{song.title}</S.SongTitle>
                  <S.SongArtist>{song.artist}</S.SongArtist>
                </S.SongText>
              </S.SongInfo>

              <S.Duration>{song.duration}</S.Duration>
            </S.Row>
          ))}
        </S.SongsList>
      </S.Content>
    </S.PlaylistPage>
  );
};
