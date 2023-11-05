'use client';
import { profileSideBar } from '@/configs/route';
import { role } from '@/model';
import { Sidebar } from 'flowbite-react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

type Props = {};

const ProfileSideBar = (props: Props) => {
  const pathName = usePathname();
  const user = useSession().data?.user;

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.ItemGroup>
        {profileSideBar.map((item, i) => {
          if (!item?.role || item.role?.includes(user?.role as role))
            return (
              <Sidebar.Item key={i} active={pathName === item.path} href={item.path} icon={item.icon}>
                <p>{item.title}</p>
              </Sidebar.Item>
            );
        })}
      </Sidebar.ItemGroup>
    </Sidebar>
  );
};

export default ProfileSideBar;
