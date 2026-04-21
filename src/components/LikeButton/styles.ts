'use client';

import styled from 'styled-components';

export const Button = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 1.8rem;
    height: 1.8rem;
    object-fit: contain;
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
