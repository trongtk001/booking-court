'use client';
import { publicRoutes } from '@/routes';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const className = {
  header: 'h-20 w-full',
  brand: 'h-16',
  avatar: 'mr-2',
  dropdown: '',
  dropdownHeader: 'block text-sm',
  dropdownHeaderName: 'block truncate text-sm font-medium',
  dropdownItem: '',
  navCollapse: 'my-auto md:basis-7/12 lg:basis-9/12 z-10 bg-white p-3',
  search:
    'basis-2/12 sm:w-full h-10 flex justify-between rounded-xl bg-neutral/gray' +
    ' focus-within:outline focus-within:outline-1 focus-within:outline-primary' +
    ' sm:mb-1 lg:mr-auto',
  searchInput: 'h-10 border-none bg-transparent' + ' focus:ring-0',
  searchIcon: 'w-4 h-10 inline mr-3',
  navbarLink: 'leading-10 hover:cursor-pointer',
};

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <Navbar className={className.header} fluid>
      <Navbar.Brand as={Link} href={publicRoutes.home}>
        <Image alt="Flowbite React Logo" className=" h-16" src="/brand.svg" width={200} height={62} />
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown
          inline
          arrowIcon={false}
          label={
            <Avatar
              className={className.avatar}
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className={className.dropdownHeader}>Bonnie Green</span>
            <span className={className.dropdownHeaderName}>name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className={className.navCollapse}>
        <div className={className.search}>
          <input className={className.searchInput} type="text" placeholder="Search" />
          <MagnifyingGlassIcon className={className.searchIcon} />
        </div>
        <Navbar.Link as={Link} href={publicRoutes.home} className={className.navbarLink}>
          Browse
        </Navbar.Link>
        <Navbar.Link as={Link} href={publicRoutes.home} className={className.navbarLink}>
          My activities
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
