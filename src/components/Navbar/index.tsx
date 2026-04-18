'use client';

import { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import * as S from './styles';
import { NavbarC as C } from './constants';
import { useNavbarAnimation } from './animation';

type NavbarProps = {
  scrollContainerId: string;
};

export const Navbar: FC<NavbarProps> = ({ scrollContainerId }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { isUserMenuOpen, scrollOpacity, handleToggleUserMenu, userMenuRef } =
    useNavbarAnimation(scrollContainerId);

  const handleNavigation = (id: string) => {
    if (id === 'previous') {
      router.push('/');
      return;
    }

    if (id === 'next') {
      router.forward();
    }
  };

  const handleGoToSearch = () => {
    if (pathname !== '/search') {
      router.push('/search');
    }
  };

  return (
    <S.Navbar $scrollOpacity={scrollOpacity}>
      <S.WrapperBtnSheach>
        <S.WrapperButtons>
          {C.navBtns.map((item) => (
            <S.Buttons key={item.id} onClick={() => handleNavigation(item.id)}>
              <img src={item.icon} alt={item.alt} />
            </S.Buttons>
          ))}
        </S.WrapperButtons>

        <S.SearchLabel onClick={handleGoToSearch}>
          <S.SearchIcon src={C.searchBox.icon} alt={C.searchBox.alt} />
          <S.Input
            placeholder={C.searchBox.placeholder}
            onFocus={handleGoToSearch}
            readOnly={pathname !== '/search'}
          />
        </S.SearchLabel>
      </S.WrapperBtnSheach>

      <S.UserMenuWrapper ref={userMenuRef}>
        <S.UserMenu onClick={handleToggleUserMenu}>
          <S.Avatar src={C.userMenu.avatar} alt="user" />
          <S.Name>{C.userMenu.name}</S.Name>
          <S.Icon src={C.userMenu.icon} alt="toggle menu" $isOpen={isUserMenuOpen} />
        </S.UserMenu>

        <S.DropdownMenu $isOpen={isUserMenuOpen}>
          {C.userMenu.items.map((item) => (
            <S.DropdownItem key={item.id}>{item.label}</S.DropdownItem>
          ))}
        </S.DropdownMenu>
      </S.UserMenuWrapper>
    </S.Navbar>
  );
};
