"use client";

import Topbar from "./Topbar";
import MainContent from "./MainContent";
import { TopbarProvider } from "@/context/TopbarContext";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <TopbarProvider>
      <div className="flex min-h-screen flex-col">
        <Topbar />
        <MainContent>{children}</MainContent>
      </div>
    </TopbarProvider>
  );
}
