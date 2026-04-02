"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQAccordion from "./FAQAccordion";
import { ChevronLeft } from "lucide-react";

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Parallax */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/mysterious-shadow-figure-stockcake.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#112240] via-[#0D2137]/90 to-[#0A1929]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A1929_70%)]" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.3'%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Cpolygon points='40,0 80,40 40,80 0,40'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f0d77a] transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Resources</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Frequently Asked Questions
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
            
            <p className="text-[#c0c0c0] text-lg max-w-2xl mx-auto">
              Find answers to common questions about the Illuminati Lodge of New York, our mission, 
              membership process, and what it means to be part of our distinguished brotherhood.
            </p>
          </div>
        </section>

        {/* Parallax Section */}
        <section className="relative py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/sacred-shadow-ceremony-stockcake.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/80 to-[#0A1929]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-lg mb-4 font-cinzel">Seeking Knowledge</p>
            <p className="text-[#b0b0b0] text-xl max-w-3xl mx-auto">
              The path to enlightenment begins with questions. Here we provide clarity for those 
              who seek to understand our sacred mission.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* FAQ Accordion */}
            <section className="mb-16">
              <FAQAccordion />
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Contact CTA */}
            <section className="mb-16">
              <div className="relative rounded-xl overflow-hidden">
                <Image 
                  src="/0730944070-illu-1/images/mystical-owl-guardian-stockcake.jpg" 
                  alt="Wisdom and Guidance"
                  fill
                  className="object-cover -z-10 opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#112240]/95 via-[#0D2137]/95 to-[#112240]/95" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                
                <div className="relative z-10 p-8 text-center">
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">
                    Still Have Questions?
                  </h3>
                  <p className="text-[#c0c0c0] mb-6 max-w-lg mx-auto">
                    We&apos;re happy to provide more information about our organization, membership, 
                    or any other inquiries you may have.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-3 rounded transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
