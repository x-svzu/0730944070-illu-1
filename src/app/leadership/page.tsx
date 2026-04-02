"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Crown, ChevronLeft, Eye } from "lucide-react";

export default function LeadershipPage() {
  const leadership = [
    {
      title: "Grand Master",
      description: "The highest authority in the Lodge, responsible for overall direction and governance. The Grand Master represents the continuation of our ancient traditions in the modern world.",
    },
    {
      title: "Deputy Grand Master",
      description: "Second in command, assisting the Grand Master and overseeing day-to-day operations of the Lodge.",
    },
    {
      title: "Grand Chancellor",
      description: "Responsible for the administration of the Lodge, including membership, events, and communications.",
    },
    {
      title: "Grand Treasurer",
      description: "Oversees the financial affairs of the Lodge and its charitable initiatives.",
    },
    {
      title: "Grand Secretary",
      description: "Maintains the records, archives, and official documentation of the Lodge.",
    },
    {
      title: "Council of Elders",
      description: "A body of senior members who provide wisdom and guidance on matters of importance to the Lodge.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Parallax */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/609cee0c7dac1935468057f1_Spectre board meeting.jpg')" }}
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
            
            <div className="mb-6">
              <Image 
                src="/0730944070-illu-1/images/_118890292_iluminati-emblema.jpg.png" 
                alt="Illuminati Logo" 
                width={64} 
                height={64}
                className="mx-auto"
              />
            </div>
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">About Us</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Our Leadership
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
          </div>
        </section>

        {/* Parallax Image Section */}
        <section className="relative py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/2021-Install-24.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/80 to-[#0A1929]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-lg mb-4 font-cinzel">Leadership Installation Ceremony</p>
            <p className="text-[#b0b0b0] text-xl max-w-2xl mx-auto">
              Our leaders are chosen through sacred rites, selected for their wisdom, dedication, and unwavering commitment to the principles of enlightenment.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* Introduction */}
            <section className="mb-16">
              <div className="space-y-6 text-[#c0c0c0] text-lg leading-relaxed text-center max-w-3xl mx-auto">
                <p>
                  The Illuminati Lodge of New York is guided by leaders who have demonstrated exceptional dedication to our principles and have risen through the degrees of our order through merit, service, and wisdom.
                </p>
                <p>
                  While the identities of our leadership remain private, their commitment to enlightenment and service is unwavering. Each has dedicated decades to the pursuit of knowledge and the betterment of humanity.
                </p>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Featured Image */}
            <section className="mb-16">
              <div className="relative rounded-xl overflow-hidden image-frame">
                <Image 
                  src="/0730944070-illu-1/images/mayor-917149_640-1.jpg" 
                  alt="Leadership gathering"
                  width={1000}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
                <div className="frame-corner frame-corner-tl" />
                <div className="frame-corner frame-corner-tr" />
                <div className="frame-corner frame-corner-bl" />
                <div className="frame-corner frame-corner-br" />
              </div>
            </section>

            {/* Leadership Grid */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leadership.map((role, index) => (
                  <div key={index} className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all duration-300 card-shine">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                        <Crown className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#d4af37]">{role.title}</h3>
                    </div>
                    <p className="text-[#9a9a9a] text-base leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* CTA Card */}
            <section className="mb-16">
              <div className="relative rounded-xl overflow-hidden">
                <Image 
                  src="/0730944070-illu-1/images/00_Opening.jpg" 
                  alt="Temple Opening"
                  fill
                  className="object-cover -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#112240]/95 to-[#0D2137]/90" />
                <div className="relative z-10 p-8 text-center">
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-4 font-cinzel">Rise to Leadership</h3>
                  <p className="text-[#c0c0c0] mb-6 max-w-2xl mx-auto">
                    Leadership in the Illuminati is earned through dedication, service, and the pursuit of enlightenment. Every member has the potential to rise through our degrees and take on leadership roles.
                  </p>
                  <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-3">
                    <Link href="/membership">
                      Begin Your Journey
                    </Link>
                  </Button>
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
