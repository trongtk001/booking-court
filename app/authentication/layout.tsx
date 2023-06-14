import LoginBackground from '@/Components/login_background';
import Image from 'next/image';
import React from 'react';

interface IAuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout: React.FunctionComponent<IAuthenticationLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen grid grid-cols-12 justify-between">
      <div className="flex justify-center col-span-full lg:col-span-5 xl:col-span-6">
        <div>
          <Image className="mt-11 mb-7" src="/icon.png" alt="icon" width={256} height={62} />
          {children}
        </div>
      </div>
      <LoginBackground className=" invisible lg:visible lg:col-span-7 xl:col-span-6" />
    </div>
  );
};

export default AuthenticationLayout;
