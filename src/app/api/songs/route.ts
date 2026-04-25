import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const songs = await prisma.song.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(songs);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const title = body?.title?.trim();
  const artist = body?.artist?.trim();
  const cover = body?.cover?.trim() || '/imgs/sidebar/default-playlist.jpg';

  if (!title || !artist) {
    return NextResponse.json({ message: 'title e artist são obrigatórios' }, { status: 400 });
  }

  const song = await prisma.song.create({
    data: {
      title,
      artist,
      cover,
    },
  });

  return NextResponse.json(song, { status: 201 });
}
