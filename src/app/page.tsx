// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import Header from "../components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
    </main>
  );
}
