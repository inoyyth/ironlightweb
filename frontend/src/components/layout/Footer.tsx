export default function Footer() {
  return (
    <footer className="h-14 bg-white border-t border-gray-200 flex items-center shrink-0">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} App Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
