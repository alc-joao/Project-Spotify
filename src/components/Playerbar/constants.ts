export const PlayerBarC = {
  music: {
    id: 'test-music',
    title: 'Test Music',
    artist: 'Test Artist',
    cover: '/imgs/spotify.png',
  },

  leftActions: [
    {
      id: 'favorite',
      icon: '/svgs/playerbar/plus.svg',
      activeIcon: '/svgs/playerbar/check.svg',
      alt: 'favorite',
    },
  ],

  centerActions: [
    {
      id: 'shuffle',
      icon: '/svgs/playerbar/shuffle.svg',
      alt: 'shuffle',
    },
    {
      id: 'previous',
      icon: '/svgs/playerbar/previous.svg',
      alt: 'previous',
    },
    {
      id: 'toggle-play',
      icon: '/svgs/playerbar/play.svg',
      alt: 'play',
      active: true,
    },
    {
      id: 'next',
      icon: '/svgs/playerbar/next.svg',
      alt: 'next',
    },
    {
      id: 'repeat',
      icon: '/svgs/playerbar/repeat.svg',
      alt: 'repeat',
    },
  ],

  rightActions: [
    {
      id: 'queue',
      icon: '/svgs/playerbar/queue.svg',
      alt: 'queue',
    },
    {
      id: 'devices',
      icon: '/svgs/playerbar/devices.svg',
      alt: 'devices',
    },
    {
      id: 'volume',
      icon: '/svgs/playerbar/volume.svg',
      alt: 'volume',
    },
    {
      id: 'fullscreen',
      icon: '/svgs/playerbar/fullscreen.svg',
      alt: 'fullscreen',
    },
  ],

  progress: {
    currentTime: '2:39',
    duration: '4:22',
  },
};
