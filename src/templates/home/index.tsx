'use client';
import * as S from './styles';
import { Sidebar } from './sidebar';
import { RightSidebar } from './rigth-sidebar';

export const HomeTemplate = () => {
  return (
    <S.Home>
      <Sidebar />
      <RightSidebar />
    </S.Home>
  );
};
