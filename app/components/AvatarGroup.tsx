'use client'

import { User } from "@prisma/client"
import Image from "next/image";

interface IAvatarProps {
  users?: User[];
}

export default function AvatarGroup({ users = [] }: IAvatarProps) {

  const slicedUsers = users.slice(0, 3)
  const positionMap = {
    0: 'top-0 left-0',
    1: 'bottom-0 left-[12px]',
    2: 'botom-0 right-0'

  }
  return (
    <div className="relative h-11 w-11">
      {
        slicedUsers.map((user, index) => (
          <div key={user.id} className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${positionMap[index as keyof typeof positionMap]}`}>
            <Image alt="Avatar" fill src={user?.image || '/images/placeholder.jpg'}/>
          </div>

        ))

      }
    </div>
  )

}