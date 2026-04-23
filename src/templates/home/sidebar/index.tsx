'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import * as S from './styles';
import { SidebarC as C } from './constants';

type Playlist = {
  id: string;
  name: string;
  cover: string | null;
};

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleToggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const fetchPlaylists = async () => {
    try {
      const response = await fetch('/api/playlists');

      if (!response.ok) {
        throw new Error('Erro ao buscar playlists');
      }

      const data = await response.json();
      setPlaylists(data);
    } catch (error) {
      console.error('Erro ao carregar playlists:', error);
    }
  };

  const handleCreatePlaylist = async () => {
    const playlistName = window.prompt('Digite o nome da playlist');

    if (playlistName === null) {
      return;
    }

    const trimmedName = playlistName.trim();

    if (!trimmedName) {
      alert('Digite um nome válido para a playlist.');
      return;
    }

    try {
      setIsCreatingPlaylist(true);

      const response = await fetch('/api/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar playlist');
      }

      const newPlaylist = await response.json();

      await fetchPlaylists();
      router.push(`/playlist/${newPlaylist.id}`);
    } catch (error) {
      console.error('Erro ao criar playlist:', error);
    } finally {
      setIsCreatingPlaylist(false);
    }
  };

  const handleRenamePlaylist = async (playlistId: string, currentName: string) => {
    const newName = window.prompt('Novo nome da playlist', currentName);

    if (newName === null) {
      return;
    }

    const trimmedName = newName.trim();

    if (!trimmedName) {
      alert('Digite um nome válido para a playlist.');
      return;
    }

    try {
      const response = await fetch(`/api/playlists/${playlistId}`, {
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

      await fetchPlaylists();
    } catch (error) {
      console.error('Erro ao renomear playlist:', error);
    }
  };

  const handleDeletePlaylist = async (playlistId: string) => {
    const confirmed = window.confirm('Tem certeza que deseja apagar esta playlist?');

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao apagar playlist');
      }

      await fetchPlaylists();

      if (pathname === `/playlist/${playlistId}`) {
        router.push('/');
      }
    } catch (error) {
      console.error('Erro ao apagar playlist:', error);
    }
  };

  const handleOpenRoute = (id: string) => {
    if (id === 'home') {
      router.push('/');
      return;
    }

    if (id === 'search') {
      router.push('/search');
      return;
    }

    if (id === 'library') {
      router.push('/library');
      return;
    }

    if (id === 'liked-songs') {
      router.push('/playlist/liked-songs');
      return;
    }

    if (id === 'create-playlist') {
      handleCreatePlaylist();
      return;
    }

    router.push(`/playlist/${id}`);
  };

  const isMenuItemActive = (id: string) => {
    if (id === 'home') {
      return pathname === '/';
    }

    if (id === 'search') {
      return pathname === '/search';
    }

    if (id === 'library') {
      return pathname === '/library';
    }

    return false;
  };

  const isLibraryItemActive = (id: string) => {
    if (id === 'liked-songs') {
      return pathname === '/playlist/liked-songs';
    }

    return pathname === `/playlist/${id}`;
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <S.Sidebar id={C.id} $isOpen={isOpen}>
      <S.SidebarTop $isOpen={isOpen}>
        <S.ToggleButton type="button" onClick={handleToggleSidebar}>
          <S.ToggleIcon
            src={
              isOpen ? '/svgs/sidebar/panel-left-close.svg' : '/svgs/sidebar/panel-right-open.svg'
            }
            alt="toggle sidebar"
          />
        </S.ToggleButton>
      </S.SidebarTop>

      <S.SidebarItens>
        {C.menuItems.map((item) => (
          <S.SidebarNavItem
            key={item.id}
            type="button"
            $active={isMenuItemActive(item.id)}
            $isOpen={isOpen}
            onClick={() => handleOpenRoute(item.id)}
          >
            <S.SidebarIcon src={item.icon} alt={item.label} $active={isMenuItemActive(item.id)} />
            <S.SidebarLabel $isOpen={isOpen}>{item.label}</S.SidebarLabel>
          </S.SidebarNavItem>
        ))}
      </S.SidebarItens>

      <S.Library>
        {C.fixedLibraryItems.map((item) => (
          <S.LibraryItem
            key={item.id}
            type="button"
            $type={item.type}
            $active={isLibraryItemActive(item.id)}
            onClick={() => handleOpenRoute(item.id)}
          >
            <S.LibraryAlbum src={item.icon} alt={item.label} $type={item.type} />
            <S.LibraryLabel $isOpen={isOpen}>
              {item.id === 'create-playlist' && isCreatingPlaylist ? 'Creating...' : item.label}
            </S.LibraryLabel>
          </S.LibraryItem>
        ))}

        {playlists.map((playlist) => (
          <S.PlaylistRow key={playlist.id}>
            <S.LibraryItem
              type="button"
              $type="album"
              $active={isLibraryItemActive(playlist.id)}
              onClick={() => handleOpenRoute(playlist.id)}
            >
              <S.LibraryAlbum
                src={playlist.cover || '/imgs/sidebar/default-playlist.jpg'}
                alt={playlist.name}
                $type="album"
              />
              <S.LibraryLabel $isOpen={isOpen}>{playlist.name}</S.LibraryLabel>
            </S.LibraryItem>

            {isOpen && (
              <S.PlaylistActions>
                <S.ActionButton
                  type="button"
                  onClick={() => handleRenamePlaylist(playlist.id, playlist.name)}
                >
                  editar
                </S.ActionButton>

                <S.ActionButton type="button" onClick={() => handleDeletePlaylist(playlist.id)}>
                  apagar
                </S.ActionButton>
              </S.PlaylistActions>
            )}
          </S.PlaylistRow>
        ))}
      </S.Library>

      <S.Line />

      <S.Type $isOpen={isOpen}>
        {C.typeMusics.map((item) => (
          <S.TypeMusics key={item.key}>{item.name}</S.TypeMusics>
        ))}
      </S.Type>
    </S.Sidebar>
  );
};
