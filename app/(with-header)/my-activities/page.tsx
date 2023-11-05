'use client';
import Avatar from '@/Components/flow-bite/avatar';
import Menu, { Button, Item, Items } from '@/Components/headless-ui/Menu';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

const className = {
  menu: 'relative inline-block text-left',
  Items:
    'absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md' +
    ' bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  Item: 'block px-4 py-2 text-sm hover:bg-gray-100',
};

type Props = {};

const MyActivities = (props: Props) => {
  return (
    <div className="flex justify-center">
      <Menu as="div" className={'relative inline-block text-left'}>
        <Button>
          <Avatar alt="User settings" img={'https://flowbite.com/docs/images/people/profile-picture-5.jpg'} rounded />
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
            <h1>123</h1>

            <Item className={className.Item} href="#" as={Link}>
              <h1>Account settings</h1>
            </Item>
            <Item className={className.Item} href="#" as={Link}>
              <h1>Documentation</h1>
            </Item>
            <Item className={className.Item} href="#" as={Link}>
              <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Item>
          </Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MyActivities;
