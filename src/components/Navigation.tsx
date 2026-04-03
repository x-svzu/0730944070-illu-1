"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

// Eye Icon for buttons
const EyeIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const navigationItems = {
  about: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Tenets & Purpose", href: "/tenets-and-purpose" },
    { label: "Our History", href: "/our-history" },
  ],
  membership: [
    { label: "Join the Brotherhood", href: "/membership" },
    { label: "Membership Rewards", href: "/membership-rewards" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  philanthropy: [
    { label: "Global Initiatives", href: "/global-initiatives" },
    { label: "Charity Programs", href: "/charity-programs" },
  ],
  resources: [
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D2137]/95 backdrop-blur-md border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Image 
                  src="/0730944070-illu-1/images/_118890292_iluminati-emblema.jpg.png" 
                  alt="Illuminati Logo" 
                  width={28} 
                  height={28}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-cinzel text-lg font-semibold text-[#d4af37] tracking-wide leading-tight">
                  Illuminati Lodge
                </h1>
                <p className="text-[10px] text-[#8a8a8a] tracking-[0.2em] font-cinzel mt-0.5">OF NEW YORK</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-xs text-[#E0E0E0] hover:text-[#d4af37] transition-colors duration-300 font-medium tracking-wide py-2">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-xs transition-colors duration-300 flex items-center gap-1 cursor-pointer tracking-wide text-[#E0E0E0] hover:text-[#d4af37] py-2">
                About
                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown menu - shows on hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#0D2137] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 min-w-[180px]">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D2137] border-l border-t border-[#d4af37]/30 rotate-45" />
                  {navigationItems.about.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[#E0E0E0] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors relative z-10"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Membership Dropdown */}
            <div className="relative group">
              <button className="text-xs transition-colors duration-300 flex items-center gap-1 cursor-pointer tracking-wide text-[#E0E0E0] hover:text-[#d4af37] py-2">
                Membership
                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#0D2137] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 min-w-[180px]">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D2137] border-l border-t border-[#d4af37]/30 rotate-45" />
                  {navigationItems.membership.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[#E0E0E0] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors relative z-10"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Philanthropy Dropdown */}
            <div className="relative group">
              <button className="text-xs transition-colors duration-300 flex items-center gap-1 cursor-pointer tracking-wide text-[#E0E0E0] hover:text-[#d4af37] py-2">
                Philanthropy
                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#0D2137] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 min-w-[180px]">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D2137] border-l border-t border-[#d4af37]/30 rotate-45" />
                  {navigationItems.philanthropy.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[#E0E0E0] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors relative z-10"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-xs transition-colors duration-300 flex items-center gap-1 cursor-pointer tracking-wide text-[#E0E0E0] hover:text-[#d4af37] py-2">
                Resources
                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#0D2137] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 min-w-[180px]">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D2137] border-l border-t border-[#d4af37]/30 rotate-45" />
                  {navigationItems.resources.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[#E0E0E0] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors relative z-10"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/membership">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] text-xs font-semibold px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer">
                <EyeIcon size={12} />
                Seek Enlightenment
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1 text-[#d4af37] hover:text-[#f0d77a] transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D2137] border-t border-[#d4af37]/20">
          <div className="px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-sm text-[#E0E0E0] hover:text-[#d4af37]" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div>
              <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-2">About</div>
              {navigationItems.about.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-2 text-sm text-[#E0E0E0] hover:text-[#d4af37]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div>
              <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-2">Membership</div>
              {navigationItems.membership.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-2 text-sm text-[#E0E0E0] hover:text-[#d4af37]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div>
              <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-2">Philanthropy</div>
              {navigationItems.philanthropy.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-2 text-sm text-[#E0E0E0] hover:text-[#d4af37]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div>
              <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-2">Resources</div>
              {navigationItems.resources.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-2 text-sm text-[#E0E0E0] hover:text-[#d4af37]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <Link href="/membership" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] text-sm font-semibold px-4 py-2 rounded transition-all duration-300">
                <EyeIcon size={14} />
                Seek Enlightenment
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
