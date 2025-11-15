// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} RKSS Consultants. All rights reserved.
        </p>

        <div className="flex space-x-6 text-sm">
          <Link href="/legal/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/legal/terms-of-use" className="hover:text-white">
            Terms of Use
          </Link>
          <Link href="/legal/disclaimer" className="hover:text-white">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
