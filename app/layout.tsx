import AuthProvider from '@/Components/auth-provider/auth-provider';
import Flowbite from '@/Components/flow-bite/flowbite';
import SWRConfig from '@/configs/SWRConfig';
import { Session } from 'next-auth';
import { Nunito } from 'next/font/google';
import { theme } from './theme';
import ToastContainer from '@/Components/toastify/toast-container';
const nuntito = Nunito({ subsets: ['latin'] });
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Tennique',
  description: 'Tennique',
};

interface IRootLayoutProps {
  children: React.ReactNode;
  session: Session;
}

export default function RootLayout({ children, session }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body className={nuntito.className + ' '} suppressHydrationWarning={true}>
        <AuthProvider session={session}>
          <Flowbite theme={{ theme }}>
            <SWRConfig>
              {children}
              <ToastContainer />
            </SWRConfig>
          </Flowbite>
        </AuthProvider>
      </body>
    </html>
  );
}
