'use client';

import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(180deg, rgba(80, 80, 80, 0.45) 0%, rgba(18, 18, 18, 1) 38%),
    ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  padding: 4rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2.4rem;
  padding: 4rem 0 3rem;
`;

export const Cover = styled.img`
  width: 23rem;
  height: 23rem;
  object-fit: cover;
  border-radius: 0.8rem;
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.45);
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Type = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.08rem;
  margin: 0;
  color: ${({ theme }) => theme.white};
`;

export const Title = styled.h1`
  font-size: 7rem;
  line-height: 0.95;
  font-weight: 900;
  margin: 0;
  word-break: break-word;
`;

export const Sub = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.cuteGrey};
  margin: 0;
`;

export const Content = styled.div`
  margin-top: 3rem;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.08);
  padding-top: 2.4rem;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyTitle = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const EmptyText = styled.p`
  margin: 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.cuteGrey};
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ActionButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.white};
  border-radius: 999rem;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }
`;
