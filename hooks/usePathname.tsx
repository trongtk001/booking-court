import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

const usePathname = (headersList: ReadonlyHeaders): string => {
  const fullUrl = headersList.get('referer') || '';
  const domain = headersList.get('host') || '';
  const [, pathname] = fullUrl.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];

  return pathname;
};

export default usePathname;
