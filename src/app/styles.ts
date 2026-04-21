'use client';

import styled from 'styled-components';

export const AppShell = styled.main`
  width: 100%;
  height: calc(100vh - 9rem);
  display: flex;
  background: #000;
  overflow: hidden;
`;

export const MainContent = styled.div`
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`;
