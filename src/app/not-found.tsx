'use client';

import * as S from './not-found/styles';
// import Link from 'next/link';

export default function NotFound() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Code src="/imgs/spotify.png" alt="spotify"></S.Code>
        <S.Title>Página não encontrada</S.Title>
        <S.Description>Não encontramos a página que você queria.</S.Description>

        <S.HomeLink href="/">Ínicio</S.HomeLink>
        <S.HelpLink href="/">Ajuda</S.HelpLink>
      </S.Content>
    </S.Wrapper>
  );
}
