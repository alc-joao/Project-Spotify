'use client';
import styled from 'styled-components';

export const RightSidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
  width: ${({ $isOpen }) => ($isOpen ? '34rem' : '0')};
  height: 100vh;
  padding: ${({ $isOpen }) => ($isOpen ? '3rem 2rem' : '3rem 0')};
  overflow: hidden;
  background-color: ${({ theme }) => theme.black};
  transition:
    width 0.4s ease,
    padding 0.4s ease;
`;

export const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  width: calc(34rem - 4rem);
  left: 2rem;
  top: 3rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

export const WrapperActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.cuteGrey};
  white-space: nowrap;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.8rem;
    height: 1.8rem;
    filter: brightness(0) invert(0.7);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(0) invert(1);
  }
`;

export const OpenButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 3.6rem;
  height: 3.6rem;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.black};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2rem;
    height: 2rem;
    filter: brightness(0) invert(1);
  }
`;

export const FirstParagraph = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.cuteGrey};
  padding-top: 3rem;
`;

export const WarapperLoad = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;
`;

export const FriendBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  img:first-child {
    width: 6.2rem;
    height: 6.2rem;
  }

  img:last-child {
    width: 10.2rem;
    height: auto;
  }
`;

export const SecondParagraph = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.cuteGrey};
  padding-top: 3rem;
`;

export const WrapperBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

export const BtnSettings = styled.button`
  width: 23.3rem;
  height: 6.2rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 4rem;
  text-transform: uppercase;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.atomicGreen};
    color: ${({ theme }) => theme.white};
  }
`;
