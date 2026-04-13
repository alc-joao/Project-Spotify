'use client';

import { FC } from 'react';
import * as S from './styles';
import { HomePageC as C } from './constants';
import { useHomePageAnimation } from './animation';

export const HomePage: FC = () => {
  const { isUserMenuOpen, handleToggleUserMenu, userMenuRef, greeting } = useHomePageAnimation();

  return (
    <S.HomePage id={C.id}>
      <S.Navbar>
        <S.WrapperBtnSheach>
          <S.WrapperButtons>
            {C.navBtns.map((item) => (
              <S.Buttons key={item.id}>
                <img src={item.icon} alt={item.alt} />
              </S.Buttons>
            ))}
          </S.WrapperButtons>
          <S.SearchLabel>
            <S.SearchIcon src={C.searchBox.icon} alt="search" />
            <S.Input placeholder={C.searchBox.placeholder} />
          </S.SearchLabel>
        </S.WrapperBtnSheach>
        <S.UserMenuWrapper ref={userMenuRef}>
          <S.UserMenu onClick={handleToggleUserMenu}>
            <S.Avatar src={C.userMenu.avatar} alt="user" />
            <S.Name>{C.userMenu.name}</S.Name>
            <S.Icon src={C.userMenu.icon} alt="toggle menu" $isOpen={isUserMenuOpen} />
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
      <S.Content>
        <S.Title>{greeting}</S.Title>
        <S.Grid>
          {C.playlists.map((item) => (
            <S.Card key={item.id}>
              <S.Cover src={item.img} alt={item.alt} />
              <S.CardText>{item.text}</S.CardText>
            </S.Card>
          ))}
        </S.Grid>
      </S.Content>
    </S.HomePage>
  );
};
