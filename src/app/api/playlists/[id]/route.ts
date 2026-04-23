import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type RouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: RouteProps) {
  const { id } = await params;

  const playlist = await prisma.playlist.findUnique({
    where: {
      id,
    },
  });

  if (!playlist) {
    return NextResponse.json({ message: 'Playlist não encontrada' }, { status: 404 });
  }

  return NextResponse.json(playlist);
}

export async function PATCH(request: Request, { params }: RouteProps) {
  const { id } = await params;
  const body = await request.json();

  const name = body?.name?.trim();

  if (!name) {
    return NextResponse.json({ message: 'Nome inválido' }, { status: 400 });
  }

  const playlist = await prisma.playlist.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  return NextResponse.json(playlist);
}

export async function DELETE(_: Request, { params }: RouteProps) {
  const { id } = await params;

  await prisma.playlist.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({ message: 'Playlist apagada com sucesso' });
}
