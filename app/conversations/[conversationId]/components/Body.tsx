'use client'

import { FullMessageType } from "@/app/types"
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import axios from "axios";
import useConversation from "@/app/hooks/useConversation";


interface IBodyProps {
  initialMessages: FullMessageType[];

}

export default function Body({ initialMessages }: IBodyProps) {
  const [messages, setMessages] = useState<FullMessageType[]>(initialMessages);

  const buttomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`)

  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBox
          key={message.id}
          isLast={index === messages.length - 1}
          data={message}
        />
      ))}
      <div ref={buttomRef} className="pt-24"></div>
    </div>

  )

}