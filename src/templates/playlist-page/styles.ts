'use client';

import styled from 'styled-components';

export const PlaylistPage = styled.div<{ $bgColor: string }>`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(
    180deg,
    ${({ $bgColor }) => $bgColor} 0%,
    ${({ $bgColor }) => $bgColor}CC 18%,
    rgba(18, 18, 18, 0.85) 42%,
    #121212 58%,
    #121212 100%
  );
`;

export const Content = styled.div`
  padding: 0 3rem 3rem 3rem;
`;

export const Header = styled.div`
  padding-top: 3rem;
  min-height: 34rem;
  display: flex;
  align-items: flex-end;
  gap: 2.4rem;
`;

export const Cover = styled.img`
  width: 23.2rem;
  height: 23.2rem;
  object-fit: cover;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.2rem;
  padding-bottom: 1rem;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 7rem;
  line-height: 0.9;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`;

export const Description = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const Actions = styled.div`
  padding: 3rem 0 2.4rem 0;
`;

export const PlayButton = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  border: none;
  border-radius: 50%;
  background: #1ed760;
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: #3be477;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 5rem 2.4fr 10rem;
  align-items: center;
  padding: 0 1.6rem 1.2rem 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.55);
  font-size: 1.3rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 5rem 2.4fr 8rem;
  align-items: center;
  padding: 1rem 1.6rem;
  border-radius: 0.6rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
export const SongsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Number = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.cuteGrey};
`;

export const SongInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const SongImage = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`;

export const SongText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongTitle = styled.p`
  margin: 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.white};
`;

export const SongArtist = styled.p`
  margin: 0.4rem 0 0 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.cuteGrey};
`;

export const Album = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.cuteGrey};
`;

export const Duration = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.cuteGrey};
`;
