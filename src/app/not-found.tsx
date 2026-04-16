'use client';

import * as S from './not-found/styles';
import Link from 'next/link';

export default function NotFound() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Code>404</S.Code>
        <S.Title>Página não encontrada</S.Title>
        <S.Description>O conteúdo que você tentou acessar não existe ou foi movido.</S.Description>

        <S.HomeLink href="/">BACK TO HOME</S.HomeLink>
      </S.Content>
    </S.Wrapper>
  );
}
