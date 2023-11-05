import { authOptions } from '@/configs/next-auth/authOptions';
import { User, role } from '@/model';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React from 'react';

type Props = {};

const user: User = {
  id: 1,
  userName: 'JohnDoe',
  email: 'john.doe@example.com',
  token: '',
  tokenExpiredAt: null,
  role: role.admin,
  image: '', // Replace this URL with the user's profile picture
};

const ProfilePage = async (props: Props) => {
  const user = (await getServerSession(authOptions))?.user;

  return (
    user && (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Profile</h1>
        <div className="flex flex-col  items-center mb-6">
          <img
            src={user?.image || 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'}
            alt={user.userName}
            className="w-32 h-32 rounded-full mb-6"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{user.userName}</h2>
            <p className="text-lg mb-2">{user.email}</p>
            <p className="text-lg">{role[user.role]}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
