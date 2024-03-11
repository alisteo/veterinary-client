export const account = {
  displayName: 'Jaydon Frankie',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatars/avatar_25.jpg',
  role: 'Admin',
};

// ----------------------------------------------------------------------

import { ReactElement } from 'react';

import SvgColorForwardRef from '@/shared/components/ui/SideNav/components/SvgColorForwardRef';

const icon = (name: string) => {
  return (
    <SvgColorForwardRef
      src={`/assets/icons/navbar/${name}.svg`}
      sx={{ width: 1, height: 1 }}
    />
  );
};

interface NavItem {
  title: string;
  path: string;
  icon: ReactElement;
}

export const navConfig: NavItem[] = [
  {
    title: 'Consultas',
    path: '/consultas',
    icon: icon('ic_lock'),
  },
];
