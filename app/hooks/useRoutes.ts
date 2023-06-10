
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import {
  HiArrowLeftOnRectangle,
  HiUsers
} from 'react-icons/hi2';
import { signOut } from 'next-auth/react';
import useConversation from './useConversation';

const UseRoutes = () => {

  const pathname = usePathname();
  console.log('pathname', pathname);
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    {
      label: 'Chat',
      href: '/conversations',
      icon: HiChat,
      active: pathname === '/conversations' || !!conversationId
    },
    {
      label: 'Users',
      href: '/users',
      icon: HiUsers,
      active: pathname === '/users'
    },
    {
      label: 'Logout',
      href: '#',
      icon: HiArrowLeftOnRectangle,
      onClick: () => signOut(),

    }
  ], [pathname, conversationId]);

  return routes;
}

export default UseRoutes;
