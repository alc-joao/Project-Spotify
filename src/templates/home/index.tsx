'use client';
import * as S from './styles';
import { Sidebar } from './sidebar';
import { RightSidebar } from './rigth-sidebar';
import { HomePage } from './home-page';

export const HomeTemplate = () => {
  return (
    <S.Home>
      <Sidebar />
      <HomePage />
      <RightSidebar />
    </S.Home>
  );
};
