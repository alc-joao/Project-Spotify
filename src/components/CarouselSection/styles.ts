'use client';

import styled from 'styled-components';

export const WrapperTopSongs = styled.div`
  display: flex;
  padding-top: 3rem;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const WrapperSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  color: ${({ theme }) => theme.cuteGrey};
`;

export const AccountName = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
`;

export const WrapperMusicforMe = styled.div`
  display: flex;
  gap: 4rem;
  padding-top: 2rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  cursor: grab;
  user-select: none;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SecondCard = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 19rem;
  min-width: 19rem;
  height: 25rem;
  background-color: ${({ theme }) => theme.oldBlack};
  padding: 2rem;
  border-radius: 0.7rem;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.4rem);
  }
`;

export const CoverSecondCard = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 0.7rem;
  object-fit: cover;
  pointer-events: none;
`;

export const ListName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`;

export const ListDescripition = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.white};
  line-height: 1.6rem;
  pointer-events: none;
`;
