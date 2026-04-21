'use client';
import styled from 'styled-components';

export const PlayerBar = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 9rem;
  padding: 0 1.6rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #121212;
  border-top: 1px solid #282828;
  z-index: 3;
`;

export const Left = styled.div`
  width: 30%;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Cover = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  object-fit: cover;
  border-radius: 0.4rem;
  flex-shrink: 0;
`;

export const MusicInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.2;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artist = styled.p`
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.cuteGrey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
`;

export const Center = styled.div`
  width: 40%;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const ControlButton = styled.button<{ $active?: boolean; $isMain?: boolean }>`
  width: ${({ $isMain }) => ($isMain ? '3.2rem' : '2.8rem')};
  height: ${({ $isMain }) => ($isMain ? '3.2rem' : '2.8rem')};
  padding: 0;
  border: none;
  border-radius: 50%;
  background: ${({ $isMain, theme }) => ($isMain ? theme.white : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: scale(1.06);
  }

  img {
    width: ${({ $isMain }) => ($isMain ? '1.6rem' : '1.5rem')};
    height: ${({ $isMain }) => ($isMain ? '1.6rem' : '1.5rem')};
    object-fit: contain;
    opacity: ${({ $isMain }) => ($isMain ? 1 : 0.75)};
    filter: ${({ $isMain }) => ($isMain ? 'brightness(0)' : 'brightness(0) invert(0.75)')};
    transition:
      opacity 0.2s ease,
      filter 0.2s ease;
  }

  &:hover img {
    opacity: 1;
    filter: ${({ $isMain }) => ($isMain ? 'brightness(0)' : 'brightness(0) invert(1)')};
  }
`;

export const ProgressWrapper = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Time = styled.span`
  min-width: 3.6rem;
  font-size: 1.1rem;
  line-height: 1;
  color: ${({ theme }) => theme.cuteGrey};
  text-align: center;
  flex-shrink: 0;
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 0.4rem;
  border-radius: 1rem;
  background: #4d4d4d;
  overflow: hidden;
  position: relative;
`;

export const Progress = styled.div`
  width: 60%;
  height: 100%;
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;
`;

export const Right = styled.div`
  width: 30%;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
`;

export const IconButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.04);
  }

  img {
    width: 2.7rem;
    height: 2.7rem;
    object-fit: contain;
    opacity: 0.95;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  &:hover img {
    opacity: 1;
    transform: scale(1.05);
  }
`;

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const VolumeInput = styled.input<{ $volume: number }>`
  width: 9.5rem;
  height: 1.2rem;
  appearance: none;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;

  &::-webkit-slider-runnable-track {
    height: 0.4rem;
    border-radius: 999rem;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.white} 0%,
      ${({ theme }) => theme.white} ${({ $volume }) => $volume}%,
      #4d4d4d ${({ $volume }) => $volume}%,
      #4d4d4d 100%
    );
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    margin-top: -0.4rem;
    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.white};
  }

  &::-moz-range-track {
    height: 0.4rem;
    border-radius: 999rem;
    background: #4d4d4d;
  }

  &::-moz-range-progress {
    height: 0.4rem;
    border-radius: 999rem;
    background: ${({ theme }) => theme.white};
  }

  &::-moz-range-thumb {
    width: 1.2rem;
    height: 1.2rem;
    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.white};
  }
`;
