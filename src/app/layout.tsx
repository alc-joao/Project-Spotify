'use client';

import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/global';
import { fontNames } from '@/styles/_fonts';
import { Sidebar } from '@/templates/home/sidebar';
import { RightSidebar } from '@/templates/home/right-sidebar';
import * as S from './styles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Spotify</title>
        <link rel="icon" href="/imgs/spotify.png" />
      </head>

      <body className={fontNames}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <S.AppShell>
            <Sidebar />
            <S.MainContent>{children}</S.MainContent>
            <RightSidebar />
          </S.AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
