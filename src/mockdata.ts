export const mockdata = [
  { label: 'Dashboard', icon: '📄' },
  {
    label: 'Market news',
    icon: '📂',
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: '📂',
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: '📄' },
  { label: 'Contracts', icon: '📄' },
  { label: 'Settings', icon:'📄' },
  {
    label: 'Security',
    icon: '📂',
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];
