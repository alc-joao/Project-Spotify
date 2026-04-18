'use client';

import { FC, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import * as S from './styles';
import { SidebarC as C } from './constants';

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOpenRoute = (id: string) => {
    if (id === 'home') {
      router.push('/');
      return;
    }

    if (id === 'search') {
      router.push('/search');
      return;
    }

    if (id === 'library') {
      router.push('/');
      return;
    }

    router.push(`/playlist/${id}`);
  };

  const isMenuItemActive = (id: string) => {
    if (id === 'home') {
      return pathname === '/';
    }

    if (id === 'search') {
      return pathname === '/search';
    }

    if (id === 'library') {
      return pathname === '/library';
    }

    return false;
  };

  return (
    <S.Sidebar id={C.id} $isOpen={isOpen}>
      <S.SidebarTop $isOpen={isOpen}>
        <S.ToggleButton type="button" onClick={handleToggleSidebar}>
          <S.ToggleIcon
            src={
              isOpen ? '/svgs/sidebar/panel-left-close.svg' : '/svgs/sidebar/panel-right-open.svg'
            }
            alt="toggle sidebar"
          />
        </S.ToggleButton>
      </S.SidebarTop>

      <S.SidebarItens>
        {C.menuItems.map((item) => (
          <S.SidebarNavItem
            key={item.id}
            $active={isMenuItemActive(item.id)}
            $isOpen={isOpen}
            onClick={() => handleOpenRoute(item.id)}
          >
            <S.SidebarIcon src={item.icon} alt={item.label} $active={isMenuItemActive(item.id)} />
            <S.SidebarLabel $isOpen={isOpen}>{item.label}</S.SidebarLabel>
          </S.SidebarNavItem>
        ))}
      </S.SidebarItens>

      <S.Library>
        {C.libraryItems.map((item) => (
          <S.LibraryItem key={item.id} $type={item.type} onClick={() => handleOpenRoute(item.id)}>
            <S.LibraryAlbum src={item.icon} alt={item.label} $type={item.type} />
            <S.LibraryLabel $isOpen={isOpen}>{item.label}</S.LibraryLabel>
          </S.LibraryItem>
        ))}
      </S.Library>

      <S.Line />

      <S.Type $isOpen={isOpen}>
        {C.typeMusics.map((item) => (
          <S.TypeMusics key={item.key}>{item.name}</S.TypeMusics>
        ))}
      </S.Type>
    </S.Sidebar>
  );
};
