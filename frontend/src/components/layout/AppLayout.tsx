import Topbar from "./Topbar";
import MainContent from "./MainContent";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <Topbar />
      <MainContent>{children}</MainContent>
    </div>
  );
}
