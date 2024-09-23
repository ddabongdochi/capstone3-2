// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SocketProvider from "../../providers/SocketProvide";

const inter = Inter({ subsets: ["latin"] });

// 환경 변수에서 publishableKey 가져오기
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const metadata: Metadata = {
  title: "Video Conference App",
  description: "A video conferencing application with meeting summary feature",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SocketProvider>
          {children}
          </SocketProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
