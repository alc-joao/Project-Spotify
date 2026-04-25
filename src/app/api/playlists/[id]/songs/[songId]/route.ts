import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type Props = {
  params: Promise<{
    id: string;
    songId: string;
  }>;
};

export async function DELETE(_: Request, { params }: Props) {
  const { id, songId } = await params;

  const relation = await prisma.playlistSong.findFirst({
    where: {
      playlistId: id,
      songId,
    },
  });

  if (!relation) {
    return NextResponse.json({ message: 'Relação não encontrada' }, { status: 404 });
  }

  await prisma.playlistSong.delete({
    where: {
      id: relation.id,
    },
  });

  return NextResponse.json({ message: 'Removido com sucesso' });
}
