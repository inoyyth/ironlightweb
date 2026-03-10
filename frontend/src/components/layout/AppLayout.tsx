import Topbar from "./Topbar";
import MainContent from "./MainContent";
import Footer from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
}
