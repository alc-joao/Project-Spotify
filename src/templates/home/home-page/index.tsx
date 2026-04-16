'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './styles';
import { HomePageC as C } from './constants';
import { useHomePageAnimation } from './animation';
import { Navbar } from '@/components/Navbar';
import { CarouselSection } from '@/components/CarouselSection';

export const HomePage: FC = () => {
  const { greeting } = useHomePageAnimation();
  const router = useRouter();

  const handleOpenPlaylist = (playlistId: string) => {
    router.push(`/playlist/${playlistId}`);
  };
  const handleOpenRoute = (id: string) => {
    if (id === 'home') {
      router.push('/');
      return;
    }

    if (id === 'search') {
      router.push('/');
      return;
    }

    if (id === 'your-library') {
      router.push('/');
      return;
    }

    router.push(`/playlist/${id}`);
  };

  return (
    <S.HomePage id={C.id}>
      <Navbar scrollContainerId={C.id} />

      <S.Content>
        <S.WrapperPlaylist>
          <S.Title>{greeting}</S.Title>

          <S.Grid>
            {C.playlists.map((item) => (
              <S.Card key={item.id} onClick={() => handleOpenPlaylist(item.id)}>
                <S.Cover src={item.img} alt={item.alt} />
                <S.CardText>{item.text}</S.CardText>
              </S.Card>
            ))}
          </S.Grid>
        </S.WrapperPlaylist>

        <CarouselSection
          subtitle={C.firstSubtitle.subititle}
          title={C.firstSubtitle.title}
          list={C.firstCarousel}
        />

        <CarouselSection
          subtitle={C.thirdSubtitle.subititle}
          title={C.thirdSubtitle.title}
          list={C.thirdCarousel}
        />

        <CarouselSection
          subtitle={C.secondSubtitle.subititle}
          title={C.secondSubtitle.title}
          list={C.secondCarousel}
        />
      </S.Content>
    </S.HomePage>
  );
};
