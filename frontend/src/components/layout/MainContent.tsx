import Footer from "./Footer";

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1">
      {children}
      <Footer />
    </main>
  );
}
