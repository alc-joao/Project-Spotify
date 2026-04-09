export const SidebarC = {
  id: 'sidebar',

  menuItems: [
    {
      id: 'home',
      label: 'Home',
      icon: '/svgs/sidebar/home.svg',
      active: true,
    },
    {
      id: 'search',
      label: 'Search',
      icon: '/svgs/sidebar/search.svg',
      active: false,
    },
    {
      id: 'library',
      label: 'Your Library',
      icon: '/svgs/sidebar/library.svg',
      active: false,
    },
  ],
  libraryItems: [
    {
      id: 'create playlist',
      label: 'Create Playlist',
      icon: '/svgs/sidebar/Subtract.svg',
      type: 'action',
    },
    {
      id: 'liked songs',
      label: 'Liked Songs',
      icon: '/svgs/sidebar/liked-songs.svg',
      type: 'liked',
    },
    {
      id: 'hasos',
      label: 'Hasos',
      icon: '/imgs/sidebar/hasos.jpg',
      type: 'album',
    },
    {
      id: 'caro vapor II',
      label: 'Caro Vapor II',
      icon: '/imgs/sidebar/CVII.jpeg',
      type: 'album',
    },
    {
      id: 'xtranho',
      label: 'Xtranho',
      icon: '/imgs/sidebar/xtranho.jpeg',
      type: 'album',
    },
    {
      id: '100% CBJR',
      label: '100% Charlie Brown JR',
      icon: '/imgs/sidebar/CB.jpg',
      type: 'album',
    },
  ],
  typeMusics: [
    {
      key: 0,
      name: 'Chill Mix',
    },
    {
      key: 1,
      name: 'Insta Hits',
    },
    {
      key: 2,
      name: 'Your Top Songs 2025',
    },
    {
      key: 3,
      name: 'Mellow Songs',
    },
    {
      key: 4,
      name: 'Anime Lofi & Chillhop Music',
    },
  ],
};
