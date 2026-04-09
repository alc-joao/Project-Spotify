'use client';

import styled from 'styled-components';

export const Sidebar = styled.aside<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.black};
  width: ${({ $isOpen }) => ($isOpen ? '34rem' : '11rem')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3rem;
  padding: 3rem 2rem;
  overflow: hidden;
  box-sizing: border-box;

  transition:
    width 0.9s ease,
    padding 0.9s ease;
`;

export const SidebarTop = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const ToggleButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border: none;
  border-radius: 0.8rem;
  background: transparent;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background-color 0.9s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const ToggleIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  filter: brightness(0) invert(1);
`;

export const SidebarItens = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 1rem;
  flex: 0 0 auto;
`;

export const SidebarNavItem = styled.div<{ $active?: boolean; $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
  gap: ${({ $isOpen }) => ($isOpen ? '2rem' : '0')};
  cursor: pointer;
  color: ${({ $active, theme }) => ($active ? theme.white : theme.cuteGrey)};
  transition:
    color 0.9s ease,
    gap 0.9s ease;

  &:hover {
    color: ${({ theme }) => theme.white};
  }

  &:hover img {
    filter: brightness(0) invert(1);
  }
`;

export const SidebarIcon = styled.img<{ $active?: boolean }>`
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
  transition: filter 0.9s ease;
  filter: ${({ $active }) => ($active ? 'brightness(0) invert(1)' : 'brightness(0) invert(0.7)')};
`;

export const SidebarLabel = styled.span<{ $isOpen: boolean }>`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  max-width: ${({ $isOpen }) => ($isOpen ? '20rem' : '0')};

  transition:
    opacity 0.9s ease,
    max-width 0.9s ease;
`;

export const Library = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  flex: 0 0 auto;
`;

export const LibraryItem = styled.div<{ $type?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ $type, theme }) => ($type === 'action' ? theme.cuteGrey : theme.white)};
  transition: color 0.9s ease;

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

export const LibraryAlbum = styled.img<{ $type?: string }>`
  width: 7rem;
  height: 7rem;
  flex-shrink: 0;
  border-radius: 0.5rem;

  ${({ $type }) =>
    $type === 'action' &&
    `
      filter: brightness(0) invert(0.7);
    `}
`;

export const LibraryLabel = styled.span<{ $isOpen: boolean }>`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 1rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  max-width: ${({ $isOpen }) => ($isOpen ? '23rem' : '0')};

  transition:
    opacity 0.9s ease,
    max-width 0.9s ease;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.01rem;
  background-color: ${({ theme }) => theme.cuteGrey};
`;

export const Type = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${({ theme }) => theme.cuteGrey};
  white-space: nowrap;
  overflow: hidden;

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  max-width: ${({ $isOpen }) => ($isOpen ? '20rem' : '0')};

  transition:
    opacity 0.9s ease,
    max-width 0.9s ease;
`;

export const TypeMusics = styled.div`
  width: 100%;
`;
