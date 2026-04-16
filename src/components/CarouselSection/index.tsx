'use client';

import { FC } from 'react';
import * as S from './styles';
import { useCarouselSectionAnimation } from './animation';

type CarouselItem = {
  id: string;
  img: string;
  alt: string;
  textCard: string;
  descripition: string;
};

type CarouselSectionProps = {
  subtitle: string;
  title: string;
  list: CarouselItem[];
};

export const CarouselSection: FC<CarouselSectionProps> = ({ subtitle, title, list }) => {
  const { carouselRef, handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave } =
    useCarouselSectionAnimation();

  return (
    <S.WrapperTopSongs>
      <S.WrapperSubtitle>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.AccountName>{title}</S.AccountName>
      </S.WrapperSubtitle>

      <S.WrapperMusicforMe
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {list.map((item) => (
          <S.SecondCard key={item.id}>
            <S.CoverSecondCard src={item.img} alt={item.alt} />
            <S.ListName>{item.textCard}</S.ListName>
            <S.ListDescripition>{item.descripition}</S.ListDescripition>
          </S.SecondCard>
        ))}
      </S.WrapperMusicforMe>
    </S.WrapperTopSongs>
  );
};
