'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121212;
`;

export const Content = styled.div`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Code = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: contain;
`;

export const Title = styled.p`
  font-size: 3.6rem;
  color: white;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 4.8rem;
  padding: 0 2rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    background: #3be477;
  }
`;


export const HelpLink = styled(Link)`
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;
