// 
'use client';

import { FC } from 'react';
import * as S from './styles';
import { HomePageC as C } from './constants';
import { useHomePageAnimation } from './animation';

export const HomePage: FC = () => {
  const { isUserMenuOpen, handleToggleUserMenu, userMenuRef } = useHomePageAnimation();

  const handleClick = (id: string) => {
    if (id === 'previous') {
      console.log('voltar');
    }

    if (id === 'next') {
      console.log('avançar');
    }
  };

  return (
    <S.HomePage id={C.id}>
      <S.Navbar>
        <S.WrapperButtons>
          {C.navBtns.map((item) => (
            <S.Buttons key={item.id} onClick={() => handleClick(item.id)}>
              <img src={item.icon} alt={item.alt} />
            </S.Buttons>
          ))}
        </S.WrapperButtons>

        <S.UserMenuWrapper ref={userMenuRef}>
          <S.UserMenu onClick={handleToggleUserMenu}>
            <S.Avatar src={C.userMenu.avatar} alt="user" />
            <S.Name>{C.userMenu.name}</S.Name>
            <S.Icon
              src={isUserMenuOpen ? C.userMenu.topIcon : C.userMenu.icon}
              alt="toggle menu"
              $isOpen={isUserMenuOpen}
            />
          </S.UserMenu>

          <S.DropdownMenu $isOpen={isUserMenuOpen}>
            {C.userMenu.items.map((item, index) => (
              <S.DropdownItem key={item.id} $isHighlighted={index === 0}>
                {item.label}
              </S.DropdownItem>
            ))}
          </S.DropdownMenu>
        </S.UserMenuWrapper>
      </S.Navbar>
    </S.HomePage>
  );
};
