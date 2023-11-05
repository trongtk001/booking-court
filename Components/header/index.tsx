import { authOptions } from '@/configs/next-auth/authOptions';
import { headerLink } from '@/configs/route/header';
import { publicRoutes } from '@/routes';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import Navbar, { Brand, Collapse, Link as NavbarLink, Toggle } from '../flow-bite/nav-bar';
import UserAvatar from './avatar-drop-down';

const className = {
  header: 'h-21 w-full z-10 pb-6 border-b',
  brand: 'h-16',
  navCollapse: 'max-md:z-10 my-auto md:basis-7/12 lg:basis-9/12 bg-white p-3',
  search:
    'basis-2/12 sm:w-full h-10 flex justify-between rounded-xl bg-neutral/gray' +
    ' focus-within:outline focus-within:outline-1 focus-within:outline-primary' +
    ' sm:mb-1 lg:mr-auto',
  searchInput: 'h-10 border-none bg-transparent' + ' focus:ring-0',
  searchIcon: 'w-4 h-10 inline mr-3',
  navbarLink: 'mt-1 w-full h-10 inline-block leading-10 hover:cursor-pointer truncate',
};

export default async function Header() {
  const user = (await getServerSession(authOptions))?.user;

  return (
    <Navbar className={className.header} fluid>
      <Brand as={Link} href={publicRoutes.home}>
        <Image alt="Flowbite React Logo" className="h-16" src="/brand.svg" width={200} height={64} priority />
      </Brand>

      <div className="flex md:order-2">
        <UserAvatar user={user} />
        <Toggle />
      </div>

      <Collapse className={className.navCollapse}>
        <div className={className.search}>
          <input className={className.searchInput} type="text" placeholder="Search" />
          <MagnifyingGlassIcon className={className.searchIcon} />
        </div>
        {headerLink.map((item, i) => {
          return (
            <NavbarLink key={i} as={Link} href={item.path} className={className.navbarLink}>
              {item.title}
            </NavbarLink>
          );
        })}
      </Collapse>
    </Navbar>
  );
}
