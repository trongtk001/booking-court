'use client';
import { dropdownLink } from '@/configs/route';
import { User } from '@/model';
import { publicRoutes } from '@/routes';
import { Transition } from '@headlessui/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Avatar from '../flow-bite/avatar';
import Menu, { Button, Item, Items } from '../headless-ui/Menu';

const className = {
  avatar: 'mr-2',
  menu: 'relative z-10 ',
  Items:
    'py-2 absolute right-0 mt-4  divide-gray-100 rounded-md divide-y' +
    ' bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  Item: 'block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:cursor-pointer',
};

const UserAvatar = ({ user }: { user: User | undefined }) => {
  if (!user)
    return (
      <Link className="p-2 mb-1 text-sm hover:text-primary" href={publicRoutes.login}>
        Login
      </Link>
    );

  return (
    <Menu as="div" className={className.menu}>
      <Button>
        <Avatar
          className={className.avatar}
          alt="User settings"
          img={user?.image || 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'}
          rounded
        />
      </Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Items className={className.Items}>
          <div className="px-4 py-2">
            <h5 className="truncate capitalize text-sm">{user.userName}</h5>
            <h5 className="truncate text-sm font-semibold">{user.email}</h5>
          </div>
          <div>
            {dropdownLink.map((item, i) =>
              !item?.role ? (
                <Item className={className.Item} as={Link} href={item.path} key={i}>
                  {item.title}
                </Item>
              ) : (
                item.role?.includes(user.role) && (
                  <Item className={className.Item} as={Link} href={item.path} key={i}>
                    {item.title}
                  </Item>
                )
              )
            )}
          </div>
          <div className="">
            <Item className={className.Item} as="button" onClick={() => signOut()}>
              Logout
            </Item>
          </div>
        </Items>
      </Transition>
    </Menu>
  );
};

export default UserAvatar;
