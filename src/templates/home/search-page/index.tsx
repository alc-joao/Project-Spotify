'use client';

import * as S from './styles';
import { SearchPageC as C } from './constants';
import { Navbar } from '@/components/Navbar';

export const SearchPage = () => {
  return (
    <S.SearchPage id={C.id}>
      <Navbar scrollContainerId={C.id} />

      <S.Content>
        <S.Section>
          <S.SectionTitle>{C.texts.recentSearches}</S.SectionTitle>

          <S.RecentGrid>
            {C.recentSearches.map((item) => (
              <S.RecentCard key={item.id}>
                <S.CloseButton type="button">{C.texts.close}</S.CloseButton>
                <S.RecentImage src={item.image} alt={item.title} />
                <S.RecentTitle>{item.title}</S.RecentTitle>
                <S.RecentSubtitle>{item.subtitle}</S.RecentSubtitle>
              </S.RecentCard>
            ))}
          </S.RecentGrid>
        </S.Section>

        <S.Section>
          <S.SectionTitle>{C.texts.topGenres}</S.SectionTitle>

          <S.TopGenresGrid>
            {C.topGenres.map((item) => (
              <S.TopGenreCard key={item.id} $bg={item.bg}>
                <S.TopGenreTitle>{item.title}</S.TopGenreTitle>
                <S.TopGenreImage src={item.image} alt={item.title} />
              </S.TopGenreCard>
            ))}
          </S.TopGenresGrid>
        </S.Section>

        <S.Section>
          <S.SectionTitle>{C.texts.browseAll}</S.SectionTitle>

          <S.BrowseGrid>
            {C.browseAll.map((group) =>
              group.items.map((item) => (
                <S.BrowseCard key={item.id} $bg={item.bg}>
                  <S.BrowseTitle>{item.title}</S.BrowseTitle>
                  <S.BrowseImage src={item.image} alt={item.title} />
                </S.BrowseCard>
              ))
            )}
          </S.BrowseGrid>
        </S.Section>
      </S.Content>
    </S.SearchPage>
  );
};
