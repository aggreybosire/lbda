import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 md:p-8 lg:p-12 xl:p-16 background-gradient">
      <Header />
      <ChatSection />
    </main>
  );
}
