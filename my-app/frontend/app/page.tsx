import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex justify-between items-center py-4 px-7 border-b">
      <Header />
      <ChatSection />
    </main>
  );
}
