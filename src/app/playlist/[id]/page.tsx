'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import * as S from './styles';

type Playlist = {
  id: string;
  name: string;
  cover: string | null;
};

export default function PlaylistDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  const fetchPlaylist = async () => {
    const res = await fetch(`/api/playlists/${id}`);
    const data = await res.json();
    setPlaylist(data);
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const handleRename = async () => {
    if (!playlist) return;

    const newName = window.prompt('Novo nome da playlist', playlist.name);

    if (!newName) return;

    await fetch(`/api/playlists/${playlist.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName }),
    });

    fetchPlaylist();
  };

  const handleDelete = async () => {
    if (!playlist) return;

    const confirmDelete = window.confirm('Tem certeza que deseja apagar?');

    if (!confirmDelete) return;

    await fetch(`/api/playlists/${playlist.id}`, {
      method: 'DELETE',
    });

    router.push('/');
  };

  if (!playlist) return null;

  return (
    <S.Container>
      <S.Header>
        <S.Cover src={playlist.cover || '/imgs/sidebar/default-playlist.jpg'} alt={playlist.name} />

        <S.Info>
          <S.Type>PLAYLIST</S.Type>
          <S.Title>{playlist.name}</S.Title>

          <S.Actions>
            <S.ActionButton onClick={handleRename}>editar</S.ActionButton>

            <S.ActionButton onClick={handleDelete}>apagar</S.ActionButton>
          </S.Actions>
        </S.Info>
      </S.Header>

      <S.Content>
        <S.EmptyState>
          <S.EmptyTitle>Essa playlist ainda está vazia</S.EmptyTitle>
          <S.EmptyText>No próximo passo, vamos adicionar músicas aqui.</S.EmptyText>
        </S.EmptyState>
      </S.Content>
    </S.Container>
  );
}
