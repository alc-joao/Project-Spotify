'use client';
import styled from 'styled-components';

export const HomePage = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 0 3rem;

  background: linear-gradient(180deg, rgba(63, 78, 219, 0.8) 0%, rgba(18, 18, 18, 1) 40%);
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperBtnSheach = styled.div`
  width: fit-content;
  gap: 3rem;
  display: flex;
  align-items: center;
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

export const SearchLabel = styled.label`
  width: 50rem;
  height: 4rem;
  border-radius: 40rem;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;
`;

export const SearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  filter: brightness(0);
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.6rem;
  background: transparent;
  color: ${({ theme }) => theme.black};

  &::placeholder {
    color: ${({ theme }) => theme.solidMatteGray};
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
  background-color: ${({ theme }) => theme.oldBlack};
  border-radius: 0.8rem;
  overflow: hidden;
  z-index: 1;
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

export const Content = styled.div`
  display: flex;
  padding-top: 3rem;
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

export const Card = styled.div`
  display: flex;
  height: 8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

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
