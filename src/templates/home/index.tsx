'use client';

import * as S from './styles';
import { Sidebar } from './sidebar';
import { RightSidebar } from './right-sidebar';
import { HomePage } from './home-page';
import { SearchPage } from './search-page';
import { usePathname } from 'next/navigation';

export const HomeTemplate = () => {
  const pathname = usePathname();

  return (
    <S.Home>
      <Sidebar />
      {pathname === '/search' ? <SearchPage /> : <HomePage />}
      <RightSidebar />
    </S.Home>
  );
};
