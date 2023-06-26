'use client';
import fetcher from '@/service/client/fetcher';
import React from 'react';
import { SWRConfig as SWR } from 'swr';

interface IProps {
  children: React.ReactNode;
}

export default function SWRConfig({ children }: IProps) {
  return <SWR value={{ fetcher: (url) => fetcher(url) }}>{children}</SWR>;
}
