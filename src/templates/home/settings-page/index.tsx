'use client';
import * as S from './styles';
import { SettingsPageC as C } from './constants';
import { Navbar } from '@/components/Navbar';

export const SettingsPage = () => {
  return (
    <S.SettingsPage id={C.id}>
      <Navbar scrollContainerId={C.id} />
    </S.SettingsPage>
  );
};
