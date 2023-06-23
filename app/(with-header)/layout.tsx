import Header from '@/Components/header';
import * as React from 'react';

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <div className="mt-3">{children}</div>
    </>
  );
}
