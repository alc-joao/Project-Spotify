import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const playlists = await prisma.playlist.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(playlists);
}

export async function POST(request: Request) {
  const total = await prisma.playlist.count();
  const body = await request.json().catch(() => null);

  const customName = body?.name?.trim();

  const playlist = await prisma.playlist.create({
    data: {
      name: customName || `Minha Playlist #${total + 1}`,
      cover: '/imgs/sidebar/default-playlist.jpg',
    },
  });

  return NextResponse.json(playlist, { status: 201 });
}
