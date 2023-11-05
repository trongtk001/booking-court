import ProfileSideBar from '@/Components/profile-side-bar/side-bar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ProfileLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <ProfileSideBar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default ProfileLayout;
