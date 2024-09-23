'use client';

import { type FC, type ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
