import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "@/Context/Store";
import Navbar from "@/components/Navbar/Page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOOKMATCHAPP",
  description: "created by khush ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children} <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
