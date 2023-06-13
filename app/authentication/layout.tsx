import LoginBackground from "@/Components/login_background";
import Image from "next/image";
import React from "react";

interface IAuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout: React.FunctionComponent<IAuthenticationLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex justify-between">
      <div className="basis-1/2 flex justify-center">
        <div>
          <Image className="mt-11 mb-7" src="/icon.png" alt="icon" width={256} height={62} />
          {children}
        </div>
      </div>
      <LoginBackground className="basis-1/2" />
    </div>
  );
};

export default AuthenticationLayout;
