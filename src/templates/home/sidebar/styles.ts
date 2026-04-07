'use client';

import styled from 'styled-components';
import { SIDEBAR_ANIMATION, SIDEBAR_WIDTH_CLOSED, SIDEBAR_WIDTH_OPEN } from './animation';

export const Sidebar = styled.aside<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.black};
  width: ${({ $isOpen }) => ($isOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED)};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
  gap: 3rem;
  padding: 3rem 2rem;
  overflow: hidden;
  box-sizing: border-box;

  transition:
    width ${SIDEBAR_ANIMATION},
    padding ${SIDEBAR_ANIMATION},
    align-items ${SIDEBAR_ANIMATION};
`;

export const SidebarTop = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
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
  transition: background-color ${SIDEBAR_ANIMATION};

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const ToggleIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;

  filter: brightness(0) invert(1); /* deixa branco */
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
    color ${SIDEBAR_ANIMATION},
    gap ${SIDEBAR_ANIMATION};

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
  transition: filter ${SIDEBAR_ANIMATION};
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
    opacity ${SIDEBAR_ANIMATION},
    max-width ${SIDEBAR_ANIMATION};
`;

export const Library = styled.div`
  
`;

export const LibraryAlbuns = styled.div`
  
`;
