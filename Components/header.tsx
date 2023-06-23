import { privateRoutes, publicRoutes } from '@/routes';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from './flow-bite/avatar';
import Dropdown, { Header as DropDownHeader, Item, Divider } from './flow-bite/dropdown';
import Navbar, { Brand, Collapse, Link as NavbarLink, Toggle } from './flow-bite/nav-bar';
import LogoutBtn from './logout-btn';

export interface IHeaderProps {}

export default async function Header() {
  return (
    <Navbar className={className.header} fluid>
      <Brand as={Link} href={publicRoutes.home}>
        <Image alt="Flowbite React Logo" className=" h-16" src="/brand.svg" width={200} height={62} />
      </Brand>

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
          <DropDownHeader>
            <span className={className.dropdownHeader}>Bonnie Green</span>
            <span className={className.dropdownHeaderName}>name@flowbite.com</span>
          </DropDownHeader>
          <Item>Dashboard</Item>
          <Item>Settings</Item>
          <Item>Earnings</Item>
          <Divider />
          <LogoutBtn>
            <Item>Sign out</Item>;
          </LogoutBtn>
        </Dropdown>
        <Toggle />
      </div>

      <Collapse className={className.navCollapse}>
        <div className={className.search}>
          <input className={className.searchInput} type="text" placeholder="Search" />
          <MagnifyingGlassIcon className={className.searchIcon} />
        </div>
        <NavbarLink as={Link} href={privateRoutes.calendar} className={className.navbarLink}>
          Browse
        </NavbarLink>
        <NavbarLink as={Link} href={privateRoutes.managerCourt} className={className.navbarLink}>
          My activities
        </NavbarLink>
      </Collapse>
    </Navbar>
  );
}

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
