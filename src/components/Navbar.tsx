'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  // { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* ✅ Logo + Company Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"      // <-- put your logo file here (e.g. /public/logo.png)
            alt="RKSS Consultants Logo"
            width={40}
            height={40}
            className="rounded-md object-contain"
            priority
          />
          <span className="text-2xl font-semibold text-gray-800 tracking-tight">
            RKSS <span className="text-blue-600 font-bold">Consultants</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-gray-700">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            {/* <div className="px-6 py-3">
              <Link href="/get-started">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Get Started
                </button>
              </Link>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
