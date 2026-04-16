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
  padding: 3rem;
`;

export const Content = styled.div`
  max-width: 60rem;
  text-align: center;
`;

export const Code = styled.h1`
  margin: 0;
  font-size: 12rem;
  line-height: 1;
  font-weight: 700;
  color: #1ed760;
`;

export const Title = styled.h2`
  margin: 1.6rem 0 0 0;
  font-size: 3.6rem;
  color: white;
`;

export const Description = styled.p`
  margin: 1.6rem 0 0 0;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  min-width: 20rem;
  height: 4.8rem;
  padding: 0 2rem;
  border-radius: 999px;
  background: #1ed760;
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    background: #3be477;
  }
`;
