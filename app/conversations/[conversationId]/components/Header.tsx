'use client'

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/app/components/AvatarGroup";

interface IHeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}
export default function Header({ conversation }: IHeaderProps) {

  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);


  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return 'Active'
  }, [conversation]);

  return (
    <>

      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}

      />
      <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
        <div className="flex gap-3 items-center">
          <Link href="/conversation" className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer" >
            <HiChevronLeft size={32} />
          </Link>

          {conversation.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )
          }

          <div className="flex flex-col">
            <div>
              {conversation.name || otherUser.name}
            </div>
            <div className="text-sm fint-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>

        <HiEllipsisHorizontal
          className="text-sky-500 cursor-pointer hover:text-sky-600 trsnaition"
          size={32}
          onClick={() => setDrawerOpen(true)}
        />
      </div>
    </>
  );

}


