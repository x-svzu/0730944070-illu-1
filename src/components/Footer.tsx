"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Tenets & Purpose", href: "/tenets-and-purpose" },
    { label: "Leadership", href: "/leadership" },
  ],
  membership: [
    { label: "Join the Brotherhood", href: "/membership" },
    { label: "Member Benefits", href: "/membership-rewards" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQs", href: "/faqs" },
  ],
  initiatives: [
    { label: "Philanthropy", href: "/global-initiatives" },
    { label: "Charity Programs", href: "/charity-programs" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#0D2137] border-t border-[#d4af37]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image 
                src="/0730944070-illu-1/images/_118890292_iluminati-emblema.jpg.png" 
                alt="Illuminati Logo" 
                width={36} 
                height={36}
                className="transition-transform duration-300 hover:scale-105"
              />
              <div>
                <h2 className="font-cinzel text-xl font-semibold text-[#d4af37] tracking-wide">
                  Illuminati Lodge
                </h2>
                <p className="text-xs text-[#8a8a8a] tracking-[0.2em] font-cinzel">OF NEW YORK</p>
              </div>
            </Link>
            <p className="text-[#9a9a9a] text-sm leading-relaxed mb-6 max-w-sm">
              For over two centuries, the Illuminati Lodge of New York has stood as a beacon of enlightenment, guiding seekers toward the light of knowledge, wisdom, and universal understanding.
            </p>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-[#d4af37] mb-3">Stay Enlightened</h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-[#0A1929] border border-[#d4af37]/30 rounded px-3 py-2 text-sm text-[#FFFFFF] placeholder-[#666] focus:outline-none focus:border-[#d4af37] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] px-3 py-2 rounded transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-sm font-semibold text-[#d4af37] mb-4">About Us</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-[#9a9a9a] hover:text-[#d4af37] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="text-sm font-semibold text-[#d4af37] mb-4">Membership</h3>
            <ul className="space-y-2">
              {footerLinks.membership.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-[#9a9a9a] hover:text-[#d4af37] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="text-sm font-semibold text-[#d4af37] mb-4">Initiatives</h3>
            <ul className="space-y-2">
              {footerLinks.initiatives.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-[#9a9a9a] hover:text-[#d4af37] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-[#d4af37]/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#9a9a9a]">
            <span>666 Fifth Avenue, New York, NY 10103</span>
            <div className="flex items-center gap-2">
              <a href="tel:+14255437872" className="hover:text-[#d4af37] transition-colors">+1 (425) 543-7872</a>
              <span className="text-[#d4af37]">|</span>
              <a href="https://wa.me/14255437872" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
            <span>contact@illuminati-ny.org</span>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#d4af37]/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#666]">
              © {new Date().getFullYear()} Illuminati Lodge of New York. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-[#9a9a9a] hover:text-[#d4af37] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-[#666] hover:text-[#d4af37] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-[#666] hover:text-[#d4af37] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-[#666] hover:text-[#d4af37] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
