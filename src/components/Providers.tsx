'use client';

import { type FC, type ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <NextUIProvider>
      <ToastContainer position='bottom-right' hideProgressBar className="z-40" />
      {children}
    </NextUIProvider>
  )
}
