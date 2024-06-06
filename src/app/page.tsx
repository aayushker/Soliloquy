// 1. import `NextUIProvider` component
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <Hero />
    </main>
  );
}
