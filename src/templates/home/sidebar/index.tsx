'use client';

import { FC, useState } from 'react';
import * as S from './styles';
import { SidebarC as C } from './constants';

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
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
          <S.SidebarNavItem key={item.id} $active={item.active} $isOpen={isOpen}>
            <S.SidebarIcon src={item.icon} alt={item.label} $active={item.active} />
            <S.SidebarLabel $isOpen={isOpen}>{item.label}</S.SidebarLabel>
          </S.SidebarNavItem>
        ))}
      </S.SidebarItens>

      <S.Library>
        {C.libraryItems.map((item) => (
          <S.LibraryItem key={item.id} $type={item.type}>
            <S.LibraryAlbum src={item.icon} alt={item.label} $type={item.type} />
            <S.LibraryLabel $isOpen={isOpen}>{item.label}</S.LibraryLabel>
          </S.LibraryItem>
        ))}
      </S.Library>

      <S.Line />

      <S.Type $isOpen={isOpen}>
        {C.typeMusics.map((item) => (
          <S.TypeMusics key={item.name}>{item.name}</S.TypeMusics>
        ))}
      </S.Type>
    </S.Sidebar>
  );
};
