export const menuItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Grupos', href: '/organizer/groups', 
    subItems: [
      { label: 'Novo grupo', href: '/organizer/groups/create' },
      { label: 'Todos os grupos', href: '/organizer/groups' },
    ]
  },
  { label: 'Locais', href: '/locals' },
  { label: 'Agenda', href: '/schedules' },
  { label: 'Lista', href: '/lists' },
];