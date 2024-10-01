'use client';

import { signOutUser } from '@/app/actions/authActions';
import { DropdownItem, Dropdown, DropdownSection, DropdownTrigger, Avatar, DropdownMenu } from '@nextui-org/react';
import { Session } from 'next-auth';
import Link from 'next/link';
import type { FC } from 'react'

interface Props {
  user: Session['user'];
}

export const UserMenu: FC<Props> = ({ user }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={user?.name || "user avatar"}
          size="sm"
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="user actions menu">
        <DropdownSection showDivider>
          <DropdownItem isReadOnly as="span" className="h-14 flex flex-row" aria-label="username">
            Signed in as {user?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href='/members/edit'>
          Edit profile
        </DropdownItem>
        <DropdownItem color="danger" onClick={async () => signOutUser()}>
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};