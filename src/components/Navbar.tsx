'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },

  {
    label: 'Resources',
    children: [
      { label: 'Blog & Updates', href: '/resources/blog' },
      { label: 'Tax Calendar', href: '/resources/tax-calendar' },
      // { label: 'Downloads', href: '/resources/downloads' },
      // { label: 'FAQs', href: '/resources/faqs' },
    ],
  },

  {
    label: 'Legal',
    children: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Terms of Use', href: '/legal/terms-of-use' },
      { label: 'Disclaimer', href: '/legal/disclaimer' },
    ],
  },

  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
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
          {NAV_LINKS.map((item, i) => (
            <li
              key={i}
              className="relative group cursor-pointer"
              onMouseEnter={() => setOpenDropdown(i)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="hover:text-blue-600 transition-colors duration-200">
                  {item.label}
                </span>
              )}

              {/* Dropdown */}
              {item.children && (
                <div
                  className={`absolute left-0 mt-2 bg-white shadow-lg border border-gray-100 rounded-lg py-2 w-56 transition-all duration-300 ${
                    openDropdown === i ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {item.children.map((sub, j) => (
                    <Link
                      key={j}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
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
            {NAV_LINKS.map((item, i) => (
              <div key={i}>
                <div
                  className="px-6 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 flex justify-between items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === i ? null : i)
                  }
                >
                  {item.label}
                  {item.children && (
                    <span>{openDropdown === i ? '−' : '+'}</span>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.children && openDropdown === i && (
                  <div className="bg-gray-50 border-l">
                    {item.children.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-10 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
