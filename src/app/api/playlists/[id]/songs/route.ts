// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

// type Props = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export async function GET(_: Request, { params }: Props) {
//   const { id } = await params;

//   const songs = await prisma.playlistSong.findMany({
//     where: {
//       playlistId: id,
//     },
//     include: {
//       song: true,
//     },
//   });

//   return NextResponse.json(songs);
// }

// export async function POST(request: Request, { params }: Props) {
//   const { id } = await params;
//   const body = await request.json();

//   const songId = body?.songId;

//   if (!songId) {
//     return NextResponse.json({ message: 'songId obrigatório' }, { status: 400 });
//   }

//   try {
//     const relation = await prisma.playlistSong.create({
//       data: {
//         playlistId: id,
//         songId,
//       },
//     });

//     return NextResponse.json(relation, { status: 201 });
//   } catch (error) {
//     console.error('ERRO AO CRIAR RELAÇÃO:', error);

//     return NextResponse.json({ message: 'Erro ao adicionar música na playlist' }, { status: 400 });
//   }
// }
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: Props) {
  const { id } = await params;

  const songs = await prisma.playlistSong.findMany({
    where: {
      playlistId: id,
    },
    include: {
      song: true,
    },
  });

  return NextResponse.json(songs);
}

export async function POST(request: Request, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const songId = body?.songId;

  if (!songId) {
    return NextResponse.json({ message: 'songId obrigatório' }, { status: 400 });
  }

  const playlist = await prisma.playlist.findUnique({
    where: { id },
  });

  if (!playlist) {
    return NextResponse.json({ message: 'Playlist não encontrada' }, { status: 404 });
  }

  const song = await prisma.song.findUnique({
    where: { id: songId },
  });

  if (!song) {
    return NextResponse.json({ message: 'Música não encontrada' }, { status: 404 });
  }

  try {
    const relation = await prisma.playlistSong.create({
      data: {
        playlistId: id,
        songId,
      },
    });

    return NextResponse.json(relation, { status: 201 });
  } catch (error) {
    console.error('ERRO AO CRIAR RELAÇÃO:', error);

    return NextResponse.json({ message: 'Essa música já está na playlist' }, { status: 400 });
  }
}
