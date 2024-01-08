"use client";

import { useChat } from "ai/react";
import { ChatInput, ChatMessages } from "./ui/chat";

export default function ChatSection() {
  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
  } = useChat({
    api: process.env.NEXT_PUBLIC_CHAT_API,
    headers: {
      "Content-Type": "application/json", // using JSON because of vercel/ai 2.2.26
    },
  });

  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16 bg-gradient-to-b from-blue-200 to-blue-400">
      <div className="max-w-screen-md mx-auto">
        <ChatMessages
          messages={messages}
          isLoading={isLoading}
          reload={reload}
          stop={stop}
        />
        <ChatInput
          input={input}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          isLoading={isLoading}
          multiModal={process.env.NEXT_PUBLIC_MODEL === "gpt-4-vision-preview"}
        />
      </div>
    </div>
  );
}
