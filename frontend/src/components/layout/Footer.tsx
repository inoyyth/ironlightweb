export default function Footer() {
  return (
    <footer className="flex h-14 shrink-0 items-center border-t border-gray-200 bg-neutral-900">
      <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-sm text-neutral-25">
          &copy; {new Date().getFullYear()} Ironlight. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
