'use client';
import styled from 'styled-components';

export const HomePage = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;

  background: linear-gradient(180deg, rgba(63, 78, 219, 0.8) 0%, rgba(18, 18, 18, 1) 40%);
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

export const WrapperButtons = styled.div`
  width: 8.5rem;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.button`
  width: 3.4rem;
  height: 3.4rem;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.black};
  opacity: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;

  img {
    width: 1.4rem;
    height: 2rem;
  }

  &:hover {
    opacity: 60%;
  }
`;

export const UserMenuWrapper = styled.div`
  position: relative;
`;

export const UserMenu = styled.div`
  width: 13.5rem;
  height: 3.8rem;
  background-color: ${({ theme }) => theme.black};
  border-radius: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

export const Avatar = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
`;

export const Icon = styled.img<{ $isOpen: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 5rem;
  right: 0;
  width: 24rem;
  height: fit-content;
  background-color: #282828;
  border-radius: 0.8rem;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.35);
  padding: 0.6rem 0;
  display: flex;
  flex-direction: column;

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-1rem)')};
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
`;

export const DropdownItem = styled.button<{ $isHighlighted?: boolean }>`
  width: 100%;
  min-height: 5.6rem;
  padding: 0 2.4rem;
  border: none;
  color: white;
  font-size: 1.7rem;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3a3a3a;
  }
`;
