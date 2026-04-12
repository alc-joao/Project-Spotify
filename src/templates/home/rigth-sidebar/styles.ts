'use client';
import styled from 'styled-components';

export const RightSidebar = styled.div<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? '34rem' : '0rem')};
  height: 100vh;
  background-color: ${({ theme }) => theme.black};
  overflow: hidden;
  flex-shrink: 0;
  box-sizing: border-box;
  transition: width 0.4s ease;
  z-index: 2;
`;

export const Wrapper = styled.div<{ $isOpen: boolean }>`
  width: 34rem;
  height: 100vh;
  padding: 3rem 2rem;
  box-sizing: border-box;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(50%)')};
  transition: transform 0.4s ease;
`;

export const WrapperActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  flex-shrink: 0;
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
  padding: 0;

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
  top: 7rem;
  right: 3rem;
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
    flex-shrink: 0;
  }

  img:last-child {
    width: 10.2rem;
    height: auto;
    flex-shrink: 0;
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
  border: none;
  border-radius: 4rem;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.atomicGreen};
    color: ${({ theme }) => theme.white};
  }
`;
