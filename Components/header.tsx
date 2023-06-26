import { authOptions } from '@/configs/next-auth/authOptions';
import { dropdownLink, headerLink } from '@/configs/route/header';
import { User } from '@/model';
import { publicRoutes } from '@/routes';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import Avatar from './flow-bite/avatar';
import Dropdown, { Divider, Header as DropDownHeader, Item } from './flow-bite/dropdown';
import Navbar, { Brand, Collapse, Link as NavbarLink, Toggle } from './flow-bite/nav-bar';
import LogoutBtn from './logout-btn';

export interface IHeaderProps {}

export default async function Header() {
  const user = (await getServerSession(authOptions))?.user;

  return (
    <Navbar className={className.header} fluid>
      <Brand as={Link} href={publicRoutes.home}>
        <Image alt="Flowbite React Logo" className=" h-16" src="/brand.svg" width={200} height={62} />
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
        {headerLink.map((item, i) => (
          <>
            <NavbarLink key={i} as={Link} href={item.path} className={className.navbarLink}>
              {item.title}
            </NavbarLink>
          </>
        ))}
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
  navbarLink: 'h-10 inline-block leading-10 hover:cursor-pointer truncate',
};

const UserAvatar = ({ user }: { user: User | undefined }) => {
  if (!user)
    return (
      <Link className="p-2 mb-1 hover:text-primary" href={publicRoutes.login}>
        Login
      </Link>
    );

  return (
    <Dropdown
      inline
      arrowIcon={false}
      label={
        <Avatar
          className={className.avatar}
          alt="User settings"
          img={user?.image || 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'}
          rounded
        />
      }
    >
      <DropDownHeader>
        <span className={className.dropdownHeader}>{user.userName}</span>
        <span className={className.dropdownHeaderName}>{user.email}</span>
      </DropDownHeader>
      {dropdownLink.map((item, i) => (
        <Item key={i}>
          <Link href={item.path}>{item.title}</Link>
        </Item>
      ))}
      <Divider />
      <LogoutBtn>
        <Item>Sign out</Item>;
      </LogoutBtn>
    </Dropdown>
  );
};
