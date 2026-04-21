'use client';

import { ReactNode } from 'react';
import * as S from './styles';

type HomeTemplateProps = {
  children: ReactNode;
};

export const HomeTemplate = ({ children }: HomeTemplateProps) => {
  return <S.Home>{children}</S.Home>;
};
