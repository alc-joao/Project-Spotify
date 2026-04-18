import { notFound } from 'next/navigation';
import { playlistsData } from '@/data/playlists';
import { PlaylistPage } from '@/templates/playlist-page';

type PageProps = {
  params: {
    id: string;
  };
};

export default function PlaylistDetailsPage({ params }: PageProps) {
  const { id } = params;

  const playlist = Object.values(playlistsData).find((item) => item.id === id);

  if (!playlist) {
    return notFound();
  }

  return <PlaylistPage playlist={playlist} />;
}
