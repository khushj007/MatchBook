import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center main">
      <h1 className="text-white text-[3em]">WELCOME TO</h1>

      <h1 className="text-white text-[3em]">BOOK MATCH APP</h1>
      <Link href={"/check"} className="mbutton">
        CLICK TO CONTINUE
      </Link>
    </main>
  );
}
