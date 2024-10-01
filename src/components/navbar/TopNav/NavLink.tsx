'use client';

import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react'

interface Props {
  href: string;
  label: string;
}

export const NavLink: FC<Props> = ({ href, label }) => {
  const pathname = usePathname();

  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>{label}</NavbarItem>
  );
};