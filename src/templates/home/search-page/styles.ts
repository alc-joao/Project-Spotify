'use client';

import styled from 'styled-components';

export const SearchPage = styled.main`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  background: #121212;
`;

export const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem 2.4rem;
  background: rgba(18, 18, 18, 0.96);
  backdrop-filter: blur(8px);
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const CircleButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 1.6rem;
    height: 1.6rem;
    filter: brightness(0) invert(1);
  }
`;

export const SearchBox = styled.label`
  width: 36.4rem;
  max-width: 100%;
  height: 4.8rem;
  border-radius: 999rem;
  background: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0 1.6rem;
`;

export const SearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
  filter: brightness(0);
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.4rem;
  color: #121212;

  &::placeholder {
    color: #757575;
  }
`;

export const Content = styled.div`
  padding: 3rem 3rem 12rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  margin: 0;
`;

export const RecentGrid = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

export const RecentCard = styled.div`
  width: 17.2rem;
  min-height: 22rem;
  background: #181818;
  border-radius: 0.8rem;
  padding: 1.6rem;
  position: relative;
  transition: background 0.2s ease;

  &:hover {
    background: #222222;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.white};
  font-size: 2.4rem;
  cursor: pointer;
`;

export const RecentImage = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin-bottom: 1.6rem;
`;

export const RecentTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  margin: 0 0 0.6rem;
`;

export const RecentSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.cuteGrey};
  margin: 0;
`;

export const TopGenresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(26rem, 1fr));
  gap: 1.6rem;
`;

export const TopGenreCard = styled.div<{ $bg: string }>`
  height: 16rem;
  border-radius: 0.8rem;
  padding: 1.8rem;
  background: ${({ $bg }) => $bg};
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const TopGenreTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  margin: 0;
`;

export const TopGenreImage = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  position: absolute;
  right: 1.2rem;
  bottom: -0.8rem;
  transform: rotate(25deg);
  border-radius: 0.4rem;
`;

export const BrowseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(18rem, 1fr));
  gap: 1.6rem;
`;

export const BrowseCard = styled.div<{ $bg: string }>`
  height: 18rem;
  border-radius: 0.8rem;
  padding: 1.6rem;
  background: ${({ $bg }) => $bg};
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const BrowseTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  max-width: 13rem;
  margin: 0;
`;

export const BrowseImage = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  position: absolute;
  right: -0.8rem;
  bottom: -0.2rem;
  transform: rotate(25deg);
  border-radius: 0.4rem;
`;
