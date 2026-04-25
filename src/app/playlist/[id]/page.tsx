'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { usePlayer } from '@/contexts/player-context';
import * as S from './styles';

type Playlist = {
  id: string;
  name: string;
  cover: string | null;
};

type Song = {
  id: string;
  title: string;
  artist: string;
  cover: string | null;
  audioUrl: string | null;
};

type PlaylistSongItem = {
  id: string;
  playlistId: string;
  songId: string;
  song: Song;
};

export default function PlaylistDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { currentSong, isPlaying, playSong } = usePlayer();

  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [songs, setSongs] = useState<PlaylistSongItem[]>([]);
  const [catalogSongs, setCatalogSongs] = useState<Song[]>([]);
  const [isLoadingSongs, setIsLoadingSongs] = useState(true);
  const [isAddingSong, setIsAddingSong] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const isDbPlaylist = id !== 'liked-songs';

  const fetchPlaylist = async () => {
    if (!isDbPlaylist) {
      setPlaylist({
        id: 'liked-songs',
        name: 'Liked Songs',
        cover: '/svgs/sidebar/liked-songs.svg',
      });
      return;
    }

    try {
      const response = await fetch(`/api/playlists/${id}`);

      if (!response.ok) {
        throw new Error('Erro ao buscar playlist');
      }

      const data = await response.json();
      setPlaylist(data);
    } catch (error) {
      console.error('Erro ao carregar playlist:', error);
    }
  };

  const fetchSongs = async () => {
    if (!isDbPlaylist) {
      setSongs([]);
      setIsLoadingSongs(false);
      return;
    }

    try {
      setIsLoadingSongs(true);

      const response = await fetch(`/api/playlists/${id}/songs`);

      if (!response.ok) {
        throw new Error('Erro ao buscar músicas da playlist');
      }

      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error('Erro ao carregar músicas:', error);
    } finally {
      setIsLoadingSongs(false);
    }
  };

  const fetchCatalogSongs = async () => {
    try {
      const response = await fetch('/api/songs');

      if (!response.ok) {
        throw new Error('Erro ao buscar catálogo de músicas');
      }

      const data = await response.json();
      setCatalogSongs(data);
    } catch (error) {
      console.error('Erro ao carregar catálogo:', error);
    }
  };

  useEffect(() => {
    fetchPlaylist();
    fetchSongs();
    fetchCatalogSongs();
  }, [id]);

  const handleRename = async () => {
    if (!playlist || !isDbPlaylist) return;

    const newName = window.prompt('Novo nome da playlist', playlist.name);

    if (newName === null) return;

    const trimmedName = newName.trim();

    if (!trimmedName) {
      alert('Digite um nome válido.');
      return;
    }

    try {
      const response = await fetch(`/api/playlists/${playlist.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao renomear playlist');
      }

      await fetchPlaylist();
    } catch (error) {
      console.error('Erro ao renomear playlist:', error);
    }
  };

  const handleDelete = async () => {
    if (!playlist || !isDbPlaylist) return;

    const confirmed = window.confirm('Tem certeza que deseja apagar esta playlist?');

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/playlists/${playlist.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao apagar playlist');
      }

      router.push('/');
    } catch (error) {
      console.error('Erro ao apagar playlist:', error);
    }
  };

  const handleRemoveSong = async (songId: string) => {
    if (!playlist || !isDbPlaylist) return;

    try {
      const response = await fetch(`/api/playlists/${playlist.id}/songs/${songId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao remover música');
      }

      await fetchSongs();
    } catch (error) {
      console.error('Erro ao remover música:', error);
    }
  };

  const handleAddSong = async (songId: string) => {
    if (!playlist || !isDbPlaylist) return;

    try {
      setIsAddingSong(true);

      const response = await fetch(`/api/playlists/${playlist.id}/songs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          songId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Erro ao adicionar música');
      }

      await fetchSongs();
    } catch (error) {
      console.error('Erro ao adicionar música:', error);
      alert(error instanceof Error ? error.message : 'Erro ao adicionar música');
    } finally {
      setIsAddingSong(false);
    }
  };

  const playlistSongIds = new Set(songs.map((item) => item.songId));

  const filteredCatalogSongs = catalogSongs.filter((song) => {
    const search = searchValue.toLowerCase();

    return song.title.toLowerCase().includes(search) || song.artist.toLowerCase().includes(search);
  });

  if (!playlist) {
    return null;
  }

  return (
    <S.Container id="playlistPage">
      <Navbar
        scrollContainerId="playlistPage"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchPlaceholder="Buscar no catálogo"
      />

      <S.Header>
        <S.Cover src={playlist.cover || '/imgs/sidebar/default-playlist.jpg'} alt={playlist.name} />

        <S.Info>
          <S.Type>PLAYLIST</S.Type>
          <S.Title>{playlist.name}</S.Title>
          <S.Sub>{songs.length} música(s)</S.Sub>

          {isDbPlaylist && (
            <S.Actions>
              <S.ActionButton type="button" onClick={handleRename}>
                editar
              </S.ActionButton>

              <S.ActionButton type="button" onClick={handleDelete}>
                apagar
              </S.ActionButton>
            </S.Actions>
          )}
        </S.Info>
      </S.Header>

      <S.Content>
        {isLoadingSongs ? (
          <S.EmptyState>
            <S.EmptyTitle>Carregando músicas...</S.EmptyTitle>
          </S.EmptyState>
        ) : songs.length === 0 ? (
          <S.EmptyState>
            <S.EmptyTitle>Essa playlist ainda está vazia</S.EmptyTitle>
            <S.EmptyText>Escolha músicas do catálogo abaixo para adicionar.</S.EmptyText>
          </S.EmptyState>
        ) : (
          <S.SongsList>
            {songs.map((item, index) => (
              <S.SongRow
                key={item.id}
                $active={currentSong?.id === item.song.id}
                onClick={() =>
                  playSong({
                    id: item.song.id,
                    title: item.song.title,
                    artist: item.song.artist,
                    cover: item.song.cover,
                    audioUrl: item.song.audioUrl,
                  })
                }
              >
                <S.SongIndex>
                  {currentSong?.id === item.song.id && isPlaying ? '▶' : index + 1}
                </S.SongIndex>

                <S.SongMain>
                  <S.SongCover
                    src={item.song.cover || '/imgs/sidebar/default-playlist.jpg'}
                    alt={item.song.title}
                  />

                  <S.SongInfo>
                    <S.SongTitle>{item.song.title}</S.SongTitle>
                    <S.SongArtist>{item.song.artist}</S.SongArtist>
                  </S.SongInfo>
                </S.SongMain>

                {isDbPlaylist && (
                  <S.RemoveButton
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleRemoveSong(item.song.id);
                    }}
                  >
                    remover
                  </S.RemoveButton>
                )}
              </S.SongRow>
            ))}
          </S.SongsList>
        )}

        {isDbPlaylist && (
          <S.CatalogSection>
            <S.CatalogTitle>Catálogo de músicas</S.CatalogTitle>

            {filteredCatalogSongs.length === 0 ? (
              <S.EmptyText>
                {searchValue
                  ? 'Nenhuma música encontrada para essa busca.'
                  : 'Nenhuma música cadastrada no banco ainda.'}
              </S.EmptyText>
            ) : (
              <S.CatalogList>
                {filteredCatalogSongs.map((song) => {
                  const isAlreadyAdded = playlistSongIds.has(song.id);

                  return (
                    <S.CatalogRow key={song.id}>
                      <S.CatalogMain>
                        <S.SongCover
                          src={song.cover || '/imgs/sidebar/default-playlist.jpg'}
                          alt={song.title}
                        />

                        <S.SongInfo>
                          <S.SongTitle>{song.title}</S.SongTitle>
                          <S.SongArtist>{song.artist}</S.SongArtist>
                        </S.SongInfo>
                      </S.CatalogMain>

                      <S.AddButton
                        type="button"
                        disabled={isAlreadyAdded || isAddingSong}
                        onClick={() => handleAddSong(song.id)}
                      >
                        {isAlreadyAdded ? 'adicionada' : 'adicionar'}
                      </S.AddButton>
                    </S.CatalogRow>
                  );
                })}
              </S.CatalogList>
            )}
          </S.CatalogSection>
        )}
      </S.Content>
    </S.Container>
  );
}
