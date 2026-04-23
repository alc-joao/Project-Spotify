'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './styles';
import { RightSidebarC as C } from './constants';

export const RightSidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOpenSettings = () => {
    router.push('/settings');
  };

  return (
    <>
      <S.RightSidebar id={C.id} $isOpen={isOpen}>
        <S.Wrapper $isOpen={isOpen}>
          <S.WrapperActions>
            <S.Title>{C.title}</S.Title>

            <S.Actions>
              {C.actions.map((item) => (
                <S.IconButton key={item.id} onClick={item.id === 'close' ? handleClose : undefined}>
                  <img src={item.icon} alt={item.alt} />
                </S.IconButton>
              ))}
            </S.Actions>
          </S.WrapperActions>

          <S.FirstParagraph>{C.firstParagraph}</S.FirstParagraph>

          <S.WarapperLoad>
            {[1, 2, 3].map((_, index) => (
              <S.FriendBlock key={index}>
                {C.loading.map((item) => (
                  <img key={item.id} src={item.icon} alt={item.alt} />
                ))}
              </S.FriendBlock>
            ))}
          </S.WarapperLoad>

          <S.SecondParagraph>{C.secondParagraph}</S.SecondParagraph>

          <S.WrapperBtn>
            <S.BtnSettings onClick={handleOpenSettings}>{C.btnSettings}</S.BtnSettings>
          </S.WrapperBtn>
        </S.Wrapper>
      </S.RightSidebar>

      <S.OpenButton onClick={handleOpen}>
        <img src={C.openButton.icon} alt={C.openButton.alt} />
      </S.OpenButton>
    </>
  );
};
