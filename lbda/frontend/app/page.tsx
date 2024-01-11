import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="landing-page-gradient-2 relative flex h-max w-screen flex-col items-center font-lora ">
      <Header />
      <ChatSection />
    </main>
  );
}
