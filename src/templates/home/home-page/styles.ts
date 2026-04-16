'use client';

import styled, { keyframes } from 'styled-components';

const gradientA = keyframes`
  0%, 45% {
    opacity: 1;
  }
  50%, 95% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const gradientB = keyframes`
  0%, 45% {
    opacity: 0;
  }
  50%, 95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const HomePage = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  isolation: isolate;
  background: #121212;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    background: linear-gradient(
      180deg,
      rgba(74, 168, 232, 0.95) 0%,
      rgba(74, 168, 232, 0.45) 20%,
      rgba(18, 18, 18, 0.08) 42%,
      rgba(18, 18, 18, 0) 60%
    );
    animation: ${gradientA} 10s ease-in-out infinite;
  }

  &::after {
    background: linear-gradient(
      180deg,
      rgba(109, 93, 252, 0.95) 0%,
      rgba(109, 93, 252, 0.45) 20%,
      rgba(18, 18, 18, 0.08) 42%,
      rgba(18, 18, 18, 0) 60%
    );
    animation: ${gradientB} 10s ease-in-out infinite;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const Content = styled.div`
  width: 100%;
  /* max-width: 1800px; */
  margin: 0 auto;
  padding: 3rem;
`;

export const WrapperPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Title = styled.p`
  font-size: 4.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  margin: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const Card = styled.a`
  display: flex;
  height: 8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }
`;

export const Cover = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  flex-shrink: 0;
`;

export const CardText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  margin-left: 2.4rem;
`;
