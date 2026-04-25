import 'dotenv/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

type SeedSong = {
  title: string;
  artist: string;
  audioUrl?: string;
};

type SeedPlaylist = {
  id: string;
  name: string;
  cover: string;
  songs: SeedSong[];
};

const playlists: SeedPlaylist[] = [
  {
    id: 'hasos',
    name: 'Hasos',
    cover: '/imgs/sidebar/hasos.jpg',
    songs: [
      { title: '20 Ligações', artist: 'Baco Exu do Blues' },
      { title: 'Samba in Paris', artist: 'Baco Exu do Blues' },
      { title: 'Lágrimas', artist: 'Baco Exu do Blues' },
      { title: 'Me Desculpa Jay Z', artist: 'Baco Exu do Blues' },
    ],
  },
  {
    id: 'carovaporII',
    name: 'Caro Vapor II',
    cover: '/imgs/sidebar/CVII.jpeg',
    songs: [
      { title: 'Caro Vapor II', artist: 'Don L' },
      { title: 'Depois das Três', artist: 'Don L' },
      { title: 'Pela Boca', artist: 'Don L' },
      { title: 'Aquarius', artist: 'Don L' },
    ],
  },
  {
    id: 'xtranho',
    name: 'XTRANHO',
    cover: '/imgs/sidebar/xtranho.jpeg',
    songs: [
      { title: 'XTRANHO', artist: 'Matuê' },
      { title: 'Kenny G', artist: 'Matuê' },
      { title: 'Vampiro', artist: 'Matuê' },
      { title: 'Anos Luz', artist: 'Matuê' },
    ],
  },
  {
    id: 'cemporcentocbjr',
    name: '100% Charlie Brown Jr',
    cover: '/imgs/sidebar/CB.jpg',
    songs: [
      { title: 'Dias de Luta, Dias de Glória', artist: 'Charlie Brown Jr.' },
      { title: 'Só os Loucos Sabem', artist: 'Charlie Brown Jr.' },
      { title: 'Céu Azul', artist: 'Charlie Brown Jr.' },
      { title: 'Zóio de Lula', artist: 'Charlie Brown Jr.' },
    ],
  },
  {
    id: 'zero',
    name: 'Zero',
    cover: '/imgs/home-page/zero.jpeg',
    songs: [
      { title: 'Zero', artist: 'Yung Buda' },
      { title: 'Piloto', artist: 'Yung Buda' },
      { title: 'Universo', artist: 'Yung Buda' },
    ],
  },
  {
    id: 'bully',
    name: 'Bully',
    cover: '/imgs/home-page/Bully.jpg',
    songs: [
      { title: 'Bully', artist: 'Kanye West' },
      { title: 'Beauty and the Beast', artist: 'Kanye West' },
      { title: 'Preacher Man', artist: 'Kanye West' },
    ],
  },
  {
    id: '333',
    name: '333',
    cover: '/imgs/home-page/333.jpeg',
    songs: [
      { title: '04AM', artist: 'Matuê', audioUrl: '/audios/333/04AM.mp3' },
      { title: '4TAL', artist: 'Matuê', audioUrl: '/audios/333/4TAL.mp3' },
      { title: '333', artist: 'Matuê', audioUrl: '/audios/333/333.mp3' },
      { title: '1993', artist: 'Matuê', audioUrl: '/audios/333/1993.mp3' },
      { title: 'Castelvania', artist: 'Matuê', audioUrl: '/audios/333/Castelvania.mp3' },
      {
        title: 'Crack com Mussilon',
        artist: 'Matuê',
        audioUrl: '/audios/333/Crack-com-Mussilon.mp3',
      },
      {
        title: 'Imagina esse Cenario',
        artist: 'Matuê',
        audioUrl: '/audios/333/Imagina-esse-Cenario.mp3',
      },
      {
        title: 'Isso é Sério',
        artist: 'Matuê',
        audioUrl: '/audios/333/Isso-é-Sério.mp3',
      },
      { title: 'Like This', artist: 'Matuê', audioUrl: '/audios/333/Like-This.mp3' },
      { title: 'Maria', artist: 'Matuê', audioUrl: '/audios/333/Maria.mp3' },
      { title: 'O som', artist: 'Matuê', audioUrl: '/audios/333/O-som.mp3' },
      { title: 'V de Vilão', artist: 'Matuê', audioUrl: '/audios/333/V-de-Vilao.mp3' },
    ],
  },
  {
    id: 'colapso-global',
    name: 'COLAPSO GLOBAL',
    cover: '/imgs/home-page/colapso-global.jpeg',
    songs: [
      { title: 'COLAPSO GLOBAL', artist: 'Teto, WIU' },
      { title: 'M4', artist: 'Teto' },
      { title: 'Problemas de um Milionário', artist: 'WIU' },
    ],
  },
  {
    id: 'utopia',
    name: 'Utopia',
    cover: '/imgs/home-page/utopia.jpeg',
    songs: [
      { title: 'HYAENA', artist: 'Travis Scott' },
      { title: 'THANK GOD', artist: 'Travis Scott' },
      { title: 'MODERN JAM', artist: 'Travis Scott' },
      { title: 'FE!N', artist: 'Travis Scott' },
      { title: 'MY EYES', artist: 'Travis Scott' },
    ],
  },
  {
    id: 'astroworld',
    name: 'Astroworld',
    cover: '/imgs/home-page/astroword.jpeg',
    songs: [
      { title: 'STARGAZING', artist: 'Travis Scott' },
      { title: 'SICKO MODE', artist: 'Travis Scott' },
      { title: 'STOP TRYING TO BE GOD', artist: 'Travis Scott' },
      { title: 'YOSEMITE', artist: 'Travis Scott' },
    ],
  },
  {
    id: 'the life of pablo',
    name: 'The Life Of Pablo',
    cover: '/imgs/home-page/thelifeofpablo.jpeg',
    songs: [
      { title: 'Ultralight Beam', artist: 'Kanye West' },
      { title: 'Father Stretch My Hands Pt. 1', artist: 'Kanye West' },
      { title: 'Famous', artist: 'Kanye West' },
      { title: 'Waves', artist: 'Kanye West' },
    ],
  },
  {
    id: 'ye',
    name: 'YE',
    cover: '/imgs/home-page/ye.jpeg',
    songs: [
      { title: 'I Thought About Killing You', artist: 'Kanye West' },
      { title: 'Yikes', artist: 'Kanye West' },
      { title: 'Ghost Town', artist: 'Kanye West' },
      { title: 'Violent Crimes', artist: 'Kanye West' },
    ],
  },
  {
    id: 'damn',
    name: 'DAMN.',
    cover: '/imgs/home-page/damn.jpeg',
    songs: [
      { title: 'DNA.', artist: 'Kendrick Lamar' },
      { title: 'HUMBLE.', artist: 'Kendrick Lamar' },
      { title: 'LOVE.', artist: 'Kendrick Lamar' },
      { title: 'LOYALTY.', artist: 'Kendrick Lamar' },
    ],
  },
  {
    id: 'mr. morale & the big steppers',
    name: 'Mr. Morale & the Big Steppers',
    cover: '/imgs/home-page/mrmorale.jpeg',
    songs: [
      { title: 'N95', artist: 'Kendrick Lamar' },
      { title: 'Rich Spirit', artist: 'Kendrick Lamar' },
      { title: 'Count Me Out', artist: 'Kendrick Lamar' },
      { title: 'Die Hard', artist: 'Kendrick Lamar' },
    ],
  },
  {
    id: 'heaven or hell',
    name: 'Heaven or Hell',
    cover: '/imgs/home-page/heavenohhell.jpg',
    songs: [
      { title: 'No Idea', artist: 'Don Toliver' },
      { title: 'After Party', artist: 'Don Toliver' },
      { title: 'Cardigan', artist: 'Don Toliver' },
      { title: 'Had Enough', artist: 'Don Toliver' },
    ],
  },
  {
    id: 'rocket power',
    name: 'Rocket Power',
    cover: '/imgs/home-page/rpq.jpeg',
    songs: [
      { title: 'Turn Yo Clic Up', artist: 'Quavo' },
      { title: 'Greatness', artist: 'Quavo' },
      { title: 'Rocket Power', artist: 'Quavo' },
    ],
  },
  {
    id: 'abaixo de zero',
    name: 'Abaixo de zero',
    cover: '/imgs/home-page/abaixodezero.jpeg',
    songs: [
      { title: 'Abaixo de Zero', artist: 'Black Alien' },
      { title: 'Área 51', artist: 'Black Alien' },
      { title: 'Coração em Chamas', artist: 'Black Alien' },
    ],
  },
  {
    id: 'downhill domination - second edition',
    name: 'Downhill Domination II',
    cover: '/imgs/home-page/dhd2.jpeg',
    songs: [
      { title: 'Downhill Domination II', artist: 'NIKITO' },
      { title: 'Bike Life', artist: 'NIKITO' },
      { title: 'Sem Freio', artist: 'NIKITO' },
    ],
  },
];

async function main() {
  for (const playlist of playlists) {
    await prisma.playlist.upsert({
      where: { id: playlist.id },
      update: {
        name: playlist.name,
        cover: playlist.cover,
      },
      create: {
        id: playlist.id,
        name: playlist.name,
        cover: playlist.cover,
      },
    });

    for (const song of playlist.songs) {
      let dbSong = await prisma.song.findFirst({
        where: {
          title: song.title,
          artist: song.artist,
        },
      });

      if (!dbSong) {
        dbSong = await prisma.song.create({
          data: {
            title: song.title,
            artist: song.artist,
            cover: playlist.cover,
            audioUrl: song.audioUrl ?? null,
          },
        });
      } else {
        dbSong = await prisma.song.update({
          where: {
            id: dbSong.id,
          },
          data: {
            cover: playlist.cover,
            audioUrl: song.audioUrl ?? dbSong.audioUrl,
          },
        });
      }

      const relationExists = await prisma.playlistSong.findFirst({
        where: {
          playlistId: playlist.id,
          songId: dbSong.id,
        },
      });

      if (!relationExists) {
        await prisma.playlistSong.create({
          data: {
            playlistId: playlist.id,
            songId: dbSong.id,
          },
        });
      }
    }
  }

  console.log('🔥 Playlists/álbuns, faixas e áudios criados com sucesso!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
