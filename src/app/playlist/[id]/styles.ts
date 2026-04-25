'use client';

import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  overflow-y: auto;
  background:
    linear-gradient(180deg, rgba(80, 80, 80, 0.45) 0%, rgba(18, 18, 18, 1) 38%),
    ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  padding: 0 4rem 4rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2.4rem;
  padding: 4rem 0 3rem;
`;

export const Cover = styled.img`
  width: 23rem;
  height: 23rem;
  object-fit: cover;
  border-radius: 0.8rem;
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.45);
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Type = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.08rem;
  margin: 0;
  color: ${({ theme }) => theme.white};
`;

export const Title = styled.h1`
  font-size: 7rem;
  line-height: 0.95;
  font-weight: 900;
  margin: 0;
  word-break: break-word;
`;

export const Sub = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.cuteGrey};
  margin: 0;
`;

export const Content = styled.div`
  margin-top: 3rem;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.08);
  padding-top: 2.4rem;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyTitle = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const EmptyText = styled.p`
  margin: 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.cuteGrey};
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ActionButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.white};
  border-radius: 999rem;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }
`;

export const SongsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SongRow = styled.div<{ $active?: boolean }>`
  display: grid;
  grid-template-columns: 4rem 1fr auto;
  align-items: center;
  gap: 1.6rem;
  padding: 1rem 1.2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background: ${({ $active }) => ($active ? 'rgba(30, 215, 96, 0.12)' : 'transparent')};

  &:hover {
    background: ${({ $active }) =>
      $active ? 'rgba(30, 215, 96, 0.16)' : 'rgba(255, 255, 255, 0.06)'};
  }
`;

export const SongIndex = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.cuteGrey};
  text-align: center;
`;

export const SongMain = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  min-width: 0;
`;

export const SongCover = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 0.6rem;
  flex-shrink: 0;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const SongTitle = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`;

export const SongArtist = styled.p`
  margin: 0.4rem 0 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.cuteGrey};
`;

export const RemoveButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.cuteGrey};
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 999rem;

  &:hover {
    color: ${({ theme }) => theme.white};
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const CatalogSection = styled.div`
  margin-top: 4rem;
  padding-top: 2.4rem;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.08);
`;

export const CatalogTitle = styled.h2`
  margin: 0 0 1.6rem;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const CatalogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CatalogRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1.6rem;
  padding: 1rem 1.2rem;
  border-radius: 0.8rem;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const CatalogMain = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  min-width: 0;
`;

export const AddButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.white};
  border-radius: 999rem;
  padding: 0.8rem 1.4rem;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.16);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
