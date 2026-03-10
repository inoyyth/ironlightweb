import Image from "next/image";

export default function Topbar() {
  return (
    <header className="bg-netral-900 flex h-16 shrink-0 items-center border-b bg-neutral-900">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <span className="text-lg font-semibold text-gray-800">
          <Image
            src="/images/logo.png"
            alt="App Logo"
            width={145}
            height={40}
          />
        </span>
        <nav className="flex items-center gap-4">
          <span className="text-neutral-25 text-sm">Work</span>
          <span className="text-neutral-25 text-sm">Services</span>
          <span className="text-neutral-25 text-sm">About</span>
        </nav>
      </div>
    </header>
  );
}
