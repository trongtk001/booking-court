import Header from '@/Components/header';
import * as React from 'react';

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <div className="mt-6">{children}</div>
      {/* <footer className="h-40">footer</footer> */}
    </>
  );
}
